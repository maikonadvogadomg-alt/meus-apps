function abrirConfiguracoes() {
    document.getElementById('modalConfig').classList.add('ativo');
    carregarConfigsUI();
}

function carregarConfigsUI() {
    const config = configManager.config;

    document.getElementById('chaveOpenAI').value = config.chaves.openai;
    document.getElementById('chaveGemini').value = config.chaves.gemini;
    document.getElementById('chaveMonica').value = config.chaves.monica;
    document.getElementById('chaveBusca').value = config.chaves.busca;

    document.getElementById('promptSistema').value = config.prompts.sistema;
    document.getElementById('instrucoesAdicionais').value = config.prompts.adicionais;

    document.getElementById('nomeUsuario').value = config.perfil.nome;
    document.getElementById('profissao').value = config.perfil.profissao;
    document.getElementById('interesses').value = config.perfil.interesses;
    document.getElementById('personalidadeIA').value = config.perfil.personalidade;

    document.getElementById('enderecoLocal').value = config.iaLocal.endereco;
    document.getElementById('modeloLocal').value = config.iaLocal.modelo;
}

function salvarChaves() {
    configManager.config.chaves = {
        openai: document.getElementById('chaveOpenAI').value,
        gemini: document.getElementById('chaveGemini').value,
        monica: document.getElementById('chaveMonica').value,
        busca: document.getElementById('chaveBusca').value
    };
    configManager.salvarConfig();
    mostrarNotificacao('Chaves salvas com segurança', 'sucesso');
}

function salvarPrompts() {
    configManager.config.prompts = {
        sistema: document.getElementById('promptSistema').value,
        adicionais: document.getElementById('instrucoesAdicionais').value
    };
    configManager.salvarConfig();
    mostrarNotificacao('Prompts salvos', 'sucesso');
}

function salvarPerfil() {
    configManager.config.perfil = {
        nome: document.getElementById('nomeUsuario').value,
        profissao: document.getElementById('profissao').value,
        interesses: document.getElementById('interesses').value,
        personalidade: document.getElementById('personalidadeIA').value
    };
    configManager.salvarConfig();
    mostrarNotificacao('Perfil salvo', 'sucesso');
}

function salvarConfigLocal() {
    configManager.config.iaLocal = {
        endereco: document.getElementById('enderecoLocal').value,
        modelo: document.getElementById('modeloLocal').value
    };
    configManager.salvarConfig();
    mostrarNotificacao('Configuração local salva', 'sucesso');
}

async function testarConexaoLocal() {
    const btn = event.target;
    btn.disabled = true;
    btn.innerText = '🔄 Testando...';

    try {
        const conectado = await gerenciadorIA.testarConexaoLocal();
        const status = document.getElementById('statusLocal');

        if (conectado) {
            status.style.color = '#10b981';
            status.innerText = '✓ Conectado com sucesso!';
            mostrarNotificacao('IA Local conectada', 'sucesso');
        } else {
            status.style.color = '#ef4444';
            status.innerText = '✕ Falha na conexão';
            mostrarNotificacao('Falha ao conectar', 'erro');
        }
    } catch (erro) {
        document.getElementById('statusLocal').style.color = '#ef4444';
        document.getElementById('statusLocal').innerText = `✕ Erro: ${erro.message}`;
    } finally {
        btn.disabled = false;
        btn.innerText = '🔗 Testar Conexão';
    }
}

function abrirMemoria() {
    document.getElementById('modalMemoria').classList.add('ativo');
    atualizarListaMemoria();
}

function atualizarListaMemoria() {
    const container = document.getElementById('listaMemoria');
    const memoria = configManager.memoria;

    container.innerHTML = '';

    if (memoria.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">Nenhum registro de memória</p>';
        return;
    }

    memoria.slice(-30).forEach(registro => {
        const div = document.createElement('div');
        div.style.cssText = `
            padding: 12px;
            background: var(--bg-dark);
            border-radius: 6px;
            margin-bottom: 8px;
            border-left: 3px solid var(--primary);
        `;
        div.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: start; gap: 10px;">
                <div style="flex: 1;">
                    <div style="font-size: 12px; color: var(--text-secondary); margin-bottom: 5px;">
                        ${new Date(registro.data).toLocaleString('pt-BR')} - ${registro.tipo}
                    </div>
                    <div style="font-size: 13px; word-break: break-word;">
                        ${registro.conteudo.substring(0, 200)}${registro.conteudo.length > 200 ? '...' : ''}
                    </div>
                </div>
                <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; color: var(--text-secondary); cursor: pointer; font-size: 16px;">✕</button>
            </div>
        `;
        container.appendChild(div);
    });
}

function limparMemoria() {
    if (confirm('Tem certeza que deseja limpar toda a memória?')) {
        configManager.memoria = [];
        configManager.salvarMemoria();
        atualizarListaMemoria();
        mostrarNotificacao('Memória limpa', 'sucesso');
    }
}

function fazerBackup() {
    configManager.fazerBackup();
    mostrarNotificacao('Backup realizado com sucesso', 'sucesso');
}

function importarBackup() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = async (e) => {
        try {
            await configManager.importarBackup(e.target.files[0]);
            location.reload();
        } catch (erro) {
            mostrarNotificacao('Erro ao importar backup', 'erro');
        }
    };
    input.click();
}

function abrirPlayground() {
    document.getElementById('modalPlayground').classList.add('ativo');
}

function executarPlayground() {
    const codigo = document.getElementById('playgroundCodigo').value;
    const iframe = document.getElementById('playgroundPreview');

    try {
        iframe.contentDocument.open();
        iframe.contentDocument.write(codigo);
        iframe.contentDocument.close();
    } catch (erro) {
        mostrarNotificacao('Erro ao executar código', 'erro');
    }
}

function anexarArquivo() {
    const input = document.createElement('input');
    input.type = 'file';
    input.onchange = (e) => {
        const arquivo = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            const conteudo = event.target.result;
            document.getElementById('inputChat').value += `\n\n[Arquivo: ${arquivo.name}]\n${conteudo.substring(0, 500)}...`;
            mostrarNotificacao(`Arquivo ${arquivo.name} anexado`, 'sucesso');
        };
        reader.readAsText(arquivo);
    };
    input.click();
}

function mudarTab(tabName) {
    // Remover ativo de todos os tabs
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('ativo'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('ativo'));

    // Adicionar ativo ao tab clicado
    event.target.classList.add('ativo');
    document.getElementById(`tab-${tabName}`).classList.add('ativo');
}

function fecharModal(modalId) {
    document.getElementById(modalId).classList.remove('ativo');
}

// Fechar modal ao clicar fora
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('ativo');
    }
});

// Auto-resize textarea
document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('inputChat');
    textarea.addEventListener('input', () => {
        textarea.style.height = 'auto';
        textarea.style.height = Math.min(textarea.scrollHeight, 100) + 'px';
    });

    // Enviar com Ctrl+Enter
    textarea.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'Enter') {
            enviarMensagem();
        }
    });
});

// Carregar histórico ao iniciar
document.addEventListener('DOMContentLoaded', () => {
    atualizarHistorico();
    
    // Carregar último chat se existir
    if (configManager.chats.length > 0) {
        const ultimoChat = configManager.chats[configManager.chats.length - 1];
        carregarChat(ultimoChat.id);
    }
});