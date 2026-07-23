"use client";

import { useState, useRef, useEffect } from "react";

type Role = "user" | "assistant";

interface Message {
  role: Role;
  content: string;
}

const WELCOME: Message = {
  role: "assistant",
  content: "Hey! 👋 I'm Maven's AI assistant. Ask me anything about his skills, projects, or background!",
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, thinking]);

  // Focus input when chat opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || thinking) return;

    const userMessage: Message = { role: "user", content: text };
    const updated = [...messages, userMessage];
    setMessages(updated);
    setInput("");
    setThinking(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // Send all messages except the initial welcome
          messages: updated.slice(1),
        }),
      });

      const data: { reply?: string; error?: string } = await res.json();
      const reply = data.reply ?? "Sorry, something went wrong. Please try again!";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Network error. Please check your connection and try again." },
      ]);
    } finally {
      setThinking(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Chat with Maven's AI assistant"
          className="chatbot-panel"
          style={{
            position: "fixed",
            bottom: 96,
            right: 24,
            width: 360,
            maxHeight: 520,
            display: "flex",
            flexDirection: "column",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 20,
            overflow: "hidden",
            boxShadow: "0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(124,58,237,0.15)",
            zIndex: 9999,
            animation: "fadeInUp 0.25s ease",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "16px 20px",
              background: "linear-gradient(135deg, var(--accent), var(--gradient-end))",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.1rem",
                }}
              >
                🤖
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "white" }}>
                  Maven&apos;s AI
                </div>
                <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.8)" }}>
                  Ask me anything!
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "none",
                borderRadius: "50%",
                width: 32,
                height: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "white",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.25)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.15)")
              }
            >
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px 16px 8px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              minHeight: 0,
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    maxWidth: "82%",
                    padding: "10px 14px",
                    borderRadius:
                      msg.role === "user"
                        ? "18px 18px 4px 18px"
                        : "18px 18px 18px 4px",
                    background:
                      msg.role === "user"
                        ? "linear-gradient(135deg, var(--accent), var(--gradient-end))"
                        : "var(--surface-2)",
                    border: msg.role === "assistant" ? "1px solid var(--border)" : "none",
                    color: "var(--foreground)",
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    wordBreak: "break-word",
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Thinking indicator */}
            {thinking && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div
                  style={{
                    padding: "10px 16px",
                    borderRadius: "18px 18px 18px 4px",
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    gap: 4,
                    alignItems: "center",
                  }}
                >
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "var(--accent-light)",
                        display: "inline-block",
                        animation: "blink 1.2s ease-in-out infinite",
                        animationDelay: `${d * 0.2}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input area */}
          <div
            style={{
              padding: "12px 16px",
              borderTop: "1px solid var(--border)",
              display: "flex",
              gap: 8,
              background: "var(--surface)",
              flexShrink: 0,
            }}
          >
            <input
              ref={inputRef}
              id="chatbot-input"
              type="text"
              placeholder="Ask me about Maven..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={thinking}
              style={{
                flex: 1,
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                borderRadius: 10,
                padding: "10px 14px",
                color: "var(--foreground)",
                fontSize: "0.875rem",
                outline: "none",
                transition: "border-color 0.2s",
                fontFamily: "inherit",
              }}
              onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "var(--accent-light)")}
              onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "var(--border)")}
            />
            <button
              onClick={sendMessage}
              disabled={thinking || !input.trim()}
              aria-label="Send message"
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background:
                  thinking || !input.trim()
                    ? "rgba(124,58,237,0.3)"
                    : "linear-gradient(135deg, var(--accent), var(--gradient-end))",
                border: "none",
                cursor: thinking || !input.trim() ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                flexShrink: 0,
                transition: "all 0.2s",
              }}
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        id="chatbot-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat with Maven's AI"}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "linear-gradient(135deg, var(--accent), var(--gradient-end))",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 24px rgba(124,58,237,0.5)",
          zIndex: 9999,
          transition: "transform 0.2s, box-shadow 0.2s",
          color: "white",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.1)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 12px 32px rgba(124,58,237,0.7)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 24px rgba(124,58,237,0.5)";
        }}
      >
        {open ? (
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>
    </>
  );
}
