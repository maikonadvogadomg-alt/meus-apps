# .

playground-modelo-2/
│
├── index.html        ← estrutura da tela
├── styles.css        ← cores, tema, layout e responsividade
├── modes.json        ← modos disponíveis
│
├── js/
│   ├── app.js        ← inicialização e estado principal
│   ├── preview.js    ← preview ao vivo
│   ├── local-db.js   ← SQLite/local
│   ├── supabase-db.js← conexão com Supabase
│   ├── backup.js     ← CSV e JSON
│   └── search.js     ← pesquisa dentro do código
│
├── electron/
│   ├── main.js
│   └── preload.js
│
└── database/
    └── schema.sql



projeto/
├── index.html          (estrutura principal + abas)
├── css/
│   └── styles.css      (estilos únicos)
├── js/
│   ├── app.js          (inicialização e orquestração)
│   ├── editor.js       (lógica do editor)
│   ├── preview.js      (lógica do preview)
│   ├── mapper.js       (mapeador de projeto/árvore)
│   ├── storage.js      (localStorage)
│   └── utils.js        (funções utilitárias)
├── chat.html           (chat independente)
└── playground.html     (playground independente)




playground-modelo-2/
│
├── package.json
├── index.html
├── styles.css
├── renderer.js
├── preload.js
├── main.js
│
├── config/
│   ├── modes.json
│   └── supabase.example.json
│
├── database/
│   ├── sqlite.js
│   └── schema.sql
│
├── services/
│   ├── local-projects.js
│   ├── supabase-projects.js
│   ├── backup-csv.js
│   ├── backup-json.js
│   └── code-search.js
│
├── preview/
│   ├── html-preview.js
│   ├── react-preview.js
│   └── python-preview.js
│
├── assets/
│   ├── icons/
│   ├── fonts/
│   └── libraries/
│       ├── react/
│       ├── react-dom/
│       ├── babel/
│       └── sql-wasm/
│
├── backups/
│
└── README.md








## 

# playground-modelo-2/

playground-modelo-2/
│
├── index.html        ← estrutura da tela
├── styles.css        ← cores, tema, layout e responsividade
├── modes.json        ← modos disponíveis
│
├── js/
│   ├── app.js        ← inicialização e estado principal
│   ├── preview.js    ← preview ao vivo
│   ├── local-db.js   ← SQLite/local
│   ├── supabase-db.js← conexão com Supabase
│   ├── backup.js     ← CSV e JSON
│   └── search.js     ← pesquisa dentro do código
│
├── electron/
│   ├── main.js
│   └── preload.js
│
└── database/
    └── schema.sql


## plano1

### pano1

playground-modelo-2/
│
├── index.html        ← estrutura da tela
├── styles.css        ← cores, tema, layout e responsividade
├── modes.json        ← modos disponíveis
│
├── js/
│   ├── app.js        ← inicialização e estado principal
│   ├── preview.js    ← preview ao vivo
│   ├── local-db.js   ← SQLite/local
│   ├── supabase-db.js← conexão com Supabase
│   ├── backup.js     ← CSV e JSON
│   └── search.js     ← pesquisa dentro do código
│
├── electron/
│   ├── main.js
│   └── preload.js
│
└── database/
    └── schema.sql


# 4

CHAT IA PROFISSIONAL - ARQUITETURA COMPLETA
═══════════════════════════════════════════════════════════════

📦 PROJETO RAIZ
│
├─ 📄 index.html (PARTE 1)
│  ├─ <head>
│  │  ├─ Meta tags (charset, viewport)
│  │  ├─ Título
│  │  └─ <style> CSS Responsivo
│  │     ├─ Variáveis CSS (cores, espaçamento)
│  │     ├─ Layout Grid (container-main)
│  │     ├─ Sidebar (300px)
│  │     ├─ Main Content
│  │     │  ├─ Config Header (grid responsivo)
│  │     │  ├─ Chat Container
│  │     │  │  ├─ Mensagens (flex column)
│  │     │  │  └─ Input Area
│  │     │  └─ Modais
│  │     │     ├─ Modal Config
│  │     │     ├─ Modal Memória
│  │     │     └─ Modal Playground
│  │     ├─ Media Queries
│  │     │  ├─ @media (768px) - Tablet
│  │     │  └─ @media (480px) - Mobile
│  │     └─ Estilos Customizados
│  │        ├─ Scrollbar
│  │        ├─ Animações
│  │        └─ Temas (CSS variables)
│  │
│  └─ <body>
│     ├─ .container-main (grid)
│     │  ├─ .sidebar
│     │  │  ├─ .sidebar-header
│     │  │  ├─ .btn-novo-chat
│     │  │  ├─ .historico-chats
│     │  │  │  └─ .chat-item (repetido)
│     │  │  └─ .sidebar-footer
│     │  │     ├─ btn-config
│     │  │     ├─ btn-memoria
│     │  │     ├─ btn-backup
│     │  │     ├─ btn-importar
│     │  │     └─ btn-documentacao (adicionado)
│     │  │
│     │  └─ .main-content (flex column)
│     │     ├─ .config-header (grid responsivo)
│     │     │  ├─ Modelo IA (select)
│     │     │  ├─ Temperatura (range)
│     │     │  ├─ Max Tokens (range)
│     │     │  ├─ Contexto (select)
│     │     │  ├─ Busca Internet (select)
│     │     │  └─ Tamanho Resposta (select)
│     │     │
│     │     └─ .chat-container (flex column)
│     │        ├─ .mensagens (flex column, scroll)
│     │        │  └─ .mensagem (usuario/ia/erro)
│     │        │     ├─ .mensagem-conteudo
│     │        │     └─ .mensagem-toolbar
│     │        │        ├─ btn-copiar
│     │        │        ├─ btn-download
│     │        │        └─ btn-falar
│     │        │
│     │        └─ .input-area (flex)
│     │           ├─ .input-wrapper
│     │           │  ├─ .input-controls
│     │           │  │  ├─ btn-voz
│     │           │  │  ├─ btn-tts
│     │           │  │  ├─ btn-playground
│     │           │  │  └─ btn-anexar
│     │           │  └─ textarea#inputChat
│     │           └─ btn-enviar
│     │
│     ├─ .modal#modalConfig
│     │  ├─ .modal-header
│     │  ├─ .tabs
│     │  │  ├─ tab-chaves
│     │  │  │  ├─ input-chaveOpenAI
│     │  │  │  ├─ input-chaveGemini
│     │  │  │  ├─ input-chaveMonica
│     │  │  │  ├─ input-chaveBusca
│     │  │  │  └─ btn-salvarChaves
│     │  │  │
│     │  │  ├─ tab-prompts
│     │  │  │  ├─ textarea-promptSistema
│     │  │  │  ├─ textarea-instrucoesAdicionais
│     │  │  │  └─ btn-salvarPrompts
│     │  │  │
│     │  │  ├─ tab-perfil
│     │  │  │  ├─ input-nomeUsuario
│     │  │  │  ├─ input-profissao
│     │  │  │  ├─ textarea-interesses
│     │  │  │  ├─ textarea-personalidadeIA
│     │  │  │  ├─ seletor-temas (adicionado)
│     │  │  │  └─ btn-salvarPerfil
│     │  │  │
│     │  │  └─ tab-local
│     │  │     ├─ input-enderecoLocal
│     │  │     ├─ input-modeloLocal
│     │  │     ├─ btn-testarConexao
│     │  │     ├─ gerenciadorModelos (adicionado)
│     │  │     │  ├─ listaModelos
│     │  │     │  ├─ input-novoModelo
│     │  │     │  └─ btn-baixarModelo
│     │  │     └─ btn-salvarConfigLocal
│     │  │
│     │  └─ btn-fechar
│     │
│     ├─ .modal#modalMemoria
│     │  ├─ .modal-header
│     │  ├─ #listaMemoria (scroll)
│     │  │  └─ .registro-memoria (repetido)
│     │  │     ├─ timestamp
│     │  │     ├─ tipo
│     │  │     ├─ conteudo (preview)
│     │  │     └─ btn-deletar
│     │  │
│     │  ├─ btn-limparMemoria
│     │  └─ btn-fechar
│     │
│     └─ .modal#modalPlayground
│        ├─ .modal-header
│        ├─ Grid 2 colunas
│        │  ├─ textarea#playgroundCodigo
│        │  └─ iframe#playgroundPreview
│        ├─ btn-executar
│        └─ btn-fechar
│
├─ 📜 app.js (PARTES 2-10)
│  │
│  ├─ PARTE 0: DOCUMENTAÇÃO E RECUPERAÇÃO
│  │  ├─ DOCUMENTACAO_PROJETO (objeto)
│  │  │  ├─ versao
│  │  │  ├─ estrutura
│  │  │  ├─ modulos (10 módulos)
│  │  │  ├─ fluxo_dados
│  │  │  ├─ estrutura_dados
│  │  │  ├─ pontos_extensao
│  │  │  ├─ checklist_funcionalidades
│  │  │  ├─ problemas_conhecidos
│  │  │  ├─ guia_manutencao
│  │  │  ├─ melhorias_sugeridas
│  │  │  └─ resumo_executivo
│  │  ├─ gerarRelatorioContexto()
│  │  ├─ exportarDocumentacao()
│  │  ├─ verificarIntegridade()
│  │  └─ recuperarContexto()
│  │
│  ├─ PARTE 0B: GUIA RÁPIDO
│  │  ├─ GUIA_RAPIDO_RECUPERACAO (objeto)
│  │  ├─ gerarResumoEstrutura()
│  │  └─ analisarMudancaNecessaria()
│  │
│  ├─ PARTE 2: GERENCIAMENTO DE CONFIGURAÇÃO
│  │  ├─ class ConfigManager
│  │  │  ├─ constructor()
│  │  │  ├─ carregarConfig()
│  │  │  ├─ salvarConfig()
│  │  │  ├─ carregarMemoria()
│  │  │  ├─ salvarMemoria()
│  │  │  ├─ adicionarMemoria(tipo, conteudo, contexto)
│  │  │  ├─ obterMemoriaContexto(limit)
│  │  │  ├─ carregarChats()
│  │  │  ├─ salvarChats()
│  │  │  ├─ novoChat()
│  │  │  ├─ obterChat(id)
│  │  │  ├─ salvarMensagemChat(chatId, mensagem)
│  │  │  ├─ fazerBackup()
│  │  │  └─ importarBackup(arquivo)
│  │  │
│  │  └─ configManager (instância global)
│  │
│  ├─ PARTE 3: GERENCIADOR DE IA
│  │  ├─ class GerenciadorIA
│  │  │  ├─ constructor()
│  │  │  ├─ enviarMensagem(mensagem, historico)
│  │  │  ├─ enviarMonica(mensagem, historico)
│  │  │  ├─ enviarOpenAI(mensagem, historico)
│  │  │  ├─ enviarGemini(mensagem, historico)
│  │  │  ├─ enviarLocal(mensagem, historico)
│  │  │  ├─ buscarInternet(query)
│  │  │  └─ testarConexaoLocal()
│  │  │
│  │  └─ gerenciadorIA (instância global)
│  │
│  ├─ PARTE 4: INTERFACE DE CHAT
│  │  ├─ SpeechRecognition (API)
│  │  ├─ reconhecimento (instância)
│  │  ├─ iniciarVoz()
│  │  ├─ toggleTTS()
│  │  ├─ falarTexto(texto)
│  │  ├─ enviarMensagem()
│  │  ├─ adicionarMensagemUI(tipo, conteudo)
│  │  ├─ processarCodigos(texto)
│  │  ├─ escapeHtml(texto)
│  │  ├─ copiarMensagem(btn)
│  │  ├─ copiarCodigo(btn)
│  │  ├─ fazerDownloadMensagem(btn)
│  │  ├─ executarCodigo(btn)
│  │  ├─ obterLimitContexto()
│  │  ├─ novoChat()
│  │  ├─ atualizarHistorico()
│  │  ├─ carregarChat(id)
│  │  ├─ excluirChat(id)
│  │  ├─ atualizarModelo()
│  │  ├─ atualizarConfig()
│  │  └─ mostrarNotificacao(mensagem, tipo)
│  │
│  ├─ PARTE 5: MODAIS E CONFIGURAÇÕES
│  │  ├─ abrirConfiguracoes()
│  │  ├─ carregarConfigsUI()
│  │  ├─ salvarChaves()
│  │  ├─ salvarPrompts()
│  │  ├─ salvarPerfil()
│  │  ├─ salvarConfigLocal()
│  │  ├─ testarConexaoLocal()
│  │  ├─ abrirMemoria()
│  │  ├─ atualizarListaMemoria()
│  │  ├─ limparMemoria()
│  │  ├─ fazerBackup()
│  │  ├─ importarBackup()
│  │  ├─ abrirPlayground()
│  │  ├─ executarPlayground()
│  │  ├─ anexarArquivo()
│  │  ├─ mudarTab(tabName)
│  │  ├─ fecharModal(modalId)
│  │  └─ Event Listeners
│  │
│  ├─ PARTE 6: RESPONSIVIDADE
│  │  ├─ ajustarLayout()
│  │  ├─ window.addEventListener('resize')
│  │  ├─ window.addEventListener('orientationchange')
│  │  └─ Media Query Handlers
│  │
│  ├─ PARTE 7: SISTEMA DE TEMAS
│  │  ├─ class GerenciadorTemas
│  │  │  ├─ constructor()
│  │  │  ├─ temas (dark, light, neon)
│  │  │  ├─ aplicarTema(nome)
│  │  │  └─ obterTemas()
│  │  │
│  │  ├─ gerenciadorTemas (instância)
│  │  ├─ adicionarSeletorTemas()
│  │  └─ CSS Variables por tema
│  │
│  ├─ PARTE 8: EXPORTAÇÃO
│  │  ├─ class ExportadorConversas
│  │  │  ├─ exportarMarkdown(chatId)
│  │  │  ├─ exportarJSON(chatId)
│  │  │  ├─ exportarTodosChats()
│  │  │  ├─ baixarArquivo(conteudo, nome, tipo)
│  │  │  └─ copiarParaClipboard(conteudo)
│  │  │
│  │  ├─ adicionarBotoesExportacao()
│  │  ├─ exportarChatAtual(tipo)
│  │  └─ exportarTodosChatsMD()
│  │
│  ├─ PARTE 9: IA LOCAL
│  │  ├─ class GerenciadorIALocal
│  │  │  ├─ constructor()
│  │  │  ├─ listarModelos()
│  │  │  ├─ enviarMensagem(mensagem, historico)
│  │  │  ├─ testarConexao()
│  │  │  └─ baixarModelo(nomeModelo)
│  │  │
│  │  ├─ gerenciadorIALocal (instância)
│  │  ├─ atualizarGerenciadorLocal()
│  │  ├─ adicionarGerenciadorModelos()
│  │  ├─ carregarListaModelos()
│  │  ├─ selecionarModelo(nomeModelo)
│  │  └─ baixarNovoModelo()
│  │
│  ├─ PARTE 10: INICIALIZAÇÃO
│  │  ├─ class SistemaNotificacoes
│  │  │  ├─ criar(mensagem, tipo, duracao)
│  │  │  └─ criarContainer()
│  │  │
│  │  ├─ class GerenciadorAtalhos
│  │  │  └─ inicializar()
│  │  │     ├─ Ctrl+N (novo chat)
│  │  │     ├─ Ctrl+S (backup)
│  │  │     ├─ Ctrl+K (config)
│  │  │     ├─ Ctrl+M (memória)
│  │  │     └─ Ctrl+L (limpar)
│  │  │
│  │  ├─ class MonitorPerformance
│  │  │  ├─ inicializar()
│  │  │  └─ medir(nome, funcao)
│  │  │
│  │  ├─ class SincronizacaoAbas
│  │  │  └─ inicializar()
│  │  │
│  │  ├─ DOMContentLoaded Event
│  │  ├─ beforeunload Event
│  │  ├─ error Event
│  │  └─ unhandledrejection Event
│  │
│  └─ Variáveis Globais
│     ├─ chatAtualId
│     ├─ conversaAtual
│     ├─ reconhecimentoVozAtivo
│     └─ ttsAtivo
│
├─ 💾 localStorage
│  ├─ iaConfig (JSON)
│  │  ├─ modelo
│  │  ├─ temperatura
│  │  ├─ maxTokens
│  │  ├─ contexto
│  │  ├─ buscaInternet
│  │  ├─ tamanhoResposta
│  │  ├─ chaves (openai, gemini, monica, busca)
│  │  ├─ prompts (sistema, adicionais)
│  │  ├─ perfil (nome, profissao, interesses, personalidade)
│  │  ├─ iaLocal (endereco, modelo)
│  │  └─ tts (ativado, velocidade, voz)
│  │
│  ├─ iaMemoria (JSON Array)
│  │  └─ [0..100] Registros
│  │     ├─ id
│  │     ├─ tipo
│  │     ├─ conteudo
│  │     ├─ contexto
│  │     ├─ data
│  │     └─ chatAtual
│  │
│  ├─ iaChats (JSON Array)
│  │  └─ [0..∞] Chats
│  │     ├─ id
│  │     ├─ titulo
│  │     ├─ mensagens (array)
│  │     ├─ dataCriacao
│  │     └─ dataUltimaAtualizacao
│  │
│  └─ temaSelecionado (string)
│
├─ 🌐 APIs Externas
│  ├─ Monica API
│  │  └─ POST https://api.monica.im/v1/chat
│  │
│  ├─ OpenAI API
│  │  └─ POST https://api.openai.com/v1/chat/completions
│  │
│  ├─ Google Gemini API
│  │  └─ POST https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent
│  │
│  ├─ Google Custom Search API
│  │  └─ GET https://www.googleapis.com/customsearch/v1
│  │
│  └─ IA Local (Ollama)
│     ├─ GET http://localhost:11434/api/tags
│     ├─ POST http://localhost:11434/api/generate
│     └─ POST http://localhost:11434/api/pull
│
└─ 🎨 Temas CSS
   ├─ Dark Theme
   │  ├─ --primary: #2563eb
   │  ├─ --bg-dark: #0f172a
   │  ├─ --text-primary: #f1f5f9
   │  └─ ... (8 cores)
   │
   ├─ Light Theme
   │  ├─ --primary: #3b82f6
   │  ├─ --bg-dark: #f8fafc
   │  ├─ --text-primary: #1e293b
   │  └─ ... (8 cores)
   │
   └─ Neon Theme
      ├─ --primary: #00ff88
      ├─ --bg-dark: #0a0e27
      ├─ --text-primary: #00ff88
      └─ ... (8 cores)

