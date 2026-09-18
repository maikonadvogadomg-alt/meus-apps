class ExportadorConversas {
    static exportarMarkdown(chatId) {
        const chat = configManager.obterChat(chatId);
        if (!chat) return;

        let markdown = `# ${chat.titulo}\n\n`;
        markdown += `**Data de criação:** ${new Date(chat.dataCriacao).toLocaleString('pt-BR')}\n\n`;
        markdown += `---\n\n`;

        chat.mensagens.forEach((msg, index) => {
            const timestamp = new Date(msg.timestamp).toLocaleTimeString('pt-BR');
            const autor = msg.tipo === 'usuario' ? '👤 Usuário' : '🤖 IA';
            
            markdown += `## ${autor} - ${timestamp}\n\n`;
            markdown += `${msg.conteudo}\n\n`;
            markdown += `---\n\n`;
        });

        return markdown;
    }

    static exportarJSON(chatId) {
        const chat = configManager.obterChat(chatId);
        return JSON.stringify(chat, null, 2);
    }

    static exportarTodosChats() {
        let markdown = `# Histórico Completo de Chats\n\n`;
        markdown += `**Exportado em:** ${new Date().toLocaleString('pt-BR')}\n\n`;

        configManager.chats.forEach(chat => {
            markdown += `## ${chat.titulo}\n\n`;
            markdown += this.exportarMarkdown(chat.id);
            markdown += `\n\n---\n\n`;
        });

        return markdown;
    }

    static baixarArquivo(conteudo, nome, tipo = 'markdown') {
        const extensao = tipo === 'markdown' ? '.md' : '.json';
        const mimeType = tipo === 'markdown' ? 'text/markdown' : 'application/json';
        
        const blob = new Blob([conteudo], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${nome}${extensao}`;
        a.click();
        URL.revokeObjectURL(url);
    }

    static copiarParaClipboard(conteudo) {
        navigator.clipboard.writeText(conteudo).then(() => {
            mostrarNotificacao('Copiado para a área de transferência!', 'sucesso');
        }).catch(() => {
            mostrarNotificacao('Erro ao copiar', 'erro');
        });
    }
}

// Adicionar botões de exportação ao modal de chat
function adicionarBotoesExportacao() {
    const inputArea = document.querySelector('.input-area');
    
    if (!document.getElementById('botoesExportacao')) {
        const div = document.createElement('div');
        div.id = 'botoesExportacao';
        div.style.cssText = `
            display: flex;
            gap: 8px;
            margin-bottom: 10px;
            flex-wrap: wrap;
        `;
        div.innerHTML = `
            <button class="btn-control" onclick="exportarChatAtual('markdown')" title="Exportar como Markdown">📄 MD</button>
            <button class="btn-control" onclick="exportarChatAtual('json')" title="Exportar como JSON">📋 JSON</button>
            <button class="btn-control" onclick="exportarTodosChatsMD()" title="Exportar todos">📦 Todos</button>
        `;
        inputArea.parentElement.insertBefore(div, inputArea);
    }
}

function exportarChatAtual(tipo) {
    if (!chatAtualId) {
        mostrarNotificacao('Nenhum chat selecionado', 'erro');
        return;
    }

    const conteudo = tipo === 'markdown' 
        ? ExportadorConversas.exportarMarkdown(chatAtualId)
        : ExportadorConversas.exportarJSON(chatAtualId);

    const chat = configManager.obterChat(chatAtualId);
    ExportadorConversas.baixarArquivo(conteudo, chat.titulo, tipo);
}

function exportarTodosChatsMD() {
    const conteudo = ExportadorConversas.exportarTodosChats();
    ExportadorConversas.baixarArquivo(conteudo, 'todos-chats', 'markdown');
}

document.addEventListener('DOMContentLoaded', adicionarBotoesExportacao);