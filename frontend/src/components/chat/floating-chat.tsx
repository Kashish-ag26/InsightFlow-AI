"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
}

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "ai",
      text: "Greetings. I am your InsightFlow RAG Assistant. Ask me anything about historical news archives, tech papers, or market indicators.",
      timestamp: "Just now",
    },
  ]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: input,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: `Based on indexed knowledge vectors: Recent dispatches highlight Claude 3.7 Sonnet release, Indian market highs, and global defense cyber radar deployments.`,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="flex flex-col w-[360px] sm:w-[400px] h-[480px] rounded-xl bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-2xl overflow-hidden mb-4 text-slate-900 dark:text-slate-100"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-50 dark:bg-zinc-900 border-b border-slate-200 dark:border-zinc-800">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 flex items-center justify-center font-bold text-xs">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold font-serif uppercase tracking-wider text-slate-900 dark:text-slate-100">
                    InsightFlow RAG Desk
                  </h4>
                  <span className="text-[9px] text-[#a32d2d] font-mono uppercase font-bold">Vector DB Active</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white dark:bg-zinc-950">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex gap-2 ${m.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {m.sender === "ai" && (
                    <div className="w-5 h-5 rounded bg-slate-100 dark:bg-zinc-800 flex items-center justify-center shrink-0 mt-0.5 text-slate-700 dark:text-slate-300">
                      <Sparkles className="w-3 h-3 text-[#a32d2d]" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-3 rounded text-xs font-sans leading-relaxed ${
                      m.sender === "user"
                        ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 font-medium"
                        : "bg-slate-50 dark:bg-zinc-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-zinc-800"
                    }`}
                  >
                    <p>{m.text}</p>
                    <span className="text-[9px] opacity-60 font-mono mt-1 block text-right">{m.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-3 bg-slate-50 dark:bg-zinc-900 border-t border-slate-200 dark:border-zinc-800 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask RAG assistant anything..."
                className="flex-1 h-8 px-3 text-xs bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-slate-400"
              />
              <Button size="sm" variant="default" onClick={handleSend} className="h-8 w-8 p-0">
                <Send className="w-3.5 h-3.5" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-xl flex items-center justify-center hover:scale-105 transition-transform"
        title="Open RAG Desk Assistant"
      >
        <MessageSquare className="w-5 h-5" />
      </button>
    </div>
  );
}
