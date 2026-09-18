// ============================================
// PARTE 14: CRIPTOGRAFIA DE CHAVES API
// ============================================

/**
 * SISTEMA DE CRIPTOGRAFIA
 * 
 * Criptografa as chaves de API antes de armazenar
 * em localStorage, aumentando a segurança.
 * 
 * DEPENDÊNCIAS: PARTE 2 (ConfigManager)
 * ALGORITMO: AES-256-GCM (Web Crypto API)
 */

class GerenciadorCriptografia {
    constructor() {
        this.algoritmo = {
            name: 'AES-GCM',
            length: 256
        };
        this.chaveDerivada = null;
        this.salt = null;
    }

    // ============================================
    // Gerar Chave Mestre
    // ============================================

    async gerarChaveMestre(senha) {
        // Gerar salt aleatório
        this.salt = crypto.getRandomValues(new Uint8Array(16));

        // Derivar chave da senha
        const encoder = new TextEncoder();
        const senhaEncoded = encoder.encode(senha);

        const chavePBKDF2 = await crypto.subtle.importKey(
            'raw',
            senhaEncoded,
            'PBKDF2',
            false,
            ['deriveBits']
        );

        const bits = await crypto.subtle.deriveBits(
            {
                name: 'PBKDF2',
                salt: this.salt,
                iterations: 100000,
                hash: 'SHA-256'
            },
            chavePBKDF2,
            256
        );

        this.chaveDerivada = await crypto.subtle.importKey(
            'raw',
            bits,
            this.algoritmo,
            false,
            ['encrypt', 'decrypt']
        );

        // Salvar salt em localStorage
        localStorage.setItem('criptografia_salt', this.arrayBufferParaBase64(this.salt));

        return true;
    }

    // ============================================
    // Restaurar Chave Mestre
    // ============================================

    async restaurarChaveMestre(senha) {
        const saltBase64 = localStorage.getItem('criptografia_salt');
        if (!saltBase64) {
            console.warn('Salt não encontrado. Gerando novo...');
            return this.gerarChaveMestre(senha);
        }

        this.salt = this.base64ParaArrayBuffer(saltBase64);

        const encoder = new TextEncoder();
        const senhaEncoded = encoder.encode(senha);

        const chavePBKDF2 = await crypto.subtle.importKey(
            'raw',
            senhaEncoded,
            'PBKDF2',
            false,
            ['deriveBits']
        );

        const bits = await crypto.subtle.deriveBits(
            {
                name: 'PBKDF2',
                salt: this.salt,
                iterations: 100000,
                hash: 'SHA-256'
            },
            chavePBKDF2,
            256
        );

        this.chaveDerivada = await crypto.subtle.importKey(
            'raw',
            bits,
            this.algoritmo,
            false,
            ['encrypt', 'decrypt']
        );

        return true;
    }

    // ============================================
    // Criptografar Texto
    // ============================================

    async criptografar(texto) {
        if (!this.chaveDerivada) {
            throw new Error('Chave mestre não foi gerada');
        }

        const encoder = new TextEncoder();
        const dados = encoder.encode(texto);
        const iv = crypto.getRandomValues(new Uint8Array(12));

        const criptografado = await crypto.subtle.encrypt(
            {
                name: 'AES-GCM',
                iv: iv
            },
            this.chaveDerivada,
            dados
        );

        // Combinar IV + dados criptografados
        const resultado = new Uint8Array(iv.length + criptografado.byteLength);
        resultado.set(iv);
        resultado.set(new Uint8Array(criptografado), iv.length);

        return this.arrayBufferParaBase64(resultado);
    }

    // ============================================
    // Descriptografar Texto
    // ============================================

    async descriptografar(textoBase64) {
        if (!this.chaveDerivada) {
            throw new Error('Chave mestre não foi gerada');
        }

        const dados = this.base64ParaArrayBuffer(textoBase64);
        const iv = dados.slice(0, 12);
        const criptografado = dados.slice(12);

        try {
            const descriptografado = await crypto.subtle.decrypt(
                {
                    name: 'AES-GCM',
                    iv: iv
                },
                this.chaveDerivada,
                criptografado
            );

            const decoder = new TextDecoder();
            return decoder.decode(descriptografado);
        } catch (erro) {
            throw new Error('Erro ao descriptografar: senha incorreta?');
        }
    }

    // ============================================
    // Criptografar Chaves API
    // ============================================

    async criptografarChaves(config) {
        const chavesEncriptadas = {};

        for (const [chave, valor] of Object.entries(config.chaves)) {
            if (valor) {
                chavesEncriptadas[chave] = await this.criptografar(valor);
            }
        }

        return chavesEncriptadas;
    }

    // ============================================
    // Descriptografar Chaves API
    // ============================================

