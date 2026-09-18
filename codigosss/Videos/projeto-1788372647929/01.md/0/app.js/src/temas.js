class GerenciadorTemas {
    constructor() {
        this.temas = {
            dark: {
                '--primary': '#2563eb',
                '--secondary': '#1e40af',
                '--accent': '#f59e0b',
                '--bg-dark': '#0f172a',
                '--bg-light': '#1e293b',
                '--text-primary': '#f1f5f9',
                '--text-secondary': '#cbd5e1',
                '--border': '#334155',
                '--success': '#10b981',
                '--warning': '#ef4444'
            },
            light: {
                '--primary': '#3b82f6',
                '--secondary': '#1d4ed8',
                '--accent': '#f59e0b',
                '--bg-dark': '#f8fafc',
                '--bg-light': '#f1f5f9',
                '--text-primary': '#1e293b',
                '--text-secondary': '#64748b',
                '--border': '#e2e8f0',
                '--success': '#10b981',
                '--warning': '#ef4444'
            },
            neon: {
                '--primary': '#00ff88',
                '--secondary': '#00cc66',
                '--accent': '#ff00ff',
                '--bg-dark': '#0a0e27',
                '--bg-light': '#1a1f3a',
                '--text-primary': '#00ff88',
                '--text-secondary': '#00cc66',
                '--border': '#00ff88',
                '--success': '#00ff88',
                '--warning': '#ff0055'
            }
        };

        this.temaSelecionado = localStorage.getItem('temaSelecionado') || 'dark';
        this.aplicarTema(this.temaSelecionado);
    }

    aplicarTema(nome) {
        const tema = this.temas[nome];
        if (!tema) return;

        Object.entries(tema).forEach(([chave, valor]) => {
            document.documentElement.style.setProperty(chave, valor);
        });

        localStorage.setItem('temaSelecionado', nome);
        this.temaSelecionado = nome;
    }

    obterTemas() {
        return Object.keys(this.temas);
    }
}

const gerenciadorTemas = new GerenciadorTemas();

// Adicionar seletor de temas ao modal de configurações
function adicionarSeletorTemas() {
    const tabPerfil = document.getElementById('tab-perfil');
    
    if (!document.getElementById('seletorTemas')) {
        const div = document.createElement('div');
        div.id = 'seletorTemas';
        div.className = 'form-group';
        div.innerHTML = `
            <label>Tema</label>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                ${gerenciadorTemas.obterTemas().map(tema => `
                    <button 
                        class="btn-control ${gerenciadorTemas.temaSelecionado === tema ? 'ativo' : ''}"
                        onclick="gerenciadorTemas.aplicarTema('${tema}')"
                        style="flex: 1; min-width: 80px;"
                    >
                        ${tema.charAt(0).toUpperCase() + tema.slice(1)}
                    </button>
                `).join('')}
            </div>
        `;
        tabPerfil.insertBefore(div, tabPerfil.firstChild);
    }
}

document.addEventListener('DOMContentLoaded', adicionarSeletorTemas);