═══════════════════════════════════════════════════════════════
TOTAL: ~3500 linhas de código modular e documentado
═══════════════════════════════════════════════════════════════


FLUXO DE ENVIO DE MENSAGEM
═══════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────┐
│  USUÁRIO DIGITA MENSAGEM                                    │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  EVENT: textarea keydown (Ctrl+Enter) ou click btn-enviar   │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  enviarMensagem()                                            │
│  ├─ Validar input (não vazio)                               │
│  ├─ Criar novo chat se não existir                          │
│  └─ Desabilitar botão enviar                                │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  adicionarMensagemUI('usuario', mensagem)                   │
│  ├─ Criar elemento .mensagem.usuario                        │
│  ├─ Adicionar toolbar (copiar, download)                    │
│  └─ Scroll para bottom                                      │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  configManager.salvarMensagemChat(chatId, mensagem)         │
│  └─ Salvar em localStorage                                  │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  conversaAtual.push({tipo: 'usuario', conteudo})            │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  Buscar Internet (se ativado)                               │
│  ├─ gerenciadorIA.buscarInternet(query)                     │
│  └─ Adicionar resultados ao contexto                        │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  Preparar Contexto                                           │
│  ├─ configManager.obterMemoriaContexto(15)                  │
│  ├─ conversaAtual.slice(-limitContexto)                     │
│  └─ Montar histórico para IA                                │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  gerenciadorIA.enviarMensagem(mensagem, historico)          │
│  ├─ Switch por modelo selecionado                           │
│  ├─ Enviar para API correta                                 │
│  └─ Receber resposta                                        │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  adicionarMensagemUI('ia', resposta)                         │
│  ├─ Processar código (```...```)                            │
│  ├─ Criar elemento .mensagem.ia                             │
│  ├─ Adicionar toolbar (copiar, download, falar)             │
│  └─ Scroll para bottom                                      │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  falarTexto(resposta) - Se TTS ativo                         │
│  └─ speechSynthesis.speak(utterance)                        │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  configManager.adicionarMemoria('conversa', ...)            │
│  └─ Salvar em localStorage (max 100 registros)              │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  Habilitar botão enviar                                     │
│  └─ Limpar input                                            │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  ✓ PROCESSO COMPLETO                                        │
└─────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════
TEMPO ESTIMADO: 1-5 segundos (dependendo da IA)
═══════════════════════════════════════════════════════════════


DEPENDÊNCIAS E RELAÇÕES ENTRE MÓDULOS
═══════════════════════════════════════════════════════════════

┌────────────────────────────────────────────────────────────┐
│                    CAMADA DE UI                            │
├────────────────────────────────────────────────────────────┤
│  HTML (index.html)                                         │
│  └─ Define estrutura de elementos                          │
│     └─ Referenciados por JavaScript                        │
└────────────────────────────────────────────────────────────┘
                          ↓
┌────────────────────────────────────────────────────────────┐
│                  CAMADA DE APRESENTAÇÃO                    │
├────────────────────────────────────────────────────────────┤
│  CSS (em <style>)                                          │
│  ├─ Responsividade (media queries)                         │
│  ├─ Temas (CSS variables)                                  │
│  └─ Animações                                              │
│                                                            │
│  GerenciadorTemas                                          │
│  └─ Aplica temas dinamicamente                             │
└────────────────────────────────────────────────────────────┘
                          ↓
┌────────────────────────────────────────────────────────────┐
│                  CAMADA DE LÓGICA                          │
├────────────────────────────────────────────────────────────┤
│  Interface de Chat                                         │
│  ├─ enviarMensagem()                                       │
│  ├─ adicionarMensagemUI()                                  │
│  ├─ iniciarVoz()                                           │
│  └─ falarTexto()                                           │
│                                                            │
│  Modais e Configurações                                    │
│  ├─ abrirConfiguracoes()                                   │
│  ├─ salvarChaves()                                         │
│  └─ abrirPlayground()                                      │
│                                                            │
│  Exportação                                                │
│  ├─ exportarMarkdown()                                     │
│  └─ exportarJSON()                                         │
│                                                            │
│  Atalhos e Notificações                                    │
│  ├─ GerenciadorAtalhos                                     │
│  └─ SistemaNotificacoes                                    │
└────────────────────────────────────────────────────────────┘
                          ↓
