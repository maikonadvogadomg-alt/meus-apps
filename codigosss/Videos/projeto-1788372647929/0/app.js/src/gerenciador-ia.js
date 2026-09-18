class GerenciadorIA {
    constructor() {
        this.config = configManager.config;
    }

    async enviarMensagem(mensagem, historico = []) {
        const modelo = this.config.modelo;

        try {
            switch (modelo) {
                case 'monica':
                    return await this.enviarMonica(mensagem, historico);
                case 'openai':
                    return await this.enviarOpenAI(mensagem, historico);
                case 'gemini':
                    return await this.enviarGemini(mensagem, historico);
                case 'local':
                    return await this.enviarLocal(mensagem, historico);
                default:
                    return 'Modelo não configurado';
            }
        } catch (erro) {
            console.error('Erro ao enviar mensagem:', erro);
            throw erro;
        }
    }

    async enviarMonica(mensagem, historico) {
        const chave = this.config.chaves.monica;
        if (!chave) throw new Error('Chave Monica não configurada');

        const payload = {
            mensagem,
            historico,
            temperatura: this.config.temperatura,
            maxTokens: this.config.maxTokens,
            promptSistema: this.config.prompts.sistema,
            buscaInternet: this.config.buscaInternet === 'ativada'
        };

        const response = await fetch('https://api.monica.im/v1/chat', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${chave}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) throw new Error(`Erro Monica: ${response.status}`);

        const data = await response.json();
        return data.resposta || data.message;
    }

    async enviarOpenAI(mensagem, historico) {
        const chave = this.config.chaves.openai;
        if (!chave) throw new Error('Chave OpenAI não configurada');

        const messages = [
            { role: 'system', content: this.config.prompts.sistema },
            ...historico.map(msg => ({
                role: msg.tipo === 'usuario' ? 'user' : 'assistant',
                content: msg.conteudo
            })),
            { role: 'user', content: mensagem }
        ];

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${chave}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages,
                temperature: this.config.temperatura,
                max_tokens: this.config.maxTokens
            })
        });

        if (!response.ok) throw new Error(`Erro OpenAI: ${response.status}`);

        const data = await response.json();
        return data.choices[0].message.content;
    }

    async enviarGemini(mensagem, historico) {
        const chave = this.config.chaves.gemini;
        if (!chave) throw new Error('Chave Gemini não configurada');

        const contents = historico.map(msg => ({
            role: msg.tipo === 'usuario' ? 'user' : 'model',
            parts: [{ text: msg.conteudo }]
        }));

        contents.push({
            role: 'user',
            parts: [{ text: mensagem }]
        });

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${chave}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents,
                    generationConfig: {
                        temperature: this.config.temperatura,
                        maxOutputTokens: this.config.maxTokens
                    }
                })
            }
        );

        if (!response.ok) throw new Error(`Erro Gemini: ${response.status}`);

        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    }

    async enviarLocal(mensagem, historico) {
        const endereco = this.config.iaLocal.endereco;
        const modelo = this.config.iaLocal.modelo;

        if (!endereco || !modelo) throw new Error('IA Local não configurada');

        const response = await fetch(`${endereco}/api/generate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: modelo,
                prompt: mensagem,
                temperature: this.config.temperatura,
                num_predict: this.config.maxTokens
            })
        });

        if (!response.ok) throw new Error(`Erro IA Local: ${response.status}`);

        const data = await response.json();
        return data.response;
    }

    async buscarInternet(query) {
        if (this.config.buscaInternet !== 'ativada') return null;

        const chave = this.config.chaves.busca;
        if (!chave) throw new Error('Chave de busca não configurada');

        try {
            const response = await fetch(
                `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${chave}`
            );
            const data = await response.json();
            return data.items?.slice(0, 3) || [];
        } catch (erro) {
            console.error('Erro ao buscar internet:', erro);
            return [];
        }
    }

    async testarConexaoLocal() {
        const endereco = this.config.iaLocal.endereco;
        if (!endereco) throw new Error('Endereço local não configurado');

        try {
            const response = await fetch(`${endereco}/api/tags`, { timeout: 5000 });
            return response.ok;
        } catch {
            return false;
        }
    }
}

const gerenciadorIA = new GerenciadorIA();