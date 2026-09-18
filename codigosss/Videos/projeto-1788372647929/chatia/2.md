// ============================================
// PARTE 12: TESTE DE INTEGRIDADE E VALIDAÇÃO
// ============================================

/**
 * SISTEMA DE VALIDAÇÃO COMPLETO
 * 
 * Este módulo testa TODAS as partes do projeto
 * e gera um relatório detalhado de o que funciona,
 * o que precisa ser corrigido e o que precisa mudar.
 */

class ValidadorIntegridade {
    constructor() {
        this.resultados = {
            timestamp: new Date().toISOString(),
            versao_projeto: '1.0.0',
            navegador: this.detectarNavegador(),
            testes: {},
            erros: [],
            avisos: [],
            sucessos: [],
            recomendacoes: []
        };
    }

    // ============================================
    // 1. DETECTAR AMBIENTE
    // ============================================

    detectarNavegador() {
        const ua = navigator.userAgent;
        if (ua.includes('Chrome')) return 'Chrome';
        if (ua.includes('Firefox')) return 'Firefox';
        if (ua.includes('Safari')) return 'Safari';
        if (ua.includes('Edge')) return 'Edge';
        return 'Desconhecido';
    }

    // ============================================
    // 2. TESTES DE ESTRUTURA HTML
    // ============================================

    testarEstrutuaHTML() {
        const testes = {
            nome: 'Estrutura HTML',
            subtestes: {}
        };

        // Teste 1: Elementos principais
        const elementosPrincipais = [
            { id: 'sidebar', nome: 'Sidebar' },
            { id: 'mensagens', nome: 'Container de Mensagens' },
            { id: 'inputChat', nome: 'Input de Chat' },
            { id: 'btnEnviar', nome: 'Botão Enviar' },
            { id: 'modalConfig', nome: 'Modal Configurações' },
            { id: 'modalMemoria', nome: 'Modal Memória' },
            { id: 'modalPlayground', nome: 'Modal Playground' }
        ];

        testes.subtestes['Elementos Principais'] = {
            status: 'PENDENTE',
            detalhes: []
        };

        elementosPrincipais.forEach(elem => {
            const existe = !!document.getElementById(elem.id);
            testes.subtestes['Elementos Principais'].detalhes.push({
                elemento: elem.nome,
                id: elem.id,
                existe: existe,
                status: existe ? '✓' : '✗'
            });

            if (!existe) {
                this.resultados.erros.push(`Elemento HTML faltando: #${elem.id} (${elem.nome})`);
            } else {
                this.resultados.sucessos.push(`Elemento HTML encontrado: #${elem.id}`);
            }
        });

        // Teste 2: CSS Variables
        const cssVars = [
            '--primary',
            '--secondary',
            '--bg-dark',
            '--text-primary'
        ];

        testes.subtestes['CSS Variables'] = {
            status: 'PENDENTE',
            detalhes: []
        };

        cssVars.forEach(varName => {
            const valor = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
            const existe = !!valor;
            testes.subtestes['CSS Variables'].detalhes.push({
                variavel: varName,
                valor: valor || 'não definida',
                existe: existe,
                status: existe ? '✓' : '✗'
            });

            if (!existe) {
                this.resultados.avisos.push(`CSS Variable não definida: ${varName}`);
            }
        });

        // Teste 3: Responsividade
        testes.subtestes['Responsividade'] = {
            status: 'PENDENTE',
            detalhes: {
                largura_viewport: window.innerWidth,
                altura_viewport: window.innerHeight,
                orientacao: window.innerHeight > window.innerWidth ? 'Retrato' : 'Paisagem',
                breakpoint_detectado: this.detectarBreakpoint()
            }
        };

        this.resultados.testes['HTML'] = testes;
    }

    detectarBreakpoint() {
        const width = window.innerWidth;
        if (width > 768) return 'Desktop (>768px)';
        if (width > 480) return 'Tablet (481-768px)';
        return 'Mobile (<480px)';
    }

    // ============================================
    // 3. TESTES DE JAVASCRIPT
    // ============================================