┌────────────────────────────────────────────────────────────┐
│                  CAMADA DE INTEGRAÇÃO                      │
├────────────────────────────────────────────────────────────┤
│  GerenciadorIA                                             │
│  ├─ enviarMensagem() → switch modelo                       │
│  ├─ enviarMonica()                                         │
│  ├─ enviarOpenAI()                                         │
│  ├─ enviarGemini()                                         │
│  ├─ enviarLocal()                                          │
│  └─ buscarInternet()                                       │
│                                                            │
│  GerenciadorIALocal                                        │
│  ├─ listarModelos()                                        │
│  ├─ enviarMensagem()                                       │
│  └─ baixarModelo()                                         │
└────────────────────────────────────────────────────────────┘
                          ↓
┌────────────────────────────────────────────────────────────┐
│                  CAMADA DE DADOS                           │
├────────────────────────────────────────────────────────────┤
│  ConfigManager                                             │
│  ├─ carregarConfig()                                       │
│  ├─ salvarConfig()                                         │
│  ├─ adicionarMemoria()                                     │
│  ├─ novoChat()                                             │
│  ├─ fazerBackup()                                          │
│  └─ importarBackup()                                       │
│                                                            │
│  localStorage                                              │
│  ├─ iaConfig                                               │
│  ├─ iaMemoria                                              │
│  ├─ iaChats                                                │
│  └─ temaSelecionado                                        │
└────────────────────────────────────────────────────────────┘
                          ↓
┌────────────────────────────────────────────────────────────┐
│                  CAMADA DE DOCUMENTAÇÃO                    │
├────────────────────────────────────────────────────────────┤
│  DOCUMENTACAO_PROJETO                                      │
│  ├─ Estrutura completa                                     │
│  ├─ Módulos e responsabilidades                            │
│  ├─ Fluxo de dados                                         │
│  ├─ Pontos de extensão                                     │
│  └─ Guia de manutenção                                     │
│                                                            │
│  GUIA_RAPIDO_RECUPERACAO                                   │
│  └─ Soluções para problemas comuns                         │
└────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════
FLUXO: UI → Apresentação → Lógica → Integração → Dados
RETORNO: Dados → Integração → Lógica → Apresentação → UI
═══════════════════════════════════════════════════════════════



chat-ia-profissional/
│
├─ 📄 index.html                    (PARTE 1 - Interface)
├─ 📜 app.js                        (PARTES 2-10 - Lógica)
├─ 📚 documentacao.js               (PARTE 0 - Documentação)
├─ 📖 README.md                     (Guia de uso)
│
├─ 📁 src/                          (Código fonte - Futuro)
│  ├─ 📁 css/
│  │  ├─ main.css
│  │  ├─ responsive.css
│  │  └─ temas.css
│  │
│  ├─ 📁 js/
│  │  ├─ config-manager.js
│  │  ├─ gerenciador-ia.js
│  │  ├─ interface-chat.js
│  │  ├─ modais.js
│  │  ├─ temas.js
│  │  ├─ exportacao.js
│  │  ├─ ia-local.js
│  │  ├─ inicializacao.js
│  │  └─ documentacao.js
│  │
│  └─ 📁 componentes/
│     ├─ sidebar.js
│     ├─ chat-container.js
│     ├─ input-area.js
│     └─ modais/
│        ├─ config-modal.js
│        ├─ memoria-modal.js
│        └─ playground-modal.js
│
├─ 📁 public/                       (Arquivos públicos)
│  ├─ manifest.json                 (PWA)
│  ├─ service-worker.js             (PWA)
│  └─ 📁 icons/
│     ├─ icon-192x192.png
│     ├─ icon-512x512.png
│     └─ favicon.ico
│
├─ 📁 docs/                         (Documentação)
│  ├─ ARQUITETURA.md
│  ├─ GUIA_USUARIO.md
│  ├─ GUIA_DESENVOLVEDOR.md
│  ├─ API_INTEGRACAO.md
│  └─ TROUBLESHOOTING.md
│
├─ 📁 exemplos/                     (Exemplos de uso)
│  ├─ exemplo-monica.js
│  ├─ exemplo-openai.js
│  ├─ exemplo-local.js
│  └─ exemplo-backup.js
│
├─ 📁 testes/                       (Testes - Futuro)
│  ├─ config-manager.test.js
│  ├─ gerenciador-ia.test.js
│  └─ interface-chat.test.js
│
├─ 📁 backups/                      (Backups automáticos)
│  └─ backup-*.json
│
├─ 🔧 package.json                  (Dependências - Futuro)
├─ 🔧 webpack.config.js             (Build - Futuro)
├─ 🔧 .env.example                  (Variáveis de ambiente)
├─ 📝 .gitignore
└─ 📝 LICENSE

═══════════════════════════════════════════════════════════════
ESTRUTURA ATUAL: 1 HTML + 1 JS (Tudo em um arquivo)
ESTRUTURA FUTURA: Modular com separação de responsabilidades
═══════════════════════════════════════════════════════════════



localStorage STRUCTURE
═══════════════════════════════════════════════════════════════

iaConfig: {
  "modelo": "monica",
  "temperatura": 0.7,
  "maxTokens": 2000,
  "contexto": "medio",
  "buscaInternet": "desativada",
  "tamanhoResposta": "media",
  "chaves": {
    "openai": "sk-...",
    "gemini": "AIza...",
    "monica": "...",
    "busca": "..."
  },
  "prompts": {
    "sistema": "Você é um assistente...",
    "adicionais": "..."
  },
  "perfil": {
    "nome": "João",
    "profissao": "Advogado",
    "interesses": "Direito, IA...",
    "personalidade": "Profissional, honesto..."
  },
  "iaLocal": {
    "endereco": "http://localhost:11434",
    "modelo": "llama2"
  },
  "tts": {
    "ativado": true,
    "velocidade": 1.15,
    "voz": "Francisca"
  }
}

iaMemoria: [
  {
    "id": 1725062400000,
    "tipo": "conversa",
    "conteudo": "Usuário: Olá\nIA: Olá! Como posso ajudar?",
    "contexto": "chat",
    "data": "2026-08-31T01:25:00.000Z",
    "chatAtual": 1725062340000
  },
  ... (até 100 registros)
]

iaChats: [
  {
    "id": 1725062340000,
    "titulo": "Chat 01:25:00",
    "mensagens": [
      {
        "tipo": "usuario",
        "conteudo": "Olá",
        "timestamp": 1725062400000
      },
      {
        "tipo": "ia",
        "conteudo": "Olá! Como posso ajudar?",
        "timestamp": 1725062410000
      }
    ],
    "dataCriacao": "2026-08-31T01:25:00.000Z",
    "dataUltimaAtualizacao": "2026-08-31T01:25:10.000Z"
  },
  ... (ilimitado)
]

temaSelecionado: "dark"

═══════════════════════════════════════════════════════════════
TAMANHO ESTIMADO: 1-5 MB (dependendo do uso)
LIMITE DO NAVEGADOR: 5-10 MB (varia por navegador)
═══════════════════════════════════════════════════════════════




// ============================================
// PARTE 11: BRIEFING PROFISSIONAL PARA OUTRAS IAs
// ============================================

/**
 * BRIEFING TÉCNICO - CHAT IA PROFISSIONAL
 * 
 * Este documento é destinado para outras IAs (Claude, GPT, etc)
 * para que possam montar, estender ou corrigir o projeto sem
 * necessidade de explicações adicionais.
 * 
 * IMPORTANTE: Este arquivo deve ser enviado COMPLETO para a IA
 * antes de qualquer solicitação de desenvolvimento.
 */

