class GerenciadorIALocal {
    constructor() {
        this.endereco = configManager.config.iaLocal.endereco;
        this.modelo = configManager.config.iaLocal.modelo;
        this.processando = false;
    }

    async listarModelos() {
        try {
            const response = await fetch(`${this.endereco}/api/tags`);
            const data = await response.json();
            return data.models || [];
        } catch (erro) {
            console.error('Erro ao listar modelos:', erro);
            return [];
        }
    }

    async enviarMensagem(mensagem, historico = []) {
        if (this.processando) {
            throw new Error('Processamento já em andamento');
        }

        this.processando = true;

        try {
            // Construir contexto do histórico
            let contexto = historico
                .map(msg => `${msg.tipo === 'usuario' ? 'Usuário' : 'Assistente'}: ${msg.conteudo}`)
                .join('\n\n');

            const prompt = contexto ? `${contexto}\n\nUsuário: ${mensagem}` : mensagem;

            const response = await fetch(`${this.endereco}/api/generate`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: this.modelo,
                    prompt: prompt,
                    temperature: configManager.config.temperatura,
                    num_predict: configManager.config.maxTokens,
                    stream: false
                })
            });

            if (!response.ok) {
                throw new Error(`Erro ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();
            return data.response || '';

        } catch (erro) {
            throw new Error(`Erro na IA Local: ${erro.message}`);
        } finally {
            this.processando = false;
        }
    }

    async testarConexao() {
        try {
            const response = await fetch(`${this.endereco}/api/tags`, {
                method: 'GET',
                timeout: 5000
            });
            return response.ok;
        } catch {
            return false;
        }
    }

    async baixarModelo(nomeModelo) {
        try {
            const response = await fetch(`${this.endereco}/api/pull`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: nomeModelo })
            });

            if (!response.ok) throw new Error('Erro ao baixar modelo');

            // Ler resposta em stream
            const reader = response.body.getReader();
            const decoder = new TextDecoder();

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const texto = decoder.decode(value);
                const linhas = texto.split('\n');

                linhas.forEach(linha => {
                    if (linha) {
                        try {
                            const json = JSON.parse(linha);
                            if (json.status) {
                                console.log(`[${nomeModelo}] ${json.status}`);
                            }
                        } catch (e) {
                            // Ignorar linhas inválidas
                        }
                    }
                });
            }

            return true;
        } catch (erro) {
            throw new Error(`Erro ao baixar modelo: ${erro.message}`);
        }
    }
}

const gerenciadorIALocal = new GerenciadorIALocal();

// Atualizar gerenciador quando configuração mudar
function atualizarGerenciadorLocal() {
    gerenciadorIALocal.endereco = configManager.config.iaLocal.endereco;
    gerenciadorIALocal.modelo = configManager.config.iaLocal.modelo;
}

// Adicionar interface para gerenciar modelos locais
function adicionarGerenciadorModelos() {
    const tabLocal = document.getElementById('tab-local');
    
    if (!document.getElementById('gerenciadorModelos')) {
        const div = document.createElement('div');
        div.id = 'gerenciadorModelos';
        div.style.marginTop = '20px';
        div.innerHTML = `
            <h3 style="margin-bottom: 15px; font-size: 14px;">Modelos Disponíveis</h3>
            <div id="listaModelos" style="max-height: 200px; overflow-y: auto; margin-bottom: 15px;">
                <p style="color: var(--text-secondary); font-size: 12px;">Carregando...</p>
            </div>
            <div class="form-group">
                <label>Baixar Novo Modelo</label>
                <div style="display: flex; gap: 8px;">
                    <input type="text" id="novoModelo" placeholder="Ex: llama2, mistral, neural-chat" style="flex: 1;">
                    <button class="btn-control" onclick="baixarNovoModelo()">⬇️ Baixar</button>
                </div>
            </div>
        `;
        tabLocal.appendChild(div);
        carregarListaModelos();
    }
}

async function carregarListaModelos() {
    const container = document.getElementById('listaModelos');
    if (!container) return;

    try {
        const modelos = await gerenciadorIALocal.listarModelos();
        
        if (modelos.length === 0) {
            container.innerHTML = '<p style="color: var(--text-secondary); font-size: 12px;">Nenhum modelo instalado</p>';
            return;
        }

        container.innerHTML = modelos.map(modelo => `
            <div style="
                padding: 10px;
                background: var(--bg-dark);
                border-radius: 6px;
                margin-bottom: 8px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            ">
                <div>
                    <div style="font-weight: 600; font-size: 13px;">${modelo.name}</div>
                    <div style="font-size: 11px; color: var(--text-secondary);">
                        ${(modelo.size / 1024 / 1024 / 1024).toFixed(2)} GB
                    </div>
                </div>
                <button class="btn-control" onclick="selecionarModelo('${modelo.name}')">✓ Usar</button>
            </div>
        `).join('');
    } catch (erro) {
        container.innerHTML = `<p style="color: var(--warning); font-size: 12px;">Erro: ${erro.message}</p>`;
    }
}

function selecionarModelo(nomeModelo) {
    document.getElementById('modeloLocal').value = nomeModelo;
    atualizarGerenciadorLocal();
    mostrarNotificacao(`Modelo ${nomeModelo} selecionado`, 'sucesso');
}

async function baixarNovoModelo() {
    const nomeModelo = document.getElementById('novoModelo').value.trim();
    
    if (!nomeModelo) {
        mostrarNotificacao('Digite o nome do modelo', 'erro');
        return;
    }

    const btn = event.target;
    btn.disabled = true;
    btn.innerText = '⏳ Baixando...';

    try {
        await gerenciadorIALocal.baixarModelo(nomeModelo);
        mostrarNotificacao(`Modelo ${nomeModelo} baixado com sucesso!`, 'sucesso');
        document.getElementById('novoModelo').value = '';
        await carregarListaModelos();
    } catch (erro) {
        mostrarNotificacao(`Erro: ${erro.message}`, 'erro');
    } finally {
        btn.disabled = false;
        btn.innerText = '⬇️ Baixar';
    }
}

document.addEventListener('DOMContentLoaded', adicionarGerenciadorModelos);