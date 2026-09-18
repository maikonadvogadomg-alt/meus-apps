// ============================================
// PARTE 10: FINALIZAÇÕES E INICIALIZAÇÃO
// ============================================

// Sistema de notificações melhorado
class SistemaNotificacoes {
    static criar(mensagem, tipo = 'info', duracao = 3000) {
        const container = document.getElementById('containerNotificacoes') || this.criarContainer();
        
        const notif = document.createElement('div');
        const cores = {
            'sucesso': '#10b981',
            'erro': '#ef4444',
            'aviso': '#f59e0b',
            'info': '#2563eb'
        };

        notif.style.cssText = `
            padding: 15px 20px;
            background: ${cores[tipo] || cores['info']};
            color: white;
            border-radius: 8px;
            margin-bottom: 10px;
            animation: slideInRight 0.3s ease;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            font-size: 14px;
            font-weight: 500;
        `;

        notif.innerText = mensagem;
        container.appendChild(notif);

        if (duracao > 0) {
            setTimeout(() => {
                notif.style.animation = 'slideOutRight 0.3s ease';
                setTimeout(() => notif.remove(), 300);
            }, duracao);
        }

        return notif;
    }

    static criarContainer() {
        const container = document.createElement('div');
        container.id = 'containerNotificacoes';
        container.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            max-width: 400px;
        `;

        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInRight {
                from {
                    opacity: 0;
                    transform: translateX(400px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }

            @keyframes slideOutRight {
                from {
                    opacity: 1;
                    transform: translateX(0);
                }
                to {
                    opacity: 0;
                    transform: translateX(400px);
                }
            }
        `;

        document.head.appendChild(style);
        document.body.appendChild(container);
        return container;
    }
}

// Substituir função anterior
function mostrarNotificacao(mensagem, tipo = 'info') {
    SistemaNotificacoes.criar(mensagem, tipo);
}

// Sistema de atalhos de teclado
class GerenciadorAtalhos {
    static inicializar() {
        document.addEventListener('keydown', (e) => {
            // Ctrl+N: Novo chat
            if (e.ctrlKey && e.key === 'n') {
                e.preventDefault();
                novoChat();
            }

            // Ctrl+S: Salvar/Backup
            if (e.ctrlKey && e.key === 's') {
                e.preventDefault();
                fazerBackup();
            }

            // Ctrl+K: Abrir configurações
            if (e.ctrlKey && e.key === 'k') {
                e.preventDefault();
                abrirConfiguracoes();
            }

            // Ctrl+M: Abrir memória
            if (e.ctrlKey && e.key === 'm') {
                e.preventDefault();
                abrirMemoria();
            }

            // Ctrl+L: Limpar chat
            if (e.ctrlKey && e.key === 'l') {
                e.preventDefault();
                if (confirm('Limpar chat atual?')) {
                    document.getElementById('mensagens').innerHTML = '';
                    conversaAtual = [];
                }
            }
        });
    }
}

// Monitoramento de performance
class MonitorPerformance {
    static inicializar() {
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    console.log(`[Performance] ${entry.name}: ${entry.duration.toFixed(2)}ms`);
                }
            });

            observer.observe({ entryTypes: ['measure', 'navigation'] });
        }
    }

    static medir(nome, funcao) {
        performance.mark(`${nome}-inicio`);
        const resultado = funcao();
        performance.mark(`${nome}-fim`);
        performance.measure(nome, `${nome}-inicio`, `${nome}-fim`);
        return resultado;
    }
}

// Sincronização entre abas
class SincronizacaoAbas {
    static inicializar() {
        window.addEventListener('storage', (e) => {
            if (e.key === 'iaConfig' || e.key === 'iaChats' || e.key === 'iaMemoria') {
                console.log('Mudanças detectadas em outra aba, atualizando...');
                configManager.config = configManager.carregarConfig();
                configManager.memoria = configManager.carregarMemoria();
                configManager.chats = configManager.carregarChats();
                atualizarHistorico();
            }
        });
    }
}

// Inicialização completa
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Iniciando Chat IA Profissional...');

    // Inicializar todos os sistemas
    GerenciadorAtalhos.inicializar();
    MonitorPerformance.inicializar();
    SincronizacaoAbas.inicializar();
    ajustarLayout();

    // Carregar dados
    atualizarHistorico();
    carregarConfigsUI();

    // Criar primeiro chat se não existir
    if (configManager.chats.length === 0) {
        novoChat();
    } else {
        const ultimoChat = configManager.chats[configManager.chats.length - 1];
        carregarChat(ultimoChat.id);
    }

    console.log('✓ Chat IA pronto para uso!');
    mostrarNotificacao('Chat IA iniciado com sucesso!', 'sucesso');
});

// Salvar dados antes de sair
window.addEventListener('beforeunload', () => {
    configManager.salvarConfig();
    configManager.salvarChats();
    configManager.salvarMemoria();
});

// Tratamento de erros global
window.addEventListener('error', (e) => {
    console.error('Erro não tratado:', e.error);
    mostrarNotificacao('Erro: ' + e.error.message, 'erro');
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Promise rejeitada:', e.reason);
    mostrarNotificacao('Erro: ' + e.reason, 'erro');
});
