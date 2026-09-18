// ============================================================================
// PARTE 2: Terminal Panel Logic
// ============================================================================

class TerminalManager {
    constructor(projectId) {
        this.projectId = projectId;
        this.entries = [];
        this.commandHistory = [];
        this.historyIndex = -1;
        this.isRunning = false;
        this.entryId = 0;
        this.abortController = null;
        this.copiedId = null;
        this.listening = false;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupVoiceRecognition();
        this.renderEmpty();
    }

    setupEventListeners() {
        const input = document.getElementById('terminalInput');
        const clearBtn = document.getElementById('clearBtn');
        const voiceBtn = document.getElementById('voiceBtn');

        input.addEventListener('keydown', (e) => this.handleKeyDown(e));
        clearBtn.addEventListener('click', () => this.clearTerminal());
        voiceBtn.addEventListener('click', () => this.toggleVoice());
    }

    setupVoiceRecognition() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            console.warn('Speech Recognition não suportado');
            document.getElementById('voiceBtn').style.display = 'none';
            return;
        }
        this.recognition = new SpeechRecognition();
        this.recognition.lang = 'pt-BR';
        this.recognition.continuous = false;
    }

    toggleVoice() {
        if (this.listening) {
            this.recognition.stop();
            this.listening = false;
            this.updateVoiceBtn();
            return;
        }

        this.listening = true;
        this.updateVoiceBtn();

        this.recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            const input = document.getElementById('terminalInput');
            input.value = (input.value ? input.value + ' ' : '') + transcript;
            input.focus();
        };

        this.recognition.onend = () => {
            this.listening = false;
            this.updateVoiceBtn();
        };

        this.recognition.onerror = () => {
            this.listening = false;
            this.updateVoiceBtn();
        };

        try {
            this.recognition.start();
        } catch (err) {
            console.error('Erro ao iniciar reconhecimento:', err);
            this.listening = false;
            this.updateVoiceBtn();
        }
    }

    updateVoiceBtn() {
        const btn = document.getElementById('voiceBtn');
        if (this.listening) {
            btn.classList.add('listening');
            btn.textContent = '🎙️';
        } else {
            btn.classList.remove('listening');
            btn.textContent = '🎤';
        }
    }

    handleKeyDown(e) {
        if (e.key === 'Enter') {
            const input = document.getElementById('terminalInput');
            this.executeCommand(input.value);
            input.value = '';
            this.historyIndex = -1;
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.historyIndex = Math.min(this.historyIndex + 1, this.commandHistory.length - 1);
            document.getElementById('terminalInput').value = 
                this.commandHistory[this.commandHistory.length - 1 - this.historyIndex] || '';
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.historyIndex = Math.max(this.historyIndex - 1, -1);
            document.getElementById('terminalInput').value = 
                this.historyIndex === -1 ? '' : 
                (this.commandHistory[this.commandHistory.length - 1 - this.historyIndex] || '');
        } else if (e.key === 'c' && e.ctrlKey) {
            if (this.isRunning && this.abortController) {
                this.abortController.abort();
                this.isRunning = false;
                this.updateStatus();
            }
        }
    }

    async executeCommand(command) {
        const trimmed = command.trim();
        if (!trimmed || this.isRunning) return;

        this.isRunning = true;
        this.updateStatus();

        const id = ++this.entryId;
        this.commandHistory.push(trimmed);

        const entry = {
            id,
            command: trimmed,
            chunks: [],
            running: true,
            exitCode: null,
            durationMs: 0,
            missingPackage: null
        };

        this.entries.push(entry);
        this.renderEntry(entry);

        this.abortController = new AbortController();

        try {
            const response = await fetch(`/api/projects/${this.projectId}/exec-stream`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ command: trimmed }),
                signal: this.abortController.signal
            });

            if (!response.ok || !response.body) {
                const errorText = await response.text().catch(() => 'Erro desconhecido');
                entry.running = false;
                entry.exitCode = 1;
                entry.chunks.push({ type: 'stderr', text: `Erro: ${errorText}` });
                this.updateEntry(entry);
                this.isRunning = false;
                this.updateStatus();
                return;
            }

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let buffer = '';

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                buffer += decoder.decode(value, { stream: true });
                const lines = buffer.split('\n');
                buffer = lines.pop() || '';

                for (const line of lines) {
                    if (!line.startsWith('data: ')) continue;

                    try {
                        const event = JSON.parse(line.slice(6));

                        if (event.type === 'stdout') {
                            entry.chunks.push({ type: 'stdout', text: event.data });
                        } else if (event.type === 'stderr') {
                            entry.chunks.push({ type: 'stderr', text: event.data });
                        } else if (event.type === 'server_detected') {
                            entry.chunks.push({ 
                                type: 'stdout', 
                                text: `\n🌐 Servidor detectado na porta ${event.port}\n` 
                            });
                            window.onServerDetected?.(event.port);
                        } else if (event.type === 'exit') {
                            entry.running = false;
                            entry.exitCode = event.exitCode || 1;
                            entry.durationMs = event.durationMs || 0;
                            entry.missingPackage = this.detectMissingPackage(
                                entry.chunks.map(c => c.text).join('')
                            );
                        }

                        this.updateEntry(entry);
                    } catch (e) {
                        // Ignorar erros de parsing
                    }
                }
            }
        } catch (err) {
            if (err.name !== 'AbortError') {
                entry.running = false;
                entry.exitCode = 1;
                entry.chunks.push({ type: 'stderr', text: `\nErro de conexão: ${err.message}` });
                this.updateEntry(entry);
            }
        } finally {
            this.isRunning = false;
            this.abortController = null;
            this.updateStatus();
            document.getElementById('terminalInput').focus();
        }
    }

    detectMissingPackage(text) {
        const patterns = [
            /(?:sh|bash|zsh):\s*\d*:?\s*([^\s:]+):\s*(?:not found|command not found)/,
            /Cannot find module ['"](@?[a-zA-Z0-9._/-]+)['"]/,
            /npm ERR! missing: ([a-zA-Z0-9@._/-]+)@/
        ];

        for (const pattern of patterns) {
            const match = text.match(pattern);
            if (match) {
                const pkg = match[1];
                if (!pkg.startsWith('.') && !pkg.startsWith('/')) {
                    return pkg.split('/').slice(0, pkg.startsWith('@') ? 2 : 1).join('/');
                }
            }
        }

        return null;
    }

    renderEntry(entry) {
        const output = document.getElementById('terminalOutput');
        
        if (this.entries.length === 1) {
            output.innerHTML = ''; // Limpar "vazio"
        }

        const entryDiv = document.createElement('div');
        entryDiv.className = 'terminal-entry';
        entryDiv.id = `entry-${entry.id}`;
        entryDiv.innerHTML = this.getEntryHTML(entry);

        output.appendChild(entryDiv);
        output.scrollTop = output.scrollHeight;
    }

    updateEntry(entry) {
        const entryDiv = document.getElementById(`entry-${entry.id}`);
        if (entryDiv) {
            entryDiv.innerHTML = this.getEntryHTML(entry);
        }
    }

    getEntryHTML(entry) {
        const allText = entry.chunks.map(c => c.text).join('');
        const statusBadge = entry.running 
            ? '<span class="terminal-badge running"><span class="spinner"></span>rodando</span>'
            : entry.exitCode === 0
            ? '<span class="terminal-badge success">OK</span>'
            : `<span class="terminal-badge error">exit ${entry.exitCode}</span>`;

        const duration = entry.durationMs > 0
            ? `<span class="terminal-duration">${this.formatDuration(entry.durationMs)}</span>`
            : '';

        const outputHTML = entry.chunks.map(chunk => {
            const className = chunk.type === 'stderr' 
                ? (chunk.text.includes('warn') ? 'warn' : 'stderr')
                : 'stdout';
            return `<div class="terminal-output-line ${className}">${this.escapeHtml(chunk.text)}</div>`;
        }).join('');

        const missingPackageHTML = entry.missingPackage
            ? `<div class="terminal-missing-package">
                <span class="terminal-missing-icon">📥</span>
                <span class="terminal-missing-text">
                    Pacote <strong>${entry.missingPackage}</strong> não encontrado
                </span>
                <button class="terminal-missing-btn" onclick="terminalManager.executeCommand('npm install ${entry.missingPackage}')">
                    instalar
                </button>
              </div>`
            : '';

        return `
            <div class="terminal-command-line">
                <span class="terminal-prompt">$</span>
                <span class="terminal-command-text" title="${entry.command}">${entry.command}</span>
                <button class="terminal-copy-btn" onclick="terminalManager.copyOutput('${entry.id}')">📋</button>
                ${statusBadge}
                ${duration}
            </div>
            ${outputHTML ? `<div class="terminal-output-content">${outputHTML}</div>` : ''}
            ${missingPackageHTML}
        `;
    }

    formatDuration(ms) {
        if (ms >= 60000) return `${Math.round(ms / 1000)}s`;
        if (ms >= 1000) return `${(ms / 1000).toFixed(1)}s`;
        return `${ms}ms`;
    }

    copyOutput(entryId) {
        const entry = this.entries.find(e => e.id == entryId);
        if (!entry) return;

        const text = entry.chunks.map(c => c.text).join('');
        navigator.clipboard.writeText(text).then(() => {
            this.copiedId = entryId;
            setTimeout(() => { this.copiedId = null; }, 1500);
        });
    }

    clearTerminal() {
        this.entries = [];
        this.renderEmpty();
    }

    renderEmpty() {
        const output = document.getElementById('terminalOutput');
        output.innerHTML = `
            <div class="terminal-empty">
                <p>Terminal pronto. Digite ou fale um comando abaixo.</p>
                <p style="font-size: 10px; opacity: 0.6;">↑ ↓ para histórico · Ctrl+C para cancelar</p>
            </div>
        `;
    }

    updateStatus() {
        const status = document.getElementById('terminalStatus');
        status.style.display = this.isRunning ? 'flex' : 'none';
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Inicializar
const projectId = new URLSearchParams(window.location.search).get('id') || 'default';
const terminalManager = new TerminalManager(projectId);

console.log('✓ Terminal Manager inicializado');