    async descriptografarChaves(chavesEncriptadas) {
        const chavesDescriptografadas = {};

        for (const [chave, valor] of Object.entries(chavesEncriptadas)) {
            if (valor) {
                chavesDescriptografadas[chave] = await this.descriptografar(valor);
            }
        }

        return chavesDescriptografadas;
    }

    // ============================================
    // Converter Array Buffer para Base64
    // ============================================

    arrayBufferParaBase64(buffer) {
        const bytes = new Uint8Array(buffer);
        let binario = '';
        for (let i = 0; i < bytes.byteLength; i++) {
            binario += String.fromCharCode(bytes[i]);
        }
        return btoa(binario);
    }

    // ============================================
    // Converter Base64 para Array Buffer
    // ============================================

    base64ParaArrayBuffer(base64) {
        const binario = atob(base64);
        const bytes = new Uint8Array(binario.length);
        for (let i = 0; i < binario.length; i++) {
            bytes[i] = binario.charCodeAt(i);
        }
        return bytes;
    }

    // ============================================
    // Salvar Config com Criptografia
    // ============================================

    async salvarConfigCriptografada(config, senha) {
        try {
            await this.gerarChaveMestre(senha);

            const chavesEncriptadas = await this.criptografarChaves(config);

            const configCriptografada = {
                ...config,
                chaves: chavesEncriptadas,
                criptografado: true,
                dataEncriptacao: new Date().toISOString()
            };

            localStorage.setItem('iaConfig', JSON.stringify(configCriptografada));
            mostrarNotificacao('Configurações criptografadas com sucesso!', 'sucesso');

            return true;
        } catch (erro) {
            console.error('Erro ao criptografar:', erro);
            mostrarNotificacao('Erro ao criptografar: ' + erro.message, 'erro');
            return false;
        }
    }

    // ============================================
    // Carregar Config com Descriptografia
    // ============================================

    async carregarConfigDescriptografada(senha) {
        try {
            const configJson = localStorage.getItem('iaConfig');
            if (!configJson) return null;

            const config = JSON.parse(configJson);

            if (!config.criptografado) {
                return config;
            }

            await this.restaurarChaveMestre(senha);

            const chavesDescriptografadas = await this.descriptografarChaves(config.chaves);

            return {
                ...config,
                chaves: chavesDescriptografadas,
                criptografado: false
            };
        } catch (erro) {
            console.error('Erro ao descriptografar:', erro);
            mostrarNotificacao('Erro ao descriptografar: ' + erro.message, 'erro');
            return null;
        }
    }

    // ============================================
    // Gerar Relatório
    // ============================================

    gerarRelatorio() {
        return {
            criptografiaSuportada: !!crypto.subtle,
            algoritmo: 'AES-256-GCM',
            derivacao: 'PBKDF2 (100000 iterações)',
            chaveMestreGerada: !!this.chaveDerivada,
            saltArmazenado: !!localStorage.getItem('criptografia_salt'),
            status: this.chaveDerivada ? 'ATIVA' : 'INATIVA'
        };
    }
}

// ============================================
// INTEGRAÇÃO COM CONFIGMANAGER
// ============================================

class ConfigManagerCriptografado extends ConfigManager {
    constructor() {
        super();
        this.criptografia = new GerenciadorCriptografia();
        this.senhaMestre = null;
    }

    async inicializarCriptografia(senha) {
        this.senhaMestre = senha;
        const config = await this.criptografia.carregarConfigDescriptografada(senha);
        if (config) {
            this.config = config;
        }
        return !!config;
    }

    async salvarConfigCriptografado() {
        if (!this.senhaMestre) {
            console.warn('Senha mestre não configurada');
            return this.salvarConfig();
        }

        return this.criptografia.salvarConfigCriptografada(this.config, this.senhaMestre);
    }
}

// ============================================
// MODAL DE CRIPTOGRAFIA
// ============================================

function adicionarModalCriptografia() {
    const html = `
    <div class="modal" id="modalCriptografia">
        <div class="modal-content">
            <div class="modal-header">
                <h2>🔐 Criptografia de Chaves</h2>
                <button class="btn-fechar" onclick="fecharModal('modalCriptografia')">✕</button>
            </div>

            <div class="form-group">
                <label>Status de Criptografia</label>
                <div id="statusCriptografia" style="
                    padding: 12px;
                    background: var(--bg-dark);
                    border-radius: 6px;
                    font-size: 12px;
                "></div>
            </div>

            <div class="form-group">
                <label>Senha Mestre</label>
                <input type="password" id="senhaMestre" placeholder="Digite uma senha forte">
                <small style="color: var(--text-secondary);">
                    Mínimo 12 caracteres, com maiúsculas, minúsculas, números e símbolos
                </small>
            </div>

            <div class="form-group">
                <label>Confirmar Senha</label>
                <input type="password" id="confirmarSenha" placeholder="Confirme a senha">
            </div>

            <div style="display: flex; gap: 10px;">
                <button class="btn-salvar" onclick="ativarCriptografia()" style="flex: 1;">
                    🔒 Ativar Criptografia
                </button>
                <button class="btn-control" onclick="desativarCriptografia()" style="flex: 1;">
                    🔓 Desativar
                </button>
            </div>

            <div class="form-group" style="margin-top: 20px;">
                <label>Informações de Segurança</label>
                <div id="infoSeguranca" style="
                    padding: 12px;
                    background: var(--bg-dark);
                    border-radius: 6px;
                    font-size: 12px;
                    line-height: 1.6;
                "></div>
            </div>
        </div>
    </div>
    `;

    const container = document.body;
    const modal = document.createElement('div');
    modal.innerHTML = html;
    container.appendChild(modal.firstElementChild);
}

