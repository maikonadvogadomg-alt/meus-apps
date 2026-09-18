let chatAtualId = null;
let conversaAtual = [];
let reconhecimentoVozAtivo = false;
let ttsAtivo = false;

// Inicializar reconhecimento de voz
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const reconhecimento = SpeechRecognition ? new SpeechRecognition() : null;

if (reconhecimento) {
    reconhecimento.lang = 'pt-BR';
    reconhecimento.continuous = false;
    reconhecimento.interimResults = false;

    reconhecimento.onstart = () => {
        document.getElementById('btnVoz').classList.add('ativo');
        reconhecimentoVozAtivo = true;
    };

    reconhecimento.onend = () => {
        document.getElementById('btnVoz').classList.remove('ativo');
        reconhecimentoVozAtivo = false;
    };

    reconhecimento.onresult = (event) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript;
        }
        document.getElementById('inputChat').value = transcript;
    };

    reconhecimento.onerror = (event) => {
        console.error('Erro no reconhecimento:', event.error);
        mostrarNotificacao('Erro no reconhecimento de voz', 'erro');
    };
}

function iniciarVoz() {
    if (!reconhecimento) {
        mostrarNotificacao('Reconhecimento de voz não suportado', 'erro');
        return;
    }

    if (reconhecimentoVozAtivo) {
        reconhecimento.abort();
    } else {
        reconhecimento.start();
    }
}

function toggleTTS() {
    ttsAtivo = !ttsAtivo;
    document.getElementById('btnTTS').classList.toggle('ativo', ttsAtivo);
    mostrarNotificacao(`TTS ${ttsAtivo ? 'ativado' : 'desativado'}`, 'sucesso');
}

function falarTexto(texto) {
    if (!ttsAtivo) return;

    const utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'pt-BR';
    utterance.rate = configManager.config.tts.velocidade;

    // Tentar usar voz Francisca do Google
    const vozes = speechSynthesis.getVoices();
    const vozFrancisca = vozes.find(v => v.name.includes('Francisca') || v.name.includes('Google'));
    if (vozFrancisca) utterance.voice = vozFrancisca;

    speechSynthesis.speak(utterance);
}

async function enviarMensagem() {
    const input = document.getElementById('inputChat');
    const mensagem = input.value.trim();

    if (!mensagem) return;

    if (!chatAtualId) {
        const novoChat = configManager.novoChat();
        chatAtualId = novoChat.id;
        atualizarHistorico();
    }

    // Adicionar mensagem do usuário
    adicionarMensagemUI('usuario', mensagem);
    configManager.salvarMensagemChat(chatAtualId, {
        tipo: 'usuario',
        conteudo: mensagem,
        timestamp: Date.now()
    });

    conversaAtual.push({ tipo: 'usuario', conteudo: mensagem });

    // Limpar input
    input.value = '';
    input.style.height = 'auto';

    // Desabilitar botão
    document.getElementById('btnEnviar').disabled = true;

    try {
        // Buscar internet se necessário
        let contextoInternet = '';
        if (configManager.config.buscaInternet === 'ativada') {
            const resultados = await gerenciadorIA.buscarInternet(mensagem);
            if (resultados.length > 0) {
                contextoInternet = '\n\nResultados de busca:\n' + 
                    resultados.map(r => `- ${r.title}: ${r.snippet}`).join('\n');
            }
        }

        // Preparar histórico com contexto de memória
        const memoriaContexto = configManager.obterMemoriaContexto(15);
        const historicoLimitado = conversaAtual.slice(-this.obterLimitContexto());

        // Enviar para IA
        const resposta = await gerenciadorIA.enviarMensagem(
            mensagem + contextoInternet,
            historicoLimitado
        );

        // Adicionar resposta da IA
        adicionarMensagemUI('ia', resposta);
        configManager.salvarMensagemChat(chatAtualId, {
            tipo: 'ia',
            conteudo: resposta,
            timestamp: Date.now()
        });

        conversaAtual.push({ tipo: 'ia', conteudo: resposta });

        // Falar resposta se TTS ativo
        falarTexto(resposta);

        // Adicionar à memória
        configManager.adicionarMemoria('conversa', `Usuário: ${mensagem}\nIA: ${resposta}`, 'chat');

    } catch (erro) {
        console.error('Erro:', erro);
        adicionarMensagemUI('erro', `Erro: ${erro.message}`);
        mostrarNotificacao('Erro ao processar mensagem', 'erro');
    } finally {
        document.getElementById('btnEnviar').disabled = false;
    }
}