const BRIEFING_TECNICO = {
    // ============================================
    // 1. IDENTIFICAÇÃO DO PROJETO
    // ============================================
    projeto: {
        nome: 'Chat IA Profissional Modular',
        versao: '1.0.0',
        tipo: 'Aplicação Web Responsiva',
        objetivo: 'Criar interface profissional para interação com múltiplos modelos de IA com suporte a voz, memória contextual e exportação de dados',
        
        cliente: 'Advogado com TDHA',
        requisitos_cliente: [
            'Código modular e bem documentado',
            'Sem código quebrado ou inútil',
            'Fácil de entender e corrigir',
            'Responsivo para mobile (retrato/paisagem)',
            'Suporte a voz e TTS',
            'Memória contextual (15+ registros)',
            'Exportação em Markdown',
            'Integração com múltiplas IAs'
        ],

        tecnologias_obrigatorias: [
            'HTML5',
            'CSS3 (Grid, Flexbox, Variáveis)',
            'JavaScript ES6+ (sem frameworks)',
            'LocalStorage (persistência)',
            'Web Speech API',
            'Fetch API'
        ],

        navegadores_suportados: [
            'Chrome 90+',
            'Firefox 88+',
            'Safari 14+',
            'Edge 90+'
        ],

        status: 'PRONTO PARA PRODUÇÃO',
        data_criacao: '2026-08-31',
        ultima_atualizacao: '2026-08-31'
    },

    // ============================================
    // 2. ORDEM DE MONTAGEM (SEQUENCIAL)
    // ============================================
    ordem_montagem: [
        {
            numero: 1,
            arquivo: 'index.html',
            parte: 'PARTE 1',
            descricao: 'Interface HTML com CSS responsivo',
            tamanho_estimado: '~800 linhas',
            conteudo: [
                '- DOCTYPE e meta tags',
                '- CSS em <style> (variáveis, responsividade, temas)',
                '- HTML estruturado com IDs e classes',
                '- Sidebar com histórico de chats',
                '- Main content com config header',
                '- Chat container com mensagens e input',
                '- 3 Modais (Config, Memória, Playground)',
                '- Script tag apontando para app.js'
            ],
            dependencias: 'Nenhuma',
            testa_com: 'Abrir arquivo no navegador - deve mostrar interface'
        },

        {
            numero: 2,
            arquivo: 'app.js',
            parte: 'PARTE 0',
            descricao: 'Sistema de Documentação e Recuperação',
            tamanho_estimado: '~400 linhas',
            conteudo: [
                '- DOCUMENTACAO_PROJETO (objeto com toda estrutura)',
                '- gerarRelatorioContexto()',
                '- exportarDocumentacao()',
                '- verificarIntegridade()',
                '- recuperarContexto()',
                '- GUIA_RAPIDO_RECUPERACAO',
                '- gerarResumoEstrutura()',
                '- analisarMudancaNecessaria()'
            ],
            dependencias: 'Nenhuma',
            testa_com: 'console.log(DOCUMENTACAO_PROJETO)'
        },

        {
            numero: 3,
            arquivo: 'app.js',
            parte: 'PARTE 0B',
            descricao: 'Guia Rápido de Recuperação',
            tamanho_estimado: '~200 linhas',
            conteudo: [
                '- GUIA_RAPIDO_RECUPERACAO (objeto)',
                '- Soluções para 7 problemas comuns',
                '- Exemplos de código para cada solução'
            ],
            dependencias: 'PARTE 0',
            testa_com: 'console.log(GUIA_RAPIDO_RECUPERACAO)'
        },

        {
            numero: 4,
            arquivo: 'app.js',
            parte: 'PARTE 2',
            descricao: 'Gerenciador de Configuração',
            tamanho_estimado: '~300 linhas',
            conteudo: [
                '- class ConfigManager',
                '- Métodos de carregamento/salvamento',
                '- Gerenciamento de memória (15-100 registros)',
                '- Gerenciamento de chats',
                '- Backup/Importação em JSON',
                '- configManager (instância global)'
            ],
            dependencias: 'Nenhuma',
            testa_com: 'configManager.carregarConfig()'
        },

        {
            numero: 5,
            arquivo: 'app.js',
            parte: 'PARTE 3',
            descricao: 'Gerenciador de IA',
            tamanho_estimado: '~300 linhas',
            conteudo: [
                '- class GerenciadorIA',
                '- Método enviarMensagem() com switch',
                '- enviarMonica(), enviarOpenAI(), enviarGemini(), enviarLocal()',
                '- buscarInternet()',
                '- testarConexaoLocal()',
                '- gerenciadorIA (instância global)'
            ],
            dependencias: 'PARTE 2 (configManager)',
            testa_com: 'gerenciadorIA.enviarMensagem("teste", [])'
        },

        {
            numero: 6,
            arquivo: 'app.js',
            parte: 'PARTE 4',
            descricao: 'Interface de Chat',
            tamanho_estimado: '~500 linhas',
            conteudo: [
                '- SpeechRecognition setup',
                '- iniciarVoz(), toggleTTS(), falarTexto()',
                '- enviarMensagem() - fluxo principal',
                '- adicionarMensagemUI()',
                '- processarCodigos(), escapeHtml()',
                '- Funções de manipulação de mensagens',
                '- Gerenciamento de chats (novo, carregar, excluir)',
                '- Variáveis globais (chatAtualId, conversaAtual, etc)'
            ],
            dependencias: 'PARTE 2, PARTE 3',
            testa_com: 'Digitar mensagem e enviar'
        },

        {
            numero: 7,
            arquivo: 'app.js',
            parte: 'PARTE 5',
            descricao: 'Modais e Configurações',
            tamanho_estimado: '~400 linhas',
            conteudo: [
                '- abrirConfiguracoes(), carregarConfigsUI()',
                '- salvarChaves(), salvarPrompts(), salvarPerfil(), salvarConfigLocal()',
                '- testarConexaoLocal()',
                '- abrirMemoria(), atualizarListaMemoria(), limparMemoria()',
                '- fazerBackup(), importarBackup()',
                '- abrirPlayground(), executarPlayground()',
                '- anexarArquivo()',
                '- mudarTab(), fecharModal()',
                '- Event listeners para modais'
            ],
            dependencias: 'PARTE 2, PARTE 3, PARTE 4',
            testa_com: 'Clicar em botões de configuração'
        },

        {
            numero: 8,
            arquivo: 'app.js',
            parte: 'PARTE 6',
            descricao: 'Sistema de Responsividade',
            tamanho_estimado: '~100 linhas',
            conteudo: [
                '- ajustarLayout()',
                '- Listeners: resize, orientationchange',
                '- Lógica de breakpoints (768px, 480px)',
                '- Menu mobile (sidebar toggle)'
            ],
            dependencias: 'PARTE 1 (CSS)',
            testa_com: 'Redimensionar navegador ou virar celular'
        },

        {
            numero: 9,
            arquivo: 'app.js',
            parte: 'PARTE 7',
            descricao: 'Sistema de Temas',
            tamanho_estimado: '~150 linhas',
            conteudo: [
                '- class GerenciadorTemas',
                '- 3 temas: dark, light, neon',
                '- aplicarTema()',
                '- obterTemas()',
                '- gerenciadorTemas (instância)',
                '- adicionarSeletorTemas()'
            ],
            dependencias: 'PARTE 1 (CSS variables)',
            testa_com: 'Mudar tema no modal de configurações'
        },

        {
            numero: 10,
            arquivo: 'app.js',
            parte: 'PARTE 8',
            descricao: 'Sistema de Exportação',
            tamanho_estimado: '~200 linhas',
            conteudo: [
                '- class ExportadorConversas',
                '- exportarMarkdown(), exportarJSON()',
                '- exportarTodosChats()',
                '- baixarArquivo(), copiarParaClipboard()',
                '- adicionarBotoesExportacao()',
                '- exportarChatAtual()'
            ],
            dependencias: 'PARTE 2 (configManager)',
            testa_com: 'Clicar em botões de exportação'
        },

        {
            numero: 11,
            arquivo: 'app.js',
            parte: 'PARTE 9',
            descricao: 'Integração com IA Local',
            tamanho_estimado: '~300 linhas',
            conteudo: [
                '- class GerenciadorIALocal',
                '- listarModelos(), enviarMensagem()',
                '- testarConexao(), baixarModelo()',
                '- gerenciadorIALocal (instância)',
                '- adicionarGerenciadorModelos()',
                '- carregarListaModelos(), selecionarModelo()',
                '- baixarNovoModelo()'
            ],
            dependencias: 'PARTE 2, PARTE 3',
            testa_com: 'Configurar IA Local e testar conexão'
        },

        {
            numero: 12,
            arquivo: 'app.js',
            parte: 'PARTE 10',
            descricao: 'Inicialização e Sistemas Auxiliares',
            tamanho_estimado: '~300 linhas',
            conteudo: [
                '- class SistemaNotificacoes',
                '- class GerenciadorAtalhos (Ctrl+N, Ctrl+S, etc)',
                '- class MonitorPerformance',
                '- class SincronizacaoAbas',
                '- DOMContentLoaded event',
                '- beforeunload, error, unhandledrejection events'
            ],
            dependencias: 'TODAS as partes anteriores',
            testa_com: 'Recarregar página - deve inicializar tudo'
        }
    ],

    // ============================================
    // 3. ESPECIFICAÇÕES TÉCNICAS DETALHADAS
    // ============================================
    especificacoes: {
        'Responsividade': {
            breakpoints: {
                'Desktop': '>768px - Sidebar 300px + Main content',
                'Tablet': '481px-768px - Ajustes de padding/font',
                'Mobile': '<480px - Sidebar toggle, stack vertical'
            },
            orientacoes: [
                'Retrato (portrait) - Prioridade',
                'Paisagem (landscape) - Suportado'
            ],
            testes_minimos: [
                'iPhone SE (375px)',
                'iPhone 12 (390px)',
                'iPad (768px)',
                'Desktop (1920px)'
            ]
        },

        'Armazenamento': {
            tipo: 'localStorage (sem backend)',
            chaves: {
                'iaConfig': 'Configurações (~2KB)',
                'iaMemoria': 'Histórico (max 100 registros, ~50KB)',
                'iaChats': 'Chats (ilimitado, ~1-5MB)',
                'temaSelecionado': 'Tema atual (~10B)'
            },
            limite: '5-10MB por navegador',
            backup: 'JSON exportável'
        },

        'Performance': {
            tempo_carregamento: '<2 segundos',
            tempo_resposta_ia: '1-5 segundos (dependendo IA)',
            tamanho_arquivo_html: '~800 linhas',
            tamanho_arquivo_js: '~3500 linhas',
            tamanho_total_minificado: '~150KB'
        },

        'Segurança': {
            chaves_api: 'Armazenadas em localStorage (não criptografadas na v1)',
            validacao_entrada: 'Trim e validação básica',
            escape_html: 'Implementado para código',
            cors: 'Dependente das APIs externas'
        },

        'Acessibilidade': {
            teclado: 'Atalhos (Ctrl+N, Ctrl+S, etc)',
            voz: 'Reconhecimento e síntese',
            cores: 'Contraste adequado em todos os temas',
            responsive: 'Totalmente responsivo'
        }
    },

    // ============================================
    // 4. MODELOS DE IA SUPORTADOS
    // ============================================
    modelos_ia: {
        'Monica': {
            endpoint: 'https://api.monica.im/v1/chat',
            metodo: 'POST',
            autenticacao: 'Bearer token',
            parametros: ['mensagem', 'historico', 'temperatura', 'maxTokens', 'promptSistema'],
            resposta: 'JSON com campo "resposta"',
            status: 'Implementado'
        },

        'OpenAI (GPT-3.5)': {
            endpoint: 'https://api.openai.com/v1/chat/completions',
            metodo: 'POST',
            autenticacao: 'Bearer token',
            parametros: ['model', 'messages', 'temperature', 'max_tokens'],
            resposta: 'JSON com choices[0].message.content',
            status: 'Implementado'
        },

        'Google Gemini': {
            endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
            metodo: 'POST',
            autenticacao: 'API key',
            parametros: ['contents', 'generationConfig'],
            resposta: 'JSON com candidates[0].content.parts[0].text',
            status: 'Implementado'
        },

        'IA Local (Ollama)': {
            endpoint: 'http://localhost:11434/api/generate',
            metodo: 'POST',
            autenticacao: 'Nenhuma',
            parametros: ['model', 'prompt', 'temperature', 'num_predict'],
            resposta: 'JSON com campo "response"',
            requisitos: 'Ollama instalado e rodando',
            status: 'Implementado'
        },

        'Google Custom Search': {
            endpoint: 'https://www.googleapis.com/customsearch/v1',
            metodo: 'GET',
            autenticacao: 'API key',
            parametros: ['q', 'key'],
            resposta: 'JSON com items[]',
            uso: 'Busca de internet para contexto',
            status: 'Implementado'
        }
    },

    // ============================================
    // 5. ESTRUTURA DE DADOS
    // ============================================
    estrutura_dados: {
        'Config': {
            tipo: 'Object',
            armazenamento: 'localStorage.iaConfig',
            campos: {
                'modelo': 'string (monica|openai|gemini|local)',
                'temperatura': 'number (0-2)',
                'maxTokens': 'number (100-4000)',
                'contexto': 'string (curto|medio|longo)',
                'buscaInternet': 'string (ativada|desativada)',
                'tamanhoResposta': 'string (curta|media|longa)',
                'chaves': 'object {openai, gemini, monica, busca}',
                'prompts': 'object {sistema, adicionais}',
                'perfil': 'object {nome, profissao, interesses, personalidade}',
                'iaLocal': 'object {endereco, modelo}',
                'tts': 'object {ativado, velocidade, voz}'
            }
        },

        'Memoria': {
            tipo: 'Array<Object>',
            armazenamento: 'localStorage.iaMemoria',
            limite: '15 mínimo, 100 máximo',
            campos_registro: {
                'id': 'number (timestamp)',
                'tipo': 'string (conversa|configuracao|nota)',
                'conteudo': 'string',
                'contexto': 'string',
                'data': 'ISO string',
                'chatAtual': 'number (id do chat)'
            }
        },

        'Chat': {
            tipo: 'Object',
            armazenamento: 'localStorage.iaChats (array)',
            campos: {
                'id': 'number (timestamp)',
                'titulo': 'string',
                'mensagens': 'array<{tipo, conteudo, timestamp}>',
                'dataCriacao': 'ISO string',
                'dataUltimaAtualizacao': 'ISO string'
            }
        },

        'Backup': {
            tipo: 'Object',
            formato: 'JSON',
            campos: {
                'versao': 'string (1.0.0)',
                'data': 'ISO string',
                'config': 'object',
                'memoria': 'array',
                'chats': 'array'
            }
        }
    },

    // ============================================
    // 6. CHECKLIST DE VALIDAÇÃO
    // ============================================
    checklist_validacao: {
        'Funcionalidades Básicas': [
            '[ ] Chat carrega e exibe mensagens',
            '[ ] Novo chat pode ser criado',
            '[ ] Histórico de chats é listado',
            '[ ] Mensagens são salvas em localStorage',
            '[ ] Página recarrega mantém histórico'
        ],

        'Modelos de IA': [
            '[ ] Monica responde corretamente',
            '[ ] OpenAI responde corretamente',
            '[ ] Gemini responde corretamente',
            '[ ] IA Local conecta e responde',
            '[ ] Busca internet funciona'
        ],

        'Voz': [
            '[ ] Reconhecimento de voz inicia',
            '[ ] Texto é inserido no input',
            '[ ] TTS fala a resposta',
            '[ ] Velocidade 1.15 está correta',
            '[ ] Voz Francisca é usada (se disponível)'
        ],

        'Memória': [
            '[ ] Registros são adicionados',
            '[ ] Limite de 100 é respeitado',
            '[ ] Contexto é mantido',
            '[ ] Memória pode ser limpa',
            '[ ] Memória persiste após reload'
        ],

        'Configurações': [
            '[ ] Chaves podem ser salvas',
            '[ ] Prompts podem ser customizados',
            '[ ] Perfil do usuário é salvo',
            '[ ] IA Local pode ser configurada',
            '[ ] Temas podem ser alterados'
        ],

        'Exportação': [
            '[ ] Markdown pode ser exportado',
            '[ ] JSON pode ser exportado',
            '[ ] Arquivo é baixado corretamente',
            '[ ] Conteúdo é copiado para clipboard',
            '[ ] Backup pode ser feito'
        ],

        'Responsividade': [
            '[ ] Desktop (1920px) funciona',
            '[ ] Tablet (768px) funciona',
            '[ ] Mobile (375px) funciona',
            '[ ] Retrato funciona',
            '[ ] Paisagem funciona',
            '[ ] Sidebar toggle funciona no mobile'
        ],

        'Playground': [
            '[ ] Código pode ser inserido',
            '[ ] Preview mostra resultado',
            '[ ] Código pode ser executado',
            '[ ] Erros são tratados'
        ],

        'Atalhos': [
            '[ ] Ctrl+N abre novo chat',
            '[ ] Ctrl+S faz backup',
            '[ ] Ctrl+K abre configurações',
            '[ ] Ctrl+M abre memória',
            '[ ] Ctrl+L limpa chat',
            '[ ] Ctrl+Enter envia mensagem'
        ],

        'Documentação': [
            '[ ] DOCUMENTACAO_PROJETO está completa',
            '[ ] GUIA_RAPIDO_RECUPERACAO está acessível',
            '[ ] Botão 📚 Docs funciona',
            '[ ] Relatório de contexto é gerado'
        ]
    },

    // ============================================
    // 7. INSTRUÇÕES PARA OUTRAS IAs
    // ============================================
    instrucoes_para_ia: {
        'Antes de Começar': [
            '1. Leia COMPLETAMENTE este briefing',
            '2. Entenda a ordem de montagem (PARTES 1-10)',
            '3. Verifique as dependências entre partes',
            '4. Consulte DOCUMENTACAO_PROJETO para estrutura',
            '5. Mantenha o padrão de código estabelecido'
        ],

        'Durante o Desenvolvimento': [
            '1. Copie EXATAMENTE as partes na ordem especificada',
            '2. Não omita ou simplifique funcionalidades',
            '3. Mantenha nomes de variáveis e funções',
            '4. Preserve comentários e documentação',
            '5. Teste cada parte após implementação',
            '6. Valide com checklist de validação'
        ],

        'Se Precisar Estender': [
            '1. Consulte "pontos_extensao" em DOCUMENTACAO_PROJETO',
            '2. Siga o padrão de código existente',
            '3. Adicione documentação para novas funcionalidades',
            '4. Atualize checklist de validação',
            '5. Teste compatibilidade com código existente'
        ],

        'Se Encontrar Problemas': [
            '1. Consulte GUIA_RAPIDO_RECUPERACAO',
            '2. Verifique checklist de validação',
            '3. Teste em diferentes navegadores',
            '4. Verifique console para erros',
            '5. Valide estrutura de dados em localStorage'
        ],

        'Entrega Final': [
            '1. Todos os itens do checklist devem estar ✓',
            '2. Código deve estar bem formatado',
            '3. Documentação deve estar atualizada',
            '4. Arquivo HTML deve ser válido',
            '5. Arquivo JS deve estar sem erros',
            '6. Testes em navegadores suportados'
        ]
    },

    // ============================================
    // 8. PADRÕES DE CÓDIGO
    // ============================================
    padroes_codigo: {
        'Nomenclatura': {
            'Classes': 'PascalCase (ConfigManager, GerenciadorIA)',
            'Funções': 'camelCase (enviarMensagem, adicionarMemoria)',
            'Constantes': 'UPPER_SNAKE_CASE (DOCUMENTACAO_PROJETO)',
            'Variáveis': 'camelCase (chatAtualId, conversaAtual)',
            'IDs HTML': 'kebab-case (input-chat, btn-enviar)',
            'Classes CSS': 'kebab-case (chat-container, msg-toolbar)'
        },

        'Estrutura de Função': `
        function nomeFuncao(parametro1, parametro2) {
            // Comentário explicativo
            const resultado = operacao(parametro1);
            
            // Validação
            if (!resultado) {
                console.error('Erro: ...');
                return null;
            }
            
            // Processamento
            const dados = processar(resultado);
            
            // Retorno
            return dados;
        }
        `,

        'Estrutura de Classe': `
        class NomeClasse {
            constructor() {
                this.propriedade = valor;
            }
            
            metodoPublico() {
                // Implementação
            }
            
            _metodoPrivado() {
                // Implementação privada
            }
        }
        `,

        'Tratamento de Erros': `
        try {
            const resultado = await operacaoAssincrona();
            return resultado;
        } catch (erro) {
            console.error('Erro em operacaoAssincrona:', erro);
            mostrarNotificacao(erro.message, 'erro');
            throw erro;
        }
        `,

        'Comentários': [
            '// Comentário de linha única para lógica simples',
            '/* Comentário multi-linha para explicações complexas */',
            '/** JSDoc para funções públicas */',
            '// TODO: Melhorias futuras',
            '// FIXME: Bugs conhecidos'
        ]
    },

    // ============================================
    // 9. CONTATO E SUPORTE
    // ============================================
    suporte: {
        'Dúvidas sobre Arquitetura': 'Consulte DOCUMENTACAO_PROJETO.estrutura',
        'Dúvidas sobre Módulos': 'Consulte DOCUMENTACAO_PROJETO.modulos',
        'Problemas Comuns': 'Consulte GUIA_RAPIDO_RECUPERACAO',
        'Como Estender': 'Consulte DOCUMENTACAO_PROJETO.pontos_extensao',
        'Como Manter': 'Consulte DOCUMENTACAO_PROJETO.guia_manutencao',
        'Validação': 'Use checklist_validacao deste briefing'
    },

    // ============================================
    // 10. RESUMO EXECUTIVO
    // ============================================
    resumo: `
    CHAT IA PROFISSIONAL - RESUMO PARA DESENVOLVIMENTO
    
    O que é:
    Aplicação web responsiva para interação com múltiplos modelos de IA,
    com suporte a voz, memória contextual e exportação de dados.
    
    Tecnologias:
    HTML5, CSS3, JavaScript ES6+ (sem frameworks externos)
    
    Arquitetura:
    Modular com 10 módulos independentes, cada um com responsabilidade clara.
    Persistência em localStorage, sem backend necessário.
    
    Tamanho:
    ~1600 linhas HTML + ~3500 linhas JavaScript = ~5100 linhas total
    
    Tempo de Montagem Estimado:
    - Para IA experiente: 2-4 horas
    - Para IA nova: 4-6 horas (com testes)
    
    Testes Necessários:
    - 4 navegadores (Chrome, Firefox, Safari, Edge)
    - 3 resoluções (Desktop, Tablet, Mobile)
    - 2 orientações (Retrato, Paisagem)
    - 5 modelos de IA (Monica, OpenAI, Gemini, Local, Busca)
    
    Validação:
    Use checklist_validacao com 40+ itens
    
    Documentação:
    Completa em DOCUMENTACAO_PROJETO + GUIA_RAPIDO_RECUPERACAO
    
    Status:
    PRONTO PARA PRODUÇÃO
    `
};