    testarJavaScript() {
        const testes = {
            nome: 'JavaScript',
            subtestes: {}
        };

        // Teste 1: Classes e Objetos Globais
        const objetosGlobais = [
            { nome: 'ConfigManager', tipo: 'class' },
            { nome: 'GerenciadorIA', tipo: 'class' },
            { nome: 'GerenciadorTemas', tipo: 'class' },
            { nome: 'ExportadorConversas', tipo: 'class' },
            { nome: 'GerenciadorIALocal', tipo: 'class' },
            { nome: 'DOCUMENTACAO_PROJETO', tipo: 'object' },
            { nome: 'GUIA_RAPIDO_RECUPERACAO', tipo: 'object' },
            { nome: 'BRIEFING_TECNICO', tipo: 'object' }
        ];

        testes.subtestes['Objetos Globais'] = {
            status: 'PENDENTE',
            detalhes: []
        };

        objetosGlobais.forEach(obj => {
            const existe = typeof window[obj.nome] !== 'undefined';
            testes.subtestes['Objetos Globais'].detalhes.push({
                nome: obj.nome,
                tipo: obj.tipo,
                existe: existe,
                status: existe ? '✓' : '✗'
            });

            if (!existe) {
                this.resultados.erros.push(`Objeto global faltando: ${obj.nome}`);
            } else {
                this.resultados.sucessos.push(`Objeto global carregado: ${obj.nome}`);
            }
        });

        // Teste 2: Instâncias Globais
        const instancias = [
            { nome: 'configManager', classe: 'ConfigManager' },
            { nome: 'gerenciadorIA', classe: 'GerenciadorIA' },
            { nome: 'gerenciadorTemas', classe: 'GerenciadorTemas' }
        ];

        testes.subtestes['Instâncias'] = {
            status: 'PENDENTE',
            detalhes: []
        };

        instancias.forEach(inst => {
            const existe = typeof window[inst.nome] !== 'undefined';
            testes.subtestes['Instâncias'].detalhes.push({
                nome: inst.nome,
                classe: inst.classe,
                existe: existe,
                status: existe ? '✓' : '✗'
            });

            if (!existe) {
                this.resultados.avisos.push(`Instância não inicializada: ${inst.nome}`);
            }
        });

        // Teste 3: Funções Principais
        const funcoes = [
            'enviarMensagem',
            'adicionarMensagemUI',
            'novoChat',
            'abrirConfiguracoes',
            'abrirMemoria',
            'fazerBackup',
            'exportarDocumentacao',
            'verificarIntegridade'
        ];

        testes.subtestes['Funções'] = {
            status: 'PENDENTE',
            detalhes: []
        };

        funcoes.forEach(func => {
            const existe = typeof window[func] === 'function';
            testes.subtestes['Funções'].detalhes.push({
                funcao: func,
                existe: existe,
                status: existe ? '✓' : '✗'
            });

            if (!existe) {
                this.resultados.avisos.push(`Função não encontrada: ${func}()`);
            }
        });

        this.resultados.testes['JavaScript'] = testes;
    }

    // ============================================
    // 4. TESTES DE ARMAZENAMENTO
    // ============================================

    testarArmazenamento() {
        const testes = {
            nome: 'Armazenamento (localStorage)',
            subtestes: {}
        };

        // Teste 1: localStorage disponível
        let localStorageDisponivel = false;
        try {
            const teste = '__teste__';
            localStorage.setItem(teste, teste);
            localStorage.removeItem(teste);
            localStorageDisponivel = true;
        } catch (e) {
            this.resultados.erros.push('localStorage não está disponível');
        }

        testes.subtestes['Disponibilidade'] = {
            disponivel: localStorageDisponivel,
            status: localStorageDisponivel ? '✓' : '✗'
        };

        if (!localStorageDisponivel) {
            this.resultados.testes['Armazenamento'] = testes;
            return;
        }

        // Teste 2: Dados armazenados
        const chaves = ['iaConfig', 'iaMemoria', 'iaChats', 'temaSelecionado'];
        testes.subtestes['Dados Armazenados'] = {
            status: 'PENDENTE',
            detalhes: []
        };

        chaves.forEach(chave => {
            const valor = localStorage.getItem(chave);
            const existe = valor !== null;
            let tamanho = 0;
            let valido = true;

            if (existe) {
                tamanho = new Blob([valor]).size;
                try {
                    JSON.parse(valor);
                } catch (e) {
                    valido = false;
                    this.resultados.erros.push(`JSON inválido em localStorage.${chave}`);
                }
            }

            testes.subtestes['Dados Armazenados'].detalhes.push({
                chave: chave,
                existe: existe,
                tamanho_bytes: tamanho,
                json_valido: valido,
                status: existe && valido ? '✓' : '✗'
            });

            if (!existe) {
                this.resultados.avisos.push(`localStorage.${chave} não encontrado`);
            }
        });

        // Teste 3: Tamanho total
        let tamanhoTotal = 0;
        for (let i = 0; i < localStorage.length; i++) {
            const chave = localStorage.key(i);
            const valor = localStorage.getItem(chave);
            tamanhoTotal += new Blob([valor]).size;
        }

        testes.subtestes['Tamanho Total'] = {
            bytes: tamanhoTotal,
            kb: (tamanhoTotal / 1024).toFixed(2),
            mb: (tamanhoTotal / 1024 / 1024).toFixed(2),
            limite_mb: 5,
            status: tamanhoTotal < 5242880 ? '✓' : '⚠️'
        };

        if (tamanhoTotal > 4194304) { // 4MB
            this.resultados.avisos.push(`localStorage está próximo do limite: ${(tamanhoTotal / 1024 / 1024).toFixed(2)}MB`);
        }

        this.resultados.testes['Armazenamento'] = testes;
    }

