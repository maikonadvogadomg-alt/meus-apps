// ============================================
// PARTE 2: SISTEMA DE CONFIGURAÇÃO
// ============================================

class ConfigManager {
    constructor() {
        this.config = this.carregarConfig();
        this.memoria = this.carregarMemoria();
        this.chats = this.carregarChats();
    }

    carregarConfig() {
        const config = localStorage.getItem('iaConfig');
        return config ? JSON.parse(config) : {
            modelo: 'monica',
            temperatura: 0.7,
            maxTokens: 2000,
            contexto: 'medio',
            buscaInternet: 'desativada',
            tamanhoResposta: 'media',
            chaves: {
                openai: '',
                gemini: '',
                monica: '',
                busca: ''
            },
            prompts: {
                sistema: 'Você é um assistente IA profissional e honesto.',
                adicionais: ''
            },
            perfil: {
                nome: '',
                profissao: '',
                interesses: '',
                personalidade: ''
            },
            iaLocal: {
                endereco: '',
                modelo: ''
            },
            tts: {
                ativado: false,
                velocidade: 1.15,
                voz: 'Francisca'
            }
        };
    }

    salvarConfig() {
        localStorage.setItem('iaConfig', JSON.stringify(this.config));
    }

    carregarMemoria() {
        const memoria = localStorage.getItem('iaMemoria');
        return memoria ? JSON.parse(memoria) : [];
    }

    salvarMemoria() {
        localStorage.setItem('iaMemoria', JSON.stringify(this.memoria));
    }

    adicionarMemoria(tipo, conteudo, contexto = '') {
        const registro = {
            id: Date.now(),
            tipo,
            conteudo,
            contexto,
            data: new Date().toISOString(),
            chatAtual: chatAtualId
        };

        this.memoria.push(registro);

        // Manter apenas os últimos 100 registros
        if (this.memoria.length > 100) {
            this.memoria = this.memoria.slice(-100);
        }

        this.salvarMemoria();
        return registro;
    }

    obterMemoriaContexto(limit = 15) {
        return this.memoria.slice(-limit);
    }

    carregarChats() {
        const chats = localStorage.getItem('iaChats');
        return chats ? JSON.parse(chats) : [];
    }

    salvarChats() {
        localStorage.setItem('iaChats', JSON.stringify(this.chats));
    }

    novoChat() {
        const chat = {
            id: Date.now(),
            titulo: `Chat ${new Date().toLocaleTimeString('pt-BR')}`,
            mensagens: [],
            dataCriacao: new Date().toISOString(),
            dataUltimaAtualizacao: new Date().toISOString()
        };

        this.chats.push(chat);
        this.salvarChats();
        return chat;
    }

    obterChat(id) {
        return this.chats.find(chat => chat.id === id);
    }

    salvarMensagemChat(chatId, mensagem) {
        const chat = this.obterChat(chatId);
        if (chat) {
            chat.mensagens.push(mensagem);
            chat.dataUltimaAtualizacao = new Date().toISOString();
            this.salvarChats();
        }
    }

    fazerBackup() {
        const backup = {
            versao: '1.0',
            data: new Date().toISOString(),
            config: this.config,
            memoria: this.memoria,
            chats: this.chats
        };

        const dataStr = JSON.stringify(backup, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `backup-ia-${Date.now()}.json`;
        link.click();
    }

    importarBackup(arquivo) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const backup = JSON.parse(e.target.result);
                    this.config = backup.config;
                    this.memoria = backup.memoria;
                    this.chats = backup.chats;
                    this.salvarConfig();
                    this.salvarMemoria();
                    this.salvarChats();
                    resolve(true);
                } catch (err) {
                    reject(err);
                }
            };
            reader.readAsText(arquivo);
        });
    }
}

// Instância global
const configManager = new ConfigManager();
let chatAtualId = null;