// ============================================
// FUNÇÃO PARA GERAR BRIEFING FORMATADO
// ============================================

/**
 * Gera briefing formatado em Markdown para enviar a outra IA
 */
function gerarBriefingMarkdown() {
    const briefing = `
# 📋 BRIEFING TÉCNICO - CHAT IA PROFISSIONAL

## 1. IDENTIFICAÇÃO DO PROJETO
- **Nome**: ${BRIEFING_TECNICO.projeto.nome}
- **Versão**: ${BRIEFING_TECNICO.projeto.versao}
- **Objetivo**: ${BRIEFING_TECNICO.projeto.objetivo}
- **Status**: ${BRIEFING_TECNICO.projeto.status}

## 2. ORDEM DE MONTAGEM (SEQUENCIAL)

${BRIEFING_TECNICO.ordem_montagem.map(parte => `
### PARTE ${parte.numero}: ${parte.parte}
**Arquivo**: ${parte.arquivo}  
**Descrição**: ${parte.descricao}  
**Tamanho**: ${parte.tamanho_estimado}  
**Dependências**: ${parte.dependencias}  

**Conteúdo**:
${parte.conteudo.map(item => `- ${item}`).join('\n')}

**Teste**: ${parte.testa_com}
`).join('\n')}

## 3. ESPECIFICAÇÕES TÉCNICAS

### Responsividade
${Object.entries(BRIEFING_TECNICO.especificacoes.Responsividade).map(([chave, valor]) => 
    `- **${chave}**: ${Array.isArray(valor) ? valor.join(', ') : JSON.stringify(valor)}`
).join('\n')}

### Armazenamento
${Object.entries(BRIEFING_TECNICO.especificacoes.Armazenamento).map(([chave, valor]) => 
    `- **${chave}**: ${typeof valor === 'object' ? JSON.stringify(valor) : valor}`
).join('\n')}

## 4. MODELOS DE IA SUPORTADOS

${Object.entries(BRIEFING_TECNICO.modelos_ia).map(([nome, config]) => `
### ${nome}
- **Endpoint**: ${config.endpoint}
- **Método**: ${config.metodo}
- **Status**: ${config.status}
`).join('\n')}

## 5. CHECKLIST DE VALIDAÇÃO

${Object.entries(BRIEFING_TECNICO.checklist_validacao).map(([categoria, items]) => `
### ${categoria}
${items.map(item => `- ${item}`).join('\n')}
`).join('\n')}

## 6. INSTRUÇÕES PARA OUTRAS IAs

### Antes de Começar
${BRIEFING_TECNICO.instrucoes_para_ia['Antes de Começar'].map(item => `- ${item}`).join('\n')}

### Durante o Desenvolvimento
${BRIEFING_TECNICO.instrucoes_para_ia['Durante o Desenvolvimento'].map(item => `- ${item}`).join('\n')}

### Se Precisar Estender
${BRIEFING_TECNICO.instrucoes_para_ia['Se Precisar Estender'].map(item => `- ${item}`).join('\n')}

## 7. PADRÕES DE CÓDIGO

### Nomenclatura
${Object.entries(BRIEFING_TECNICO.padroes_codigo.Nomenclatura).map(([tipo, padrao]) => 
    `- **${tipo}**: ${padrao}`
).join('\n')}

## 8. RESUMO EXECUTIVO

${BRIEFING_TECNICO.resumo}

---

**Gerado em**: ${new Date().toLocaleString('pt-BR')}  
**Versão do Briefing**: 1.0  
**Para**: Outras IAs (Claude, GPT, Gemini, etc)
    `;

    return briefing;
}