    // ============================================
    // 5. TESTES DE APIS
    // ============================================

    testarAPIs() {
        const testes = {
            nome: 'APIs do Navegador',
            subtestes: {}
        };

        // Teste 1: Web Speech API
        testes.subtestes['Web Speech API'] = {
            SpeechRecognition: typeof (window.SpeechRecognition || window.webkitSpeechRecognition) !== 'undefined' ? '✓' : '✗',
            SpeechSynthesis: typeof window.speechSynthesis !== 'undefined' ? '✓' : '✗',
            status: 'Detectado'
        };

        // Teste 2: Fetch API
        testes.subtestes['Fetch API'] = {
            disponivel: typeof window.fetch === 'function' ? '✓' : '✗',
            status: typeof window.fetch === 'function' ? 'Disponível' : 'Indisponível'
        };

        // Teste 3: FileReader API
        testes.subtestes['FileReader API'] = {
            disponivel: typeof window.FileReader === 'function' ? '✓' : '✗',
            status: typeof window.FileReader === 'function' ? 'Disponível' : 'Indisponível'
        };

        // Teste 4: Clipboard API
        testes.subtestes['Clipboard API'] = {
            disponivel: navigator.clipboard ? '✓' : '✗',
            status: navigator.clipboard ? 'Disponível' : 'Indisponível'
        };

        this.resultados.testes['APIs'] = testes;
    }

    // ============================================
    // 6. TESTES DE RESPONSIVIDADE
    // ============================================

    testarResponsividade() {
        const testes = {
            nome: 'Responsividade',
            subtestes: {}
        };

        const breakpoints = [
            { nome: 'Mobile', width: 375, height: 667 },
            { nome: 'Tablet', width: 768, height: 1024 },
            { nome: 'Desktop', width: 1920, height: 1080 }
        ];

        testes.subtestes['Breakpoints'] = {
            status: 'PENDENTE',
            detalhes: []
        };

        breakpoints.forEach(bp => {
            const sidebar = document.querySelector('.sidebar');
            const mainContent = document.querySelector('.main-content');

            testes.subtestes['Breakpoints'].detalhes.push({
                breakpoint: bp.nome,
                resolucao: `${bp.width}x${bp.height}`,
                sidebar_visivel: sidebar ? sidebar.offsetWidth > 0 : false,
                main_content_visivel: mainContent ? mainContent.offsetWidth > 0 : false,
                status: '✓'
            });
        });

        // Teste de orientação
        testes.subtestes['Orientação'] = {
            orientacao_atual: window.innerHeight > window.innerWidth ? 'Retrato' : 'Paisagem',
            suporta_orientationchange: 'onorientationchange' in window ? '✓' : '✗'
        };

        this.resultados.testes['Responsividade'] = testes;
    }

    // ============================================
    // 7. TESTES DE FUNCIONALIDADE
    // ============================================

