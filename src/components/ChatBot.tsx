"use client";

import { useState } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";

interface Message {
  role: "user" | "bot";
  content: string;
}

const defaultMessages: Message[] = [
  {
    role: "bot",
    content: "Hi! I'm ChronoBot, your AI shopping assistant. How can I help you find the perfect smartwatch today?",
  },
];

const quickReplies = [
  "Best watch for fitness?",
  "Compare luxury watches",
  "Shipping & returns",
  "What's on sale?",
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(defaultMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const botMsg: Message = {
        role: "bot",
        content:
          "Thanks for your question! Our AI-powered recommendation engine is analyzing your preferences. In a full implementation, I would connect to our AI backend to provide personalized watch recommendations based on your needs and browsing history.",
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent-blue text-white shadow-lg hover:bg-accent-blue-hover transition-all animate-pulse-glow"
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 rounded-2xl bg-white shadow-2xl border border-card-border overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between bg-primary-dark px-4 py-3">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-accent-blue" />
              <span className="font-heading text-sm font-semibold text-white">ChronoBot</span>
              <span className="h-2 w-2 rounded-full bg-accent-green" />
            </div>
            <button onClick={() => setIsOpen(false)} className="text-secondary-light hover:text-white">
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="h-72 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-xl px-3 py-2 text-sm ${
                    msg.role === "user"
                      ? "bg-accent-blue text-white"
                      : "bg-gray-100 text-primary-dark"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          <div className="px-4 pb-2 flex flex-wrap gap-1">
            {quickReplies.map((reply) => (
              <button
                key={reply}
                onClick={() => {
                  setInput(reply);
                }}
                className="rounded-full border border-accent-blue px-2.5 py-1 text-xs text-accent-blue hover:bg-accent-blue hover:text-white transition-colors"
              >
                {reply}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-card-border p-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a message..."
                className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-accent-blue"
              />
              <button
                onClick={handleSend}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-blue text-white hover:bg-accent-blue-hover transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