/**
 * Exporta briefing completo em Markdown
 */
function exportarBriefing() {
    const briefing = gerarBriefingMarkdown();
    const blob = new Blob([briefing], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `briefing-chat-ia-${Date.now()}.md`;
    a.click();
    
    mostrarNotificacao('Briefing exportado!', 'sucesso');
}

/**
 * Copia briefing para clipboard
 */
function copiarBriefing() {
    const briefing = gerarBriefingMarkdown();
    navigator.clipboard.writeText(briefing).then(() => {
        mostrarNotificacao('Briefing copiado para clipboard!', 'sucesso');
    });
}

// ============================================
// INICIALIZAR BRIEFING
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Adicionar botão de briefing ao sidebar
    const footer = document.querySelector('.sidebar-footer');
    if (footer && !document.getElementById('btnBriefing')) {
        const btn = document.createElement('button');
        btn.id = 'btnBriefing';
        btn.className = 'btn-sidebar';
        btn.innerHTML = '📋 Brief';
        btn.title = 'Exportar briefing para outra IA';
        btn.onclick = exportarBriefing;
        footer.appendChild(btn);
    }
});

// Exportar para uso global
window.BRIEFING_TECNICO = BRIEFING_TECNICO;
window.gerarBriefingMarkdown = gerarBriefingMarkdown;
window.exportarBriefing = exportarBriefing;
window.copiarBriefing = copiarBriefing;

// Log no console
console.log(`
╔════════════════════════════════════════════════════════════════╗
║        SISTEMA DE BRIEFING PROFISSIONAL ATIVO                 ║
╚════════════════════════════════════════════════════════════════╝

📋 Comandos Disponíveis:
  - exportarBriefing() - Baixa briefing em Markdown
  - copiarBriefing() - Copia para clipboard
  - gerarBriefingMarkdown() - Gera texto formatado
  - BRIEFING_TECNICO - Objeto completo

🎯 Para enviar a outra IA:
  1. Clique em "📋 Brief" no sidebar
  2. Ou use: copiarBriefing()
  3. Cole o conteúdo na IA
  4. Peça para montar o projeto

✓ Briefing contém:
  - Ordem de montagem sequencial
  - Especificações técnicas completas
  - Checklist de validação
  - Padrões de código
  - Instruções detalhadas
`);



// ============================================
// PARTE 11: BRIEFING PROFISSIONAL PARA OUTRAS IAs
// ============================================

/**
 * BRIEFING TÉCNICO - CHAT IA PROFISSIONAL
 * 
 * Este documento é destinado para outras IAs (Claude, GPT, etc)
 * para que possam montar, estender ou corrigir o projeto sem
 * necessidade de explicações adicionais.
 * 
 * IMPORTANTE: Este arquivo deve ser enviado COMPLETO para a IA
 * antes de qualquer solicitação de desenvolvimento.
 */