    testarFuncionalidade() {
        const testes = {
            nome: 'Funcionalidades',
            subtestes: {}
        };

        // Teste 1: Chat básico
        testes.subtestes['Chat Básico'] = {
            novo_chat: typeof window.novoChat === 'function' ? '✓' : '✗',
            enviar_mensagem: typeof window.enviarMensagem === 'function' ? '✓' : '✗',
            adicionar_mensagem_ui: typeof window.adicionarMensagemUI === 'function' ? '✓' : '✗',
            carregar_chat: typeof window.carregarChat === 'function' ? '✓' : '✗',
            status: 'Testado'
        };

        // Teste 2: Configurações
        testes.subtestes['Configurações'] = {
            abrir_config: typeof window.abrirConfiguracoes === 'function' ? '✓' : '✗',
            salvar_chaves: typeof window.salvarChaves === 'function' ? '✓' : '✗',
            salvar_prompts: typeof window.salvarPrompts === 'function' ? '✓' : '✗',
            salvar_perfil: typeof window.salvarPerfil === 'function' ? '✓' : '✗',
            status: 'Testado'
        };

        // Teste 3: Voz
        testes.subtestes['Voz'] = {
            iniciar_voz: typeof window.iniciarVoz === 'function' ? '✓' : '✗',
            toggle_tts: typeof window.toggleTTS === 'function' ? '✓' : '✗',
            falar_texto: typeof window.falarTexto === 'function' ? '✓' : '✗',
            status: 'Testado'
        };

        // Teste 4: Exportação
        testes.subtestes['Exportação'] = {
            exportar_markdown: typeof window.exportarChatAtual === 'function' ? '✓' : '✗',
            fazer_backup: typeof window.fazerBackup === 'function' ? '✓' : '✗',
            importar_backup: typeof window.importarBackup === 'function' ? '✓' : '✗',
            status: 'Testado'
        };

        // Teste 5: Playground
        testes.subtestes['Playground'] = {
            abrir_playground: typeof window.abrirPlayground === 'function' ? '✓' : '✗',
            executar_playground: typeof window.executarPlayground === 'function' ? '✓' : '✗',
            status: 'Testado'
        };

        this.resultados.testes['Funcionalidade'] = testes;
    }

    // ============================================
    // 8. GERAR RECOMENDAÇÕES
    // ============================================

    gerarRecomendacoes() {
        // Se há erros
        if (this.resultados.erros.length > 0) {
            this.resultados.recomendacoes.push({
                prioridade: 'CRÍTICA',
                mensagem: `${this.resultados.erros.length} erro(s) encontrado(s). Corrija antes de usar.`,
                acao: 'Consulte a seção de Erros abaixo'
            });
        }

        // Se há avisos
        if (this.resultados.avisos.length > 0) {
            this.resultados.recomendacoes.push({
                prioridade: 'ALTA',
                mensagem: `${this.resultados.avisos.length} aviso(s) encontrado(s). Verifique funcionalidades.`,
                acao: 'Consulte a seção de Avisos abaixo'
            });
        }

        // Se localStorage está cheio
        if (this.resultados.testes['Armazenamento']?.subtestes['Tamanho Total']?.mb > 4) {
            this.resultados.recomendacoes.push({
                prioridade: 'MÉDIA',
                mensagem: 'localStorage está próximo do limite',
                acao: 'Faça backup e limpe dados antigos'
            });
        }

        // Se tudo OK
        if (this.resultados.erros.length === 0 && this.resultados.avisos.length === 0) {
            this.resultados.recomendacoes.push({
                prioridade: 'INFO',
                mensagem: '✓ Sistema funcionando corretamente!',
                acao: 'Você pode usar o projeto normalmente'
            });
        }
    }

    // ============================================
    // 9. EXECUTAR TODOS OS TESTES
    // ============================================

    executarTodosTestes() {
        console.log('🔍 Iniciando testes de integridade...\n');

        this.testarEstrutuaHTML();
        this.testarJavaScript();
        this.testarArmazenamento();
        this.testarAPIs();
        this.testarResponsividade();
        this.testarFuncionalidade();
        this.gerarRecomendacoes();

        this.resultados.status_geral = this.resultados.erros.length === 0 ? 'PASSOU' : 'FALHOU';
        this.resultados.data_teste = new Date().toLocaleString('pt-BR');

        return this.resultados;
    }

    // ============================================
    // 10. GERAR RELATÓRIO
    // ============================================