function adicionarMensagemUI(tipo, conteudo) {
    const container = document.getElementById('mensagens');
    const div = document.createElement('div');
    div.className = `mensagem ${tipo}`;

    let conteudoHTML = conteudo;

    // Processar código
    if (conteudo.includes('```')) {
        conteudoHTML = processarCodigos(conteudo);
    } else {
        conteudoHTML = conteudo.replace(/\n/g, '<br>');
    }

    div.innerHTML = `
        <div class="mensagem-conteudo">
            ${conteudoHTML}
        </div>
        <div class="mensagem-toolbar">
            <button class="btn-msg" onclick="copiarMensagem(this)">📋 Copiar</button>
            ${tipo === 'ia' ? '<button class="btn-msg" onclick="fazerDownloadMensagem(this)">⬇️ Download</button>' : ''}
            ${tipo === 'ia' ? '<button class="btn-msg" onclick="falarTexto(\'' + conteudo.replace(/'/g, "\\'") + '\')">🔊 Falar</button>' : ''}
        </div>
    `;

    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

function processarCodigos(texto) {
    const regex = /```(\w+)?\n([\s\S]*?)```/g;
    return texto.replace(regex, (match, linguagem, codigo) => {
        const lang = linguagem || 'text';
        return `
            <div class="codigo-bloco">
                <div class="codigo-toolbar">
                    <span style="font-size: 11px; color: var(--text-secondary);">${lang}</span>
                    <button class="btn-codigo" onclick="copiarCodigo(this)">📋 Copiar</button>
                    <button class="btn-codigo" onclick="executarCodigo(this)">▶️ Executar</button>
                </div>
                <pre>${escapeHtml(codigo.trim())}</pre>
            </div>
        `;
    });
}

function escapeHtml(texto) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return texto.replace(/[&<>"']/g, m => map[m]);
}

function copiarMensagem(btn) {
    const conteudo = btn.parentElement.parentElement.querySelector('.mensagem-conteudo').innerText;
    navigator.clipboard.writeText(conteudo).then(() => {
        mostrarNotificacao('Copiado!', 'sucesso');
    });
}

function copiarCodigo(btn) {
    const codigo = btn.parentElement.parentElement.querySelector('pre').innerText;
    navigator.clipboard.writeText(codigo).then(() => {
        mostrarNotificacao('Código copiado!', 'sucesso');
    });
}

function fazerDownloadMensagem(btn) {
    const conteudo = btn.parentElement.parentElement.querySelector('.mensagem-conteudo').innerText;
    const blob = new Blob([conteudo], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mensagem-${Date.now()}.md`;
    a.click();
}

function executarCodigo(btn) {
    const codigo = btn.parentElement.parentElement.querySelector('pre').innerText;
    document.getElementById('playgroundCodigo').value = codigo;
    abrirPlayground();
    executarPlayground();
}

function obterLimitContexto() {
    const contexto = configManager.config.contexto;
    const limites = { 'curto': 5, 'medio': 10, 'longo': 20 };
    return limites[contexto] || 10;
}

function novoChat() {
    const novoChat = configManager.novoChat();
    chatAtualId = novoChat.id;
    conversaAtual = [];
    document.getElementById('mensagens').innerHTML = '';
    atualizarHistorico();
    mostrarNotificacao('Novo chat criado', 'sucesso');
}

function atualizarHistorico() {
    const container = document.getElementById('historico');
    container.innerHTML = '';

    configManager.chats.forEach(chat => {
        const div = document.createElement('div');
        div.className = `chat-item ${chat.id === chatAtualId ? 'ativo' : ''}`;
        div.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <span>${chat.titulo}</span>
                <button onclick="excluirChat(${chat.id})" style="background: none; border: none; color: var(--text-primary); cursor: pointer;">✕</button>
            </div>
        `;
        div.onclick = () => carregarChat(chat.id);
        container.appendChild(div);
    });
}

function carregarChat(id) {
    const chat = configManager.obterChat(id);
    if (chat) {
        chatAtualId = id;
        conversaAtual = chat.mensagens;
        document.getElementById('mensagens').innerHTML = '';
        chat.mensagens.forEach(msg => {
            adicionarMensagemUI(msg.tipo, msg.conteudo);
        });
        atualizarHistorico();
    }
}

function excluirChat(id) {
    if (confirm('Tem certeza que deseja excluir este chat?')) {
        configManager.chats = configManager.chats.filter(c => c.id !== id);
        configManager.salvarChats();
        if (chatAtualId === id) {
            chatAtualId = null;
            conversaAtual = [];
            document.getElementById('mensagens').innerHTML = '';
        }
        atualizarHistorico();
        mostrarNotificacao('Chat excluído', 'sucesso');
    }
}

function atualizarModelo() {
    const modelo = document.getElementById('selectModelo').value;
    configManager.config.modelo = modelo;
    configManager.salvarConfig();
    mostrarNotificacao(`Modelo alterado para ${modelo}`, 'sucesso');
}

function atualizarConfig() {
    configManager.config.temperatura = parseFloat(document.getElementById('temperatura').value);
    configManager.config.maxTokens = parseInt(document.getElementById('maxTokens').value);
    configManager.config.contexto = document.getElementById('contexto').value;
    configManager.config.buscaInternet = document.getElementById('buscaInternet').value;
    configManager.config.tamanhoResposta = document.getElementById('tamanhoResposta').value;

    document.getElementById('tempValor').innerText = configManager.config.temperatura;
    document.getElementById('tokenValor').innerText = configManager.config.maxTokens;

    configManager.salvarConfig();
}

function mostrarNotificacao(mensagem, tipo = 'info') {
    const notif = document.createElement('div');
    notif.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${tipo === 'sucesso' ? '#10b981' : tipo === 'erro' ? '#ef4444' : '#2563eb'};
        color: white;
        border-radius: 8px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notif.innerText = mensagem;
    document.body.appendChild(notif);

    setTimeout(() => notif.remove(), 3000);
}