const BRIEFING_TECNICO = {
    // ============================================
    // 1. IDENTIFICAÇÃO DO PROJETO
    // ============================================
    projeto: {
        nome: 'Chat IA Profissional Modular',
        versao: '1.0.0',
        tipo: 'Aplicação Web Responsiva',
        objetivo: 'Criar interface profissional para interação com múltiplos modelos de IA com suporte a voz, memória contextual e exportação de dados',
        
        cliente: 'Advogado com TDHA',
        requisitos_cliente: [
            'Código modular e bem documentado',
            'Sem código quebrado ou inútil',
            'Fácil de entender e corrigir',
            'Responsivo para mobile (retrato/paisagem)',
            'Suporte a voz e TTS',
            'Memória contextual (15+ registros)',
            'Exportação em Markdown',
            'Integração com múltiplas IAs'
        ],

        tecnologias_obrigatorias: [
            'HTML5',
            'CSS3 (Grid, Flexbox, Variáveis)',
            'JavaScript ES6+ (sem frameworks)',
            'LocalStorage (persistência)',
            'Web Speech API',
            'Fetch API'
        ],

        navegadores_suportados: [
            'Chrome 90+',
            'Firefox 88+',
            'Safari 14+',
            'Edge 90+'
        ],

        status: 'PRONTO PARA PRODUÇÃO',
        data_criacao: '2026-08-31',
        ultima_atualizacao: '2026-08-31'
    },

    // ============================================
    // 2. ORDEM DE MONTAGEM (SEQUENCIAL)
    // ============================================
    ordem_montagem: [
        {
            numero: 1,
            arquivo: 'index.html',
            parte: 'PARTE 1',
            descricao: 'Interface HTML com CSS responsivo',
            tamanho_estimado: '~800 linhas',
            conteudo: [
                '- DOCTYPE e meta tags',
                '- CSS em <style> (variáveis, responsividade, temas)',
                '- HTML estruturado com IDs e classes',
                '- Sidebar com histórico de chats',
                '- Main content com config header',
                '- Chat container com mensagens e input',
                '- 3 Modais (Config, Memória, Playground)',
                '- Script tag apontando para app.js'
            ],
            dependencias: 'Nenhuma',
            testa_com: 'Abrir arquivo no navegador - deve mostrar interface'
        },

        {
            numero: 2,
            arquivo: 'app.js',
            parte: 'PARTE 0',
            descricao: 'Sistema de Documentação e Recuperação',
            tamanho_estimado: '~400 linhas',
            conteudo: [
                '- DOCUMENTACAO_PROJETO (objeto com toda estrutura)',
                '- gerarRelatorioContexto()',
                '- exportarDocumentacao()',
                '- verificarIntegridade()',
                '- recuperarContexto()',
                '- GUIA_RAPIDO_RECUPERACAO',
                '- gerarResumoEstrutura()',
                '- analisarMudancaNecessaria()'
            ],
            dependencias: 'Nenhuma',
            testa_com: 'console.log(DOCUMENTACAO_PROJETO)'
        },

        {
            numero: 3,
            arquivo: 'app.js',
            parte: 'PARTE 0B',
            descricao: 'Guia Rápido de Recuperação',
            tamanho_estimado: '~200 linhas',
            conteudo: [
                '- GUIA_RAPIDO_RECUPERACAO (objeto)',
                '- Soluções para 7 problemas comuns',
                '- Exemplos de código para cada solução'
            ],
            dependencias: 'PARTE 0',
            testa_com: 'console.log(GUIA_RAPIDO_RECUPERACAO)'
        },

        {
            numero: 4,
            arquivo: 'app.js',
            parte: 'PARTE 2',
            descricao: 'Gerenciador de Configuração',
            tamanho_estimado: '~300 linhas',
            conteudo: [
                '- class ConfigManager',
                '- Métodos de carregamento/salvamento',
                '- Gerenciamento de memória (15-100 registros)',
                '- Gerenciamento de chats',
                '- Backup/Importação em JSON',
                '- configManager (instância global)'
            ],
            dependencias: 'Nenhuma',
            testa_com: 'configManager.carregarConfig()'
        },

        {
            numero: 5,
            arquivo: 'app.js',
            parte: 'PARTE 3',
            descricao: 'Gerenciador de IA',
            tamanho_estimado: '~300 linhas',
            conteudo: [
                '- class GerenciadorIA',
                '- Método enviarMensagem() com switch',
                '- enviarMonica(), enviarOpenAI(), enviarGemini(), enviarLocal()',
                '- buscarInternet()',
                '- testarConexaoLocal()',
                '- gerenciadorIA (instância global)'
            ],
            dependencias: 'PARTE 2 (configManager)',
            testa_com: 'gerenciadorIA.enviarMensagem("teste", [])'
        },

        {
            numero: 6,
            arquivo: 'app.js',
            parte: 'PARTE 4',
            descricao: 'Interface de Chat',
            tamanho_estimado: '~500 linhas',
            conteudo: [
                '- SpeechRecognition setup',
                '- iniciarVoz(), toggleTTS(), falarTexto()',
                '- enviarMensagem() - fluxo principal',
                '- adicionarMensagemUI()',
                '- processarCodigos(), escapeHtml()',
                '- Funções de manipulação de mensagens',
                '- Gerenciamento de chats (novo, carregar, excluir)',
                '- Variáveis globais (chatAtualId, conversaAtual, etc)'
            ],
            dependencias: 'PARTE 2, PARTE 3',
            testa_com: 'Digitar mensagem e enviar'
        },

        {
            numero: 7,
            arquivo: 'app.js',
            parte: 'PARTE 5',
            descricao: 'Modais e Configurações',
            tamanho_estimado: '~400 linhas',
            conteudo: [
                '- abrirConfiguracoes(), carregarConfigsUI()',
                '- salvarChaves(), salvarPrompts(), salvarPerfil(), salvarConfigLocal()',
                '- testarConexaoLocal()',
                '- abrirMemoria(), atualizarListaMemoria(), limparMemoria()',
                '- fazerBackup(), importarBackup()',
                '- abrirPlayground(), executarPlayground()',
                '- anexarArquivo()',
                '- mudarTab(), fecharModal()',
                '- Event listeners para modais'
            ],
            dependencias: 'PARTE 2, PARTE 3, PARTE 4',
            testa_com: 'Clicar em botões de configuração'
        },

        {
            numero: 8,
            arquivo: 'app.js',
            parte: 'PARTE 6',
            descricao: 'Sistema de Responsividade',
            tamanho_estimado: '~100 linhas',
            conteudo: [
                '- ajustarLayout()',
                '- Listeners: resize, orientationchange',
                '- Lógica de breakpoints (768px, 480px)',
                '- Menu mobile (sidebar toggle)'
            ],
            dependencias: 'PARTE 1 (CSS)',
            testa_com: 'Redimensionar navegador ou virar celular'
        },

        {
            numero: 9,
            arquivo: 'app.js',
            parte: 'PARTE 7',
            descricao: 'Sistema de Temas',
            tamanho_estimado: '~150 linhas',
            conteudo: [
                '- class GerenciadorTemas',
                '- 3 temas: dark, light, neon',
                '- aplicarTema()',
                '- obterTemas()',
                '- gerenciadorTemas (instância)',
                '- adicionarSeletorTemas()'
            ],
            dependencias: 'PARTE 1 (CSS variables)',
            testa_com: 'Mudar tema no modal de configurações'
        },

        {
            numero: 10,
            arquivo: 'app.js',
            parte: 'PARTE 8',
            descricao: 'Sistema de Exportação',
            tamanho_estimado: '~200 linhas',
            conteudo: [
                '- class ExportadorConversas',
                '- exportarMarkdown(), exportarJSON()',
                '- exportarTodosChats()',
                '- baixarArquivo(), copiarParaClipboard()',
                '- adicionarBotoesExportacao()',
                '- exportarChatAtual()'
            ],
            dependencias: 'PARTE 2 (configManager)',
            testa_com: 'Clicar em botões de exportação'
        },

        {
            numero: 11,
            arquivo: 'app.js',
            parte: 'PARTE 9',
            descricao: 'Integração com IA Local',
            tamanho_estimado: '~300 linhas',
            conteudo: [
                '- class GerenciadorIALocal',
                '- listarModelos(), enviarMensagem()',
                '- testarConexao(), baixarModelo()',
                '- gerenciadorIALocal (instância)',
                '- adicionarGerenciadorModelos()',
                '- carregarListaModelos(), selecionarModelo()',
                '- baixarNovoModelo()'
            ],
            dependencias: 'PARTE 2, PARTE 3',
            testa_com: 'Configurar IA Local e testar conexão'
        },

        {
            numero: 12,
            arquivo: 'app.js',
            parte: 'PARTE 10',
            descricao: 'Inicialização e Sistemas Auxiliares',
            tamanho_estimado: '~300 linhas',
            conteudo: [
                '- class SistemaNotificacoes',
                '- class GerenciadorAtalhos (Ctrl+N, Ctrl+S, etc)',
                '- class MonitorPerformance',
                '- class SincronizacaoAbas',
                '- DOMContentLoaded event',
                '- beforeunload, error, unhandledrejection events'
            ],
            dependencias: 'TODAS as partes anteriores',
            testa_com: 'Recarregar página - deve inicializar tudo'
        }
    ],

    // ============================================
    // 3. ESPECIFICAÇÕES TÉCNICAS DETALHADAS
    // ============================================
    especificacoes: {
        'Responsividade': {
            breakpoints: {
                'Desktop': '>768px - Sidebar 300px + Main content',
                'Tablet': '481px-768px - Ajustes de padding/font',
                'Mobile': '<480px - Sidebar toggle, stack vertical'
            },
            orientacoes: [
                'Retrato (portrait) - Prioridade',
                'Paisagem (landscape) - Suportado'
            ],
            testes_minimos: [
                'iPhone SE (375px)',
                'iPhone 12 (390px)',
                'iPad (768px)',
                'Desktop (1920px)'
            ]
        },

        'Armazenamento': {
            tipo: 'localStorage (sem backend)',
            chaves: {
                'iaConfig': 'Configurações (~2KB)',
                'iaMemoria': 'Histórico (max 100 registros, ~50KB)',
                'iaChats': 'Chats (ilimitado, ~1-5MB)',
                'temaSelecionado': 'Tema atual (~10B)'
            },
            limite: '5-10MB por navegador',
            backup: 'JSON exportável'
        },

        'Performance': {
            tempo_carregamento: '<2 segundos',
            tempo_resposta_ia: '1-5 segundos (dependendo IA)',
            tamanho_arquivo_html: '~800 linhas',
            tamanho_arquivo_js: '~3500 linhas',
            tamanho_total_minificado: '~150KB'
        },

        'Segurança': {
            chaves_api: 'Armazenadas em localStorage (não criptografadas na v1)',
            validacao_entrada: 'Trim e validação básica',
            escape_html: 'Implementado para código',
            cors: 'Dependente das APIs externas'
        },

        'Acessibilidade': {
            teclado: 'Atalhos (Ctrl+N, Ctrl+S, etc)',
            voz: 'Reconhecimento e síntese',
            cores: 'Contraste adequado em todos os temas',
            responsive: 'Totalmente responsivo'
        }
    },

    // ============================================
    // 4. MODELOS DE IA SUPORTADOS
    // ============================================
    modelos_ia: {
        'Monica': {
            endpoint: 'https://api.monica.im/v1/chat',
            metodo: 'POST',
            autenticacao: 'Bearer token',
            parametros: ['mensagem', 'historico', 'temperatura', 'maxTokens', 'promptSistema'],
            resposta: 'JSON com campo "resposta"',
            status: 'Implementado'
        },

        'OpenAI (GPT-3.5)': {
            endpoint: 'https://api.openai.com/v1/chat/completions',
            metodo: 'POST',
            autenticacao: 'Bearer token',
            parametros: ['model', 'messages', 'temperature', 'max_tokens'],
            resposta: 'JSON com choices[0].message.content',
            status: 'Implementado'
        },

        'Google Gemini': {
            endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
            metodo: 'POST',
            autenticacao: 'API key',
            parametros: ['contents', 'generationConfig'],
            resposta: 'JSON com candidates[0].content.parts[0].text',
            status: 'Implementado'
        },

        'IA Local (Ollama)': {
            endpoint: 'http://localhost:11434/api/generate',
            metodo: 'POST',
            autenticacao: 'Nenhuma',
            parametros: ['model', 'prompt', 'temperature', 'num_predict'],
            resposta: 'JSON com campo "response"',
            requisitos: 'Ollama instalado e rodando',
            status: 'Implementado'
        },

        'Google Custom Search': {
            endpoint: 'https://www.googleapis.com/customsearch/v1',
            metodo: 'GET',
            autenticacao: 'API key',
            parametros: ['q', 'key'],
            resposta: 'JSON com items[]',
            uso: 'Busca de internet para contexto',
            status: 'Implementado'
        }
    },

    // ============================================
    // 5. ESTRUTURA DE DADOS
    // ============================================
    estrutura_dados: {
        'Config': {
            tipo: 'Object',
            armazenamento: 'localStorage.iaConfig',
            campos: {
                'modelo': 'string (monica|openai|gemini|local)',
                'temperatura': 'number (0-2)',
                'maxTokens': 'number (100-4000)',
                'contexto': 'string (curto|medio|longo)',
                'buscaInternet': 'string (ativada|desativada)',
                'tamanhoResposta': 'string (curta|media|longa)',
                'chaves': 'object {openai, gemini, monica, busca}',
                'prompts': 'object {sistema, adicionais}',
                'perfil': 'object {nome, profissao, interesses, personalidade}',
                'iaLocal': 'object {endereco, modelo}',
                'tts': 'object {ativado, velocidade, voz}'
            }
        },

        'Memoria': {
            tipo: 'Array<Object>',
            armazenamento: 'localStorage.iaMemoria',
            limite: '15 mínimo, 100 máximo',
            campos_registro: {
                'id': 'number (timestamp)',
                'tipo': 'string (conversa|configuracao|nota)',
                'conteudo': 'string',
                'contexto': 'string',
                'data': 'ISO string',
                'chatAtual': 'number (id do chat)'
            }
        },

        'Chat': {
            tipo: 'Object',
            armazenamento: 'localStorage.iaChats (array)',
            campos: {
                'id': 'number (timestamp)',
                'titulo': 'string',
                'mensagens': 'array<{tipo, conteudo, timestamp}>',
                'dataCriacao': 'ISO string',
                'dataUltimaAtualizacao': 'ISO string'
            }
        },

        'Backup': {
            tipo: 'Object',
            formato: 'JSON',
            campos: {
                'versao': 'string (1.0.0)',
                'data': 'ISO string',
                'config': 'object',
                'memoria': 'array',
                'chats': 'array'
            }
        }
    },

    // ============================================
    // 6. CHECKLIST DE VALIDAÇÃO
    // ============================================
    checklist_validacao: {
        'Funcionalidades Básicas': [
            '[ ] Chat carrega e exibe mensagens',
            '[ ] Novo chat pode ser criado',
            '[ ] Histórico de chats é listado',
            '[ ] Mensagens são salvas em localStorage',
            '[ ] Página recarrega mantém histórico'
        ],

        'Modelos de IA': [
            '[ ] Monica responde corretamente',
            '[ ] OpenAI responde corretamente',
            '[ ] Gemini responde corretamente',
            '[ ] IA Local conecta e responde',
            '[ ] Busca internet funciona'
        ],

        'Voz': [
            '[ ] Reconhecimento de voz inicia',
            '[ ] Texto é inserido no input',
            '[ ] TTS fala a resposta',
            '[ ] Velocidade 1.15 está correta',
            '[ ] Voz Francisca é usada (se disponível)'
        ],

        'Memória': [
            '[ ] Registros são adicionados',
            '[ ] Limite de 100 é respeitado',
            '[ ] Contexto é mantido',
            '[ ] Memória pode ser limpa',
            '[ ] Memória persiste após reload'
        ],

        'Configurações': [
            '[ ] Chaves podem ser salvas',
            '[ ] Prompts podem ser customizados',
            '[ ] Perfil do usuário é salvo',
            '[ ] IA Local pode ser configurada',
            '[ ] Temas podem ser alterados'
        ],

        'Exportação': [
            '[ ] Markdown pode ser exportado',
            '[ ] JSON pode ser exportado',
            '[ ] Arquivo é baixado corretamente',
            '[ ] Conteúdo é copiado para clipboard',
            '[ ] Backup pode ser feito'
        ],

        'Responsividade': [
            '[ ] Desktop (1920px) funciona',
            '[ ] Tablet (768px) funciona',
            '[ ] Mobile (375px) funciona',
            '[ ] Retrato funciona',
            '[ ] Paisagem funciona',
            '[ ] Sidebar toggle funciona no mobile'
        ],

        'Playground': [
            '[ ] Código pode ser inserido',
            '[ ] Preview mostra resultado',
            '[ ] Código pode ser executado',
            '[ ] Erros são tratados'
        ],

        'Atalhos': [
            '[ ] Ctrl+N abre novo chat',
            '[ ] Ctrl+S faz backup',
            '[ ] Ctrl+K abre configurações',
            '[ ] Ctrl+M abre memória',
            '[ ] Ctrl+L limpa chat',
            '[ ] Ctrl+Enter envia mensagem'
        ],

        'Documentação': [
            '[ ] DOCUMENTACAO_PROJETO está completa',
            '[ ] GUIA_RAPIDO_RECUPERACAO está acessível',
            '[ ] Botão 📚 Docs funciona',
            '[ ] Relatório de contexto é gerado'
        ]
    },

    // ============================================
    // 7. INSTRUÇÕES PARA OUTRAS IAs
    // ============================================
    instrucoes_para_ia: {
        'Antes de Começar': [
            '1. Leia COMPLETAMENTE este briefing',
            '2. Entenda a ordem de montagem (PARTES 1-10)',
            '3. Verifique as dependências entre partes',
            '4. Consulte DOCUMENTACAO_PROJETO para estrutura',
            '5. Mantenha o padrão de código estabelecido'
        ],

        'Durante o Desenvolvimento': [
            '1. Copie EXATAMENTE as partes na ordem especificada',
            '2. Não omita ou simplifique funcionalidades',
            '3. Mantenha nomes de variáveis e funções',
            '4. Preserve comentários e documentação',
            '5. Teste cada parte após implementação',
            '6. Valide com checklist de validação'
        ],

        'Se Precisar Estender': [
            '1. Consulte "pontos_extensao" em DOCUMENTACAO_PROJETO',
            '2. Siga o padrão de código existente',
            '3. Adicione documentação para novas funcionalidades',
            '4. Atualize checklist de validação',
            '5. Teste compatibilidade com código existente'
        ],

        'Se Encontrar Problemas': [
            '1. Consulte GUIA_RAPIDO_RECUPERACAO',
            '2. Verifique checklist de validação',
            '3. Teste em diferentes navegadores',
            '4. Verifique console para erros',
            '5. Valide estrutura de dados em localStorage'
        ],

        'Entrega Final': [
            '1. Todos os itens do checklist devem estar ✓',
            '2. Código deve estar bem formatado',
            '3. Documentação deve estar atualizada',
            '4. Arquivo HTML deve ser válido',
            '5. Arquivo JS deve estar sem erros',
            '6. Testes em navegadores suportados'
        ]
    },

    // ============================================
    // 8. PADRÕES DE CÓDIGO
    // ============================================
    padroes_codigo: {
        'Nomenclatura': {
            'Classes': 'PascalCase (ConfigManager, GerenciadorIA)',
            'Funções': 'camelCase (enviarMensagem, adicionarMemoria)',
            'Constantes': 'UPPER_SNAKE_CASE (DOCUMENTACAO_PROJETO)',
            'Variáveis': 'camelCase (chatAtualId, conversaAtual)',
            'IDs HTML': 'kebab-case (input-chat, btn-enviar)',
            'Classes CSS': 'kebab-case (chat-container, msg-toolbar)'
        },

        'Estrutura de Função': `
        function nomeFuncao(parametro1, parametro2) {
            // Comentário explicativo
            const resultado = operacao(parametro1);
            
            // Validação
            if (!resultado) {
                console.error('Erro: ...');
                return null;
            }
            
            // Processamento
            const dados = processar(resultado);
            
            // Retorno
            return dados;
        }
        `,

        'Estrutura de Classe': `
        class NomeClasse {
            constructor() {
                this.propriedade = valor;
            }
            
            metodoPublico() {
                // Implementação
            }
            
            _metodoPrivado() {
                // Implementação privada
            }
        }
        `,

        'Tratamento de Erros': `
        try {
            const resultado = await operacaoAssincrona();
            return resultado;
        } catch (erro) {
            console.error('Erro em operacaoAssincrona:', erro);
            mostrarNotificacao(erro.message, 'erro');
            throw erro;
        }
        `,

        'Comentários': [
            '// Comentário de linha única para lógica simples',
            '/* Comentário multi-linha para explicações complexas */',
            '/** JSDoc para funções públicas */',
            '// TODO: Melhorias futuras',
            '// FIXME: Bugs conhecidos'
        ]
    },

    // ============================================
    // 9. CONTATO E SUPORTE
    // ============================================
    suporte: {
        'Dúvidas sobre Arquitetura': 'Consulte DOCUMENTACAO_PROJETO.estrutura',
        'Dúvidas sobre Módulos': 'Consulte DOCUMENTACAO_PROJETO.modulos',
        'Problemas Comuns': 'Consulte GUIA_RAPIDO_RECUPERACAO',
        'Como Estender': 'Consulte DOCUMENTACAO_PROJETO.pontos_extensao',
        'Como Manter': 'Consulte DOCUMENTACAO_PROJETO.guia_manutencao',
        'Validação': 'Use checklist_validacao deste briefing'
    },

    // ============================================
    // 10. RESUMO EXECUTIVO
    // ============================================
    resumo: `
    CHAT IA PROFISSIONAL - RESUMO PARA DESENVOLVIMENTO
    
    O que é:
    Aplicação web responsiva para interação com múltiplos modelos de IA,
    com suporte a voz, memória contextual e exportação de dados.
    
    Tecnologias:
    HTML5, CSS3, JavaScript ES6+ (sem frameworks externos)
    
    Arquitetura:
    Modular com 10 módulos independentes, cada um com responsabilidade clara.
    Persistência em localStorage, sem backend necessário.
    
    Tamanho:
    ~1600 linhas HTML + ~3500 linhas JavaScript = ~5100 linhas total
    
    Tempo de Montagem Estimado:
    - Para IA experiente: 2-4 horas
    - Para IA nova: 4-6 horas (com testes)
    
    Testes Necessários:
    - 4 navegadores (Chrome, Firefox, Safari, Edge)
    - 3 resoluções (Desktop, Tablet, Mobile)
    - 2 orientações (Retrato, Paisagem)
    - 5 modelos de IA (Monica, OpenAI, Gemini, Local, Busca)
    
    Validação:
    Use checklist_validacao com 40+ itens
    
    Documentação:
    Completa em DOCUMENTACAO_PROJETO + GUIA_RAPIDO_RECUPERACAO
    
    Status:
    PRONTO PARA PRODUÇÃO
    `
};