function abrirModalCriptografia() {
    document.getElementById('modalCriptografia').classList.add('ativo');
    atualizarStatusCriptografia();
}

function atualizarStatusCriptografia() {
    const relatorio = gerenciadorCriptografia.gerarRelatorio();
    const statusDiv = document.getElementById('statusCriptografia');

    statusDiv.innerHTML = `
        <div>Algoritmo: ${relatorio.algoritmo}</div>
        <div>Derivação: ${relatorio.derivacao}</div>
        <div>Status: <strong>${relatorio.status}</strong></div>
        <div>Suportado: ${relatorio.criptografiaSuportada ? '✓ Sim' : '✗ Não'}</div>
    `;

    const infoDiv = document.getElementById('infoSeguranca');
    infoDiv.innerHTML = `
        <strong>⚠️ Importante:</strong><br>
        • A senha mestre será usada para criptografar suas chaves de API<br>
        • Se esquecer a senha, suas chaves não poderão ser recuperadas<br>
        • Use uma senha forte e única<br>
        • A criptografia usa AES-256-GCM (padrão militar)<br>
        • Seu navegador suporta criptografia: ${relatorio.criptografiaSuportada ? '✓' : '✗'}
    `;
}

function validarSenha(senha) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
    return regex.test(senha);
}

async function ativarCriptografia() {
    const senha = document.getElementById('senhaMestre').value;
    const confirmar = document.getElementById('confirmarSenha').value;

    if (!senha || !confirmar) {
        mostrarNotificacao('Preencha todos os campos', 'erro');
        return;
    }

    if (senha !== confirmar) {
        mostrarNotificacao('Senhas não conferem', 'erro');
        return;
    }

    if (!validarSenha(senha)) {
        mostrarNotificacao(
            'Senha fraca. Use: maiúsculas, minúsculas, números, símbolos (mín. 12 caracteres)',
            'erro'
        );
        return;
    }

    const sucesso = await gerenciadorCriptografia.salvarConfigCriptografada(
        configManager.config,
        senha
    );

    if (sucesso) {
        gerenciadorCriptografia.senhaMestre = senha;
        document.getElementById('senhaMestre').value = '';
        document.getElementById('confirmarSenha').value = '';
        atualizarStatusCriptografia();
    }
}

async function desativarCriptografia() {
    if (!confirm('Tem certeza? Suas chaves serão armazenadas sem criptografia.')) {
        return;
    }

    configManager.config.criptografado = false;
    configManager.salvarConfig();
    mostrarNotificacao('Criptografia desativada', 'aviso');
    atualizarStatusCriptografia();
}

// ============================================
// INICIALIZAR
// ============================================

const gerenciadorCriptografia = new GerenciadorCriptografia();

document.addEventListener('DOMContentLoaded', () => {
    adicionarModalCriptografia();

    // Adicionar botão ao modal de configurações
    const tabPerfil = document.getElementById('tab-perfil');
    if (tabPerfil && !document.getElementById('btnCriptografia')) {
        const btn = document.createElement('button');
        btn.id = 'btnCriptografia';
        btn.className = 'btn-control';
        btn.innerHTML = '🔐 Criptografia';
        btn.onclick = abrirModalCriptografia;
        btn.style.marginTop = '20px';
        btn.style.width = '100%';
        tabPerfil.appendChild(btn);
    }
});

// Exportar para uso global
window.GerenciadorCriptografia = GerenciadorCriptografia;
window.gerenciadorCriptografia = gerenciadorCriptografia;
window.abrirModalCriptografia = abrirModalCriptografia;

console.log(`
╔════════════════════════════════════════════════════════════════╗
║         SISTEMA DE CRIPTOGRAFIA CARREGADO                     ║
╚════════════════════════════════════════════════════════════════╝

🔐 Comandos Disponíveis:
  - abrirModalCriptografia() - Abrir interface
  - gerenciadorCriptografia.gerarRelatorio() - Ver status
  - gerenciadorCriptografia.criptografar(texto)
  - gerenciadorCriptografia.descriptografar(textoBase64)

🔒 Algoritmo: AES-256-GCM
🔑 Derivação: PBKDF2 (100000 iterações)
`);