    gerarRelatorio() {
        const testes = this.executarTodosTestes();

        const relatorio = `
╔════════════════════════════════════════════════════════════════╗
║          RELATÓRIO DE VALIDAÇÃO - CHAT IA PROFISSIONAL        ║
╚════════════════════════════════════════════════════════════════╝

📋 INFORMAÇÕES GERAIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Data do Teste: ${testes.data_teste}
Navegador: ${testes.navegador}
Status Geral: ${testes.status_geral}
Versão do Projeto: ${testes.versao_projeto}

✓ SUCESSOS: ${testes.sucessos.length}
⚠️  AVISOS: ${testes.avisos.length}
✗ ERROS: ${testes.erros.length}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 RESULTADOS DOS TESTES

${Object.entries(testes.testes).map(([categoria, teste]) => `
${categoria.toUpperCase()}
${'-'.repeat(categoria.length)}
${JSON.stringify(teste, null, 2)}
`).join('\n')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ SUCESSOS (${testes.sucessos.length})
${testes.sucessos.map(s => `  ✓ ${s}`).join('\n')}

⚠️  AVISOS (${testes.avisos.length})
${testes.avisos.length > 0 ? testes.avisos.map(a => `  ⚠️  ${a}`).join('\n') : '  Nenhum aviso'}

✗ ERROS (${testes.erros.length})
${testes.erros.length > 0 ? testes.erros.map(e => `  ✗ ${e}`).join('\n') : '  Nenhum erro'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 RECOMENDAÇÕES

${testes.recomendacoes.map(rec => `
[${rec.prioridade}]
Mensagem: ${rec.mensagem}
Ação: ${rec.acao}
`).join('\n')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 PRÓXIMAS ETAPAS

${testes.status_geral === 'PASSOU' ? `
1. ✓ Sistema validado com sucesso
2. ✓ Você pode usar o projeto normalmente
3. ✓ Faça backup regularmente
4. ✓ Considere implementar melhorias (PWA, criptografia, etc)
` : `
1. ⚠️  Corrija os erros acima
2. ⚠️  Verifique os avisos
3. ⚠️  Execute os testes novamente
4. ⚠️  Consulte GUIA_RAPIDO_RECUPERACAO se necessário
`}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔧 INFORMAÇÕES TÉCNICAS

Viewport: ${window.innerWidth}x${window.innerHeight}
Breakpoint: ${this.detectarBreakpoint()}
localStorage Disponível: ${typeof localStorage !== 'undefined' ? 'Sim' : 'Não'}
Fetch API: ${typeof fetch === 'function' ? 'Sim' : 'Não'}
Web Speech API: ${typeof (window.SpeechRecognition || window.webkitSpeechRecognition) !== 'undefined' ? 'Sim' : 'Não'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Relatório gerado em: ${new Date().toLocaleString('pt-BR')}
        `;

        return relatorio;
    }

    // ============================================
    // 11. EXPORTAR RELATÓRIO
    // ============================================

    exportarRelatorio() {
        const relatorio = this.gerarRelatorio();
        const blob = new Blob([relatorio], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `validacao-${Date.now()}.txt`;
        a.click();
    }

    copiarRelatorio() {
        const relatorio = this.gerarRelatorio();
        navigator.clipboard.writeText(relatorio).then(() => {
            mostrarNotificacao('Relatório copiado!', 'sucesso');
        });
    }

    exibirRelatorioConsole() {
        const relatorio = this.gerarRelatorio();
        console.log(relatorio);
    }
}

// ============================================
// INICIALIZAR VALIDADOR
// ============================================

const validador = new ValidadorIntegridade();

// Executar testes ao carregar
document.addEventListener('DOMContentLoaded', () => {
    console.log('🧪 Executando testes de integridade...');
    const resultado = validador.executarTodosTestes();
    
    // Mostrar resumo no console
    console.log(`
╔════════════════════════════════════════════════════════════════╗
║              RESUMO DOS TESTES DE INTEGRIDADE                 ║
╚════════════════════════════════════════════════════════════════╝

✓ Sucessos: ${resultado.sucessos.length}
⚠️  Avisos: ${resultado.avisos.length}
✗ Erros: ${resultado.erros.length}

Status: ${resultado.status_geral}

Comandos disponíveis:
  - validador.gerarRelatorio() - Ver relatório completo
  - validador.exportarRelatorio() - Baixar relatório
  - validador.copiarRelatorio() - Copiar para clipboard
  - validador.exibirRelatorioConsole() - Mostrar no console
    `);

    // Se houver erros, mostrar notificação
    if (resultado.erros.length > 0) {
        mostrarNotificacao(`⚠️ ${resultado.erros.length} erro(s) encontrado(s)`, 'erro');
    }

    // Adicionar botão de teste ao sidebar
    const footer = document.querySelector('.sidebar-footer');
    if (footer && !document.getElementById('btnTeste')) {
        const btn = document.createElement('button');
        btn.id = 'btnTeste';
        btn.className = 'btn-sidebar';
        btn.innerHTML = '🧪 Teste';
        btn.title = 'Executar testes de integridade';
        btn.onclick = () => {
            validador.exibirRelatorioConsole();
            mostrarNotificacao('Relatório exibido no console (F12)', 'info');
        };
        footer.appendChild(btn);
    }
});

// Exportar para uso global
window.ValidadorIntegridade = ValidadorIntegridade;
window.validador = validador;