// ============================================
// FUNÇÃO PARA GERAR BRIEFING FORMATADO
// ============================================

/**
 * Gera briefing formatado em Markdown para enviar a outra IA
 */
function gerarBriefingMarkdown() {
    const briefing = `
# 📋 BRIEFING TÉCNICO - CHAT IA PROFISSIONAL

## 1. IDENTIFICAÇÃO DO PROJETO
- **Nome**: ${BRIEFING_TECNICO.projeto.nome}
- **Versão**: ${BRIEFING_TECNICO.projeto.versao}
- **Objetivo**: ${BRIEFING_TECNICO.projeto.objetivo}
- **Status**: ${BRIEFING_TECNICO.projeto.status}

## 2. ORDEM DE MONTAGEM (SEQUENCIAL)

${BRIEFING_TECNICO.ordem_montagem.map(parte => `
### PARTE ${parte.numero}: ${parte.parte}
**Arquivo**: ${parte.arquivo}  
**Descrição**: ${parte.descricao}  
**Tamanho**: ${parte.tamanho_estimado}  
**Dependências**: ${parte.dependencias}  

**Conteúdo**:
${parte.conteudo.map(item => `- ${item}`).join('\n')}

**Teste**: ${parte.testa_com}
`).join('\n')}

## 3. ESPECIFICAÇÕES TÉCNICAS

### Responsividade
${Object.entries(BRIEFING_TECNICO.especificacoes.Responsividade).map(([chave, valor]) => 
    `- **${chave}**: ${Array.isArray(valor) ? valor.join(', ') : JSON.stringify(valor)}`
).join('\n')}

### Armazenamento
${Object.entries(BRIEFING_TECNICO.especificacoes.Armazenamento).map(([chave, valor]) => 
    `- **${chave}**: ${typeof valor === 'object' ? JSON.stringify(valor) : valor}`
).join('\n')}

## 4. MODELOS DE IA SUPORTADOS

${Object.entries(BRIEFING_TECNICO.modelos_ia).map(([nome, config]) => `
### ${nome}
- **Endpoint**: ${config.endpoint}
- **Método**: ${config.metodo}
- **Status**: ${config.status}
`).join('\n')}

## 5. CHECKLIST DE VALIDAÇÃO

${Object.entries(BRIEFING_TECNICO.checklist_validacao).map(([categoria, items]) => `
### ${categoria}
${items.map(item => `- ${item}`).join('\n')}
`).join('\n')}

## 6. INSTRUÇÕES PARA OUTRAS IAs

### Antes de Começar
${BRIEFING_TECNICO.instrucoes_para_ia['Antes de Começar'].map(item => `- ${item}`).join('\n')}

### Durante o Desenvolvimento
${BRIEFING_TECNICO.instrucoes_para_ia['Durante o Desenvolvimento'].map(item => `- ${item}`).join('\n')}

### Se Precisar Estender
${BRIEFING_TECNICO.instrucoes_para_ia['Se Precisar Estender'].map(item => `- ${item}`).join('\n')}

## 7. PADRÕES DE CÓDIGO

### Nomenclatura
${Object.entries(BRIEFING_TECNICO.padroes_codigo.Nomenclatura).map(([tipo, padrao]) => 
    `- **${tipo}**: ${padrao}`
).join('\n')}

## 8. RESUMO EXECUTIVO

${BRIEFING_TECNICO.resumo}

---

**Gerado em**: ${new Date().toLocaleString('pt-BR')}  
**Versão do Briefing**: 1.0  
**Para**: Outras IAs (Claude, GPT, Gemini, etc)
    `;

    return briefing;
}

/**
 * Exporta briefing completo em Markdown
 */
function exportarBriefing() {
    const briefing = gerarBriefingMarkdown();
    const blob = new Blob([briefing], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `briefing-chat-ia-${Date.now()}.md`;
    a.click();
    
    mostrarNotificacao('Briefing exportado!', 'sucesso');
}

/**
 * Copia briefing para clipboard
 */
function copiarBriefing() {
    const briefing = gerarBriefingMarkdown();
    navigator.clipboard.writeText(briefing).then(() => {
        mostrarNotificacao('Briefing copiado para clipboard!', 'sucesso');
    });
}

// ============================================
// INICIALIZAR BRIEFING
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Adicionar botão de briefing ao sidebar
    const footer = document.querySelector('.sidebar-footer');
    if (footer && !document.getElementById('btnBriefing')) {
        const btn = document.createElement('button');
        btn.id = 'btnBriefing';
        btn.className = 'btn-sidebar';
        btn.innerHTML = '📋 Brief';
        btn.title = 'Exportar briefing para outra IA';
        btn.onclick = exportarBriefing;
        footer.appendChild(btn);
    }
});

// Exportar para uso global
window.BRIEFING_TECNICO = BRIEFING_TECNICO;
window.gerarBriefingMarkdown = gerarBriefingMarkdown;
window.exportarBriefing = exportarBriefing;
window.copiarBriefing = copiarBriefing;

// Log no console
console.log(`
╔════════════════════════════════════════════════════════════════╗
║        SISTEMA DE BRIEFING PROFISSIONAL ATIVO                 ║
╚════════════════════════════════════════════════════════════════╝

📋 Comandos Disponíveis:
  - exportarBriefing() - Baixa briefing em Markdown
  - copiarBriefing() - Copia para clipboard
  - gerarBriefingMarkdown() - Gera texto formatado
  - BRIEFING_TECNICO - Objeto completo

🎯 Para enviar a outra IA:
  1. Clique em "📋 Brief" no sidebar
  2. Ou use: copiarBriefing()
  3. Cole o conteúdo na IA
  4. Peça para montar o projeto

✓ Briefing contém:
  - Ordem de montagem sequencial
  - Especificações técnicas completas
  - Checklist de validação
  - Padrões de código
  - Instruções detalhadas
`);


# INSTRUÇÕES PARA MONTAR O PROJETO

Você recebeu um BRIEFING TÉCNICO completo para montar o projeto "Chat IA Profissional".

## ⚠️ IMPORTANTE

1. **Leia TUDO** antes de começar
2. **Siga a ordem** de montagem (PARTE 1, PARTE 2, etc)
3. **Não omita** funcionalidades
4. **Valide** com o checklist fornecido
5. **Teste** em navegadores diferentes

## 📋 BRIEFING ANEXADO

[COLE AQUI O CONTEÚDO DO BRIEFING]

## 🎯 TAREFAS

- [ ] Ler briefing completo
- [ ] Montar PARTE 1 (HTML)
- [ ] Montar PARTE 0 (Documentação)
- [ ] Montar PARTE 0B (Guia Rápido)
- [ ] Montar PARTES 2-10 (JavaScript)
- [ ] Validar com checklist
- [ ] Testar em 4 navegadores
- [ ] Testar em 3 resoluções
- [ ] Testar 5 modelos de IA
- [ ] Entregar com documentação

## 📞 SE TIVER DÚVIDAS

Consulte no briefing:
- **Arquitetura**: DOCUMENTACAO_PROJETO.estrutura
- **Módulos**: DOCUMENTACAO_PROJETO.modulos
- **Problemas**: GUIA_RAPIDO_RECUPERACAO
- **Extensão**: DOCUMENTACAO_PROJETO.pontos_extensao

## ✓ VALIDAÇÃO FINAL

Todos os itens do checklist devem estar marcados:
- [ ] Funcionalidades Básicas (5/5)
- [ ] Modelos de IA (5/5)
- [ ] Voz (5/5)
- [ ] Memória (5/5)
- [ ] Configurações (5/5)
- [ ] Exportação (4/4)
- [ ] Responsividade (6/6)
- [ ] Playground (4/4)
- [ ] Atalhos (6/6)
- [ ] Documentação (4/4)

**Total: 49/49 itens**


## 

