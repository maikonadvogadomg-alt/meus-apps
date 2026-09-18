<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SK-Chat com Memória — HTML Puro</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background: #0d1117;
      color: #e0e0e0;
      height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .container {
      display: flex;
      height: 100vh;
      gap: 0;
    }

    /* ═══ PAINEL ESQUERDO: MEMÓRIA ═══ */
    .memory-panel {
      width: 280px;
      background: #161b22;
      border-right: 1px solid #30363d;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .memory-header {
      padding: 12px;
      background: #0d1117;
      border-bottom: 1px solid #30363d;
      font-size: 12px;
      font-weight: 600;
      color: #8b949e;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .memory-content {
      flex: 1;
      overflow-y: auto;
      padding: 8px;
    }

    .memory-entry {
      padding: 8px;
      margin: 4px 0;
      background: #0d1117;
      border-left: 3px solid #3b82f6;
      border-radius: 4px;
      font-size: 11px;
      cursor: pointer;
      transition: all 0.2s;
      max-height: 60px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .memory-entry:hover {
      background: #1c2128;
      border-left-color: #58a6ff;
    }

    .memory-entry.usuario {
      border-left-color: #3b82f6;
    }

    .memory-entry.projeto {
      border-left-color: #10b981;
    }

    .memory-entry.preferencia {
      border-left-color: #f59e0b;
    }

    .memory-entry.geral {
      border-left-color: #8b949e;
    }

    .memory-entry-label {
      font-size: 9px;
      color: #6e7681;
      margin-bottom: 2px;
      text-transform: uppercase;
    }

    .memory-entry-text {
      color: #c9d1d9;
      line-height: 1.4;
    }

    .memory-controls {
      padding: 12px;
      border-top: 1px solid #30363d;
      display: flex;
      gap: 4px;
      flex-wrap: wrap;
    }

    .memory-btn {
      flex: 1;
      min-width: 60px;
      padding: 6px;
      background: #238636;
      border: none;
      color: white;
      border-radius: 4px;
      font-size: 10px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .memory-btn:hover {
      background: #2ea043;
    }

    .memory-btn.danger {
      background: #da3633;
    }

    .memory-btn.danger:hover {
      background: #f85149;
    }

    /* ═══ PAINEL DIREITO: CHAT ═══ */
    .chat-panel {
      flex: 1;
      display: flex;
      flex-direction: column;
      background: #0d1117;
    }

    /* Header do Chat */
    .chat-header {
      padding: 12px;
      background: #161b22;
      border-bottom: 1px solid #30363d;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }

    .chat-title {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      font-weight: 600;
    }

    .token-info {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 11px;
      color: #8b949e;
    }

    .token-bar {
      width: 120px;
      height: 6px;
      background: #30363d;
      border-radius: 3px;
      overflow: hidden;
    }

    .token-fill {
      height: 100%;
      background: linear-gradient(90deg, #3b82f6, #10b981);
      transition: width 0.3s;
    }

    .token-fill.warning {
      background: linear-gradient(90deg, #f59e0b, #f97316);
    }

    .token-fill.danger {
      background: linear-gradient(90deg, #ef4444, #dc2626);
    }

    /* Mensagens */
    .messages {
      flex: 1;
      overflow-y: auto;
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .message {
      display: flex;
      gap: 8px;
      animation: slideIn 0.3s ease-out;
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .message.user {
      justify-content: flex-end;
    }

    .message-content {
      max-width: 70%;
      padding: 10px 12px;
      border-radius: 8px;
      font-size: 13px;
      line-height: 1.5;
      word-wrap: break-word;
    }

    .message.assistant .message-content {
      background: #161b22;
      border: 1px solid #30363d;
      color: #c9d1d9;
    }

    .message.user .message-content {
      background: #3b82f6;
      color: white;
    }

    .message-meta {
      font-size: 10px;
      color: #6e7681;
      margin-top: 4px;
      text-align: right;
    }

    .message.assistant .message-meta {
      text-align: left;
    }

    /* Input */
    .chat-input-area {
      padding: 12px;
      background: #161b22;
      border-top: 1px solid #30363d;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .token-slider {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 11px;
    }

    .token-slider input {
      flex: 1;
      height: 4px;
      cursor: pointer;
    }

    .token-slider span {
      min-width: 50px;
      color: #8b949e;
    }

    .input-row {
      display: flex;
      gap: 8px;
    }

    .chat-input {
      flex: 1;
      padding: 10px 12px;
      background: #0d1117;
      border: 1px solid #30363d;
      border-radius: 6px;
      color: #c9d1d9;
      font-size: 13px;
      font-family: inherit;
      resize: none;
      max-height: 100px;
    }

    .chat-input:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    .chat-input::placeholder {
      color: #6e7681;
    }

    .send-btn {
      width: 40px;
      height: 40px;
      padding: 0;
      background: #3b82f6;
      border: none;
      border-radius: 6px;
      color: white;
      cursor: pointer;
      font-size: 16px;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .send-btn:hover {
      background: #2563eb;
    }

    .send-btn:disabled {
      background: #6e7681;
      cursor: not-allowed;
    }

    /* Scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: #30363d;
      border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #484f58;
    }

    /* Responsivo */
    @media (max-width: 768px) {
      .memory-panel {
        display: none;
      }

      .message-content {
        max-width: 85%;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- PAINEL DE MEMÓRIA -->
    <div class="memory-panel">
      <div class="memory-header">🧠 Memória</div>
      <div class="memory-content" id="memoryContent"></div>
      <div class="memory-controls">
        <button class="memory-btn" onclick="clearMemory()">Limpar</button>
        <button class="memory-btn danger" onclick="deleteAllMemory()">Deletar</button>
      </div>
    </div>

    <!-- PAINEL DE CHAT -->
    <div class="chat-panel">
      <!-- Header -->
      <div class="chat-header">
        <div class="chat-title">
          <span>🤖</span>
          <span>SK-Chat com Memória</span>
        </div>
        <div class="token-info">
          <span>Tokens:</span>
          <div class="token-bar">
            <div class="token-fill" id="tokenFill" style="width: 0%"></div>
          </div>
          <span id="tokenCount">0 / 4000</span>
        </div>
      </div>

      <!-- Mensagens -->
      <div class="messages" id="messagesContainer"></div>

      <!-- Input -->
      <div class="chat-input-area">
        <div class="token-slider">
          <label>Max tokens:</label>
          <input type="range" id="maxTokens" min="500" max="8000" value="4000" step="100" />
          <span id="maxTokensDisplay">4000</span>
        </div>

        <div class="input-row">
          <textarea
            id="messageInput"
            class="chat-input"
            placeholder="Digite sua mensagem... (Shift+Enter para nova linha)"
            rows="3"
          ></textarea>
          <button class="send-btn" id="sendBtn" onclick="sendMessage()">📤</button>
        </div>
      </div>
    </div>
  </div>

  <script>
    // ═══════════════════════════════════════════════════════════════
    // CONFIGURAÇÃO
    // ═══════════════════════════════════════════════════════════════

    const STORAGE_KEY_MEMORY = "sk-chat-memory";
    const STORAGE_KEY_HISTORY = "sk-chat-history";
    const MAX_MEMORY_ENTRIES = 50;
    const TOKENS_PER_CHAR = 0.25; // Aproximação

    let memory = [];
    let chatHistory = [];
    let maxTokens = 4000;

    // ═══════════════════════════════════════════════════════════════
    // MEMÓRIA
    // ═══════════════════════════════════════════════════════════════

    function loadMemory() {
      try {
        const saved = localStorage.getItem(STORAGE_KEY_MEMORY);
        memory = saved ? JSON.parse(saved) : [];
      } catch {
        memory = [];
      }
      renderMemory();
    }

    function saveMemory() {
      localStorage.setItem(STORAGE_KEY_MEMORY, JSON.stringify(memory));
    }

    function addToMemory(content, category = "geral") {
      memory.push({
        id: Date.now(),
        content,
        category,
        timestamp: new Date().toLocaleString("pt-BR"),
      });

      if (memory.length > MAX_MEMORY_ENTRIES) {
        memory = memory.slice(-MAX_MEMORY_ENTRIES);
      }

      saveMemory();
      renderMemory();
    }

    function renderMemory() {
      const container = document.getElementById("memoryContent");
      container.innerHTML = memory
        .map(
          (entry) => `
        <div class="memory-entry ${entry.category}" title="${entry.content}">
          <div class="memory-entry-label">${entry.category}</div>
          <div class="memory-entry-text">${entry.content.slice(0, 80)}${entry.content.length > 80 ? "..." : ""}</div>
        </div>
      `
        )
        .join("");
    }

    function clearMemory() {
      if (confirm("Limpar toda a memória?")) {
        memory = [];
        saveMemory();
        renderMemory();
      }
    }

    function deleteAllMemory() {
      if (confirm("DELETAR TUDO? Isso não pode ser desfeito!")) {
        memory = [];
        chatHistory = [];
        localStorage.removeItem(STORAGE_KEY_MEMORY);
        localStorage.removeItem(STORAGE_KEY_HISTORY);
        renderMemory();
        renderMessages();
      }
    }

    // ═══════════════════════════════════════════════════════════════
    // CHAT
    // ═══════════════════════════════════════════════════════════════

    function loadChatHistory() {
      try {
        const saved = localStorage.getItem(STORAGE_KEY_HISTORY);
        chatHistory = saved ? JSON.parse(saved) : [];
      } catch {
        chatHistory = [];
      }
      renderMessages();
    }

    function saveChatHistory() {
      localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(chatHistory));
    }

    function calculateTokens(text) {
      return Math.ceil(text.length * TOKENS_PER_CHAR);
    }

    function getTotalTokens() {
      return chatHistory.reduce((sum, msg) => sum + calculateTokens(msg.content), 0);
    }

    function updateTokenDisplay() {
      const total = getTotalTokens();
      const percentage = Math.min((total / maxTokens) * 100, 100);
      const fill = document.getElementById("tokenFill");
      const count = document.getElementById("tokenCount");

      fill.style.width = percentage + "%";

      if (percentage > 90) {
        fill.classList.add("danger");
        fill.classList.remove("warning");
      } else if (percentage > 70) {
        fill.classList.add("warning");
        fill.classList.remove("danger");
      } else {
        fill.classList.remove("warning", "danger");
      }

      count.textContent = `${total} / ${maxTokens}`;
    }

    function renderMessages() {
      const container = document.getElementById("messagesContainer");
      container.innerHTML = chatHistory
        .map(
          (msg) => `
        <div class="message ${msg.role}">
          <div>
            <div class="message-content">${escapeHtml(msg.content)}</div>
            <div class="message-meta">${msg.timestamp} • ${calculateTokens(msg.content)} tokens</div>
          </div>
        </div>
      `
        )
        .join("");
      container.scrollTop = container.scrollHeight;
      updateTokenDisplay();
    }

    function escapeHtml(text) {
      const div = document.createElement("div");
      div.textContent = text;
      return div.innerHTML;
    }

    function sendMessage() {
      const input = document.getElementById("messageInput");
      const text = input.value.trim();

      if (!text) return;

      // Adiciona mensagem do usuário
      chatHistory.push({
        role: "user",
        content: text,
        timestamp: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
      });

      // Adiciona à memória
      addToMemory(text, "usuario");

      // Limpa input
      input.value = "";
      input.style.height = "auto";

      saveChatHistory();
      renderMessages();

      // Simula resposta da IA (você vai integrar com API real)
      simulateAIResponse(text);
    }

    function simulateAIResponse(userMessage) {
      setTimeout(() => {
        const response = `Você disse: "${userMessage}"\n\nEssa é uma resposta simulada. Integre com sua API de IA aqui.\n\nMemória atual: ${memory.length} entradas\nTokens usados: ${getTotalTokens()} / ${maxTokens}`;

        chatHistory.push({
          role: "assistant",
          content: response,
          timestamp: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
        });

        addToMemory(response, "geral");
        saveChatHistory();
        renderMessages();
      }, 500);
    }

async function simulateAIResponse(userMessage) {
 
 // Integração com sua IA
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${YOUR_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: chatHistory.map(m => ({ role: m.role, content: m.content })),
      max_tokens: maxTokens,
    }),
  });

  const data = await response.json();
  const aiResponse = data.choices[0].message.content;

  chatHistory.push({
    role: "assistant",
    content: aiResponse,
    timestamp: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
  });

  addToMemory(aiResponse, "geral");
  saveChatHistory();
  renderMessages();
}

    // ═══════════════════════════════════════════════════════════════
    // EVENTOS
    // ═══════════════════════════════════════════════════════════════

    document.getElementById("messageInput").addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });

    document.getElementById("messageInput").addEventListener("input", (e) => {
      e.target.style.height = "auto";
      e.target.style.height = Math.min(e.target.scrollHeight, 100) + "px";
    });

    document.getElementById("maxTokens").addEventListener("input", (e) => {
      maxTokens = parseInt(e.target.value);
      document.getElementById("maxTokensDisplay").textContent = maxTokens;
      updateTokenDisplay();
    });

    // ═══════════════════════════════════════════════════════════════
    // INICIALIZAÇÃO
    // ═══════════════════════════════════════════════════════════════

    window.addEventListener("DOMContentLoaded", () => {
      loadMemory();
      loadChatHistory();
      updateTokenDisplay();
    });
  </script>
</body>
</html>
