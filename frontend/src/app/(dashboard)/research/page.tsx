"use client";

import React from "react";
import { Sparkles, BookOpen, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResearchPage() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto font-sans bg-white dark:bg-zinc-950 text-slate-900 dark:text-slate-100">
      <div className="border-b border-slate-200 dark:border-zinc-800 pb-4">
        <span className="text-[10px] font-bold text-[#a32d2d] uppercase tracking-widest font-sans">
          RESEARCH ENGINE
        </span>
        <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-slate-100">
          Deep Research Laboratory
        </h2>
        <p className="text-xs text-slate-500">
          Autonomous Gemini research agent synthesis, technical breakdown & multi-source fact verification
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 space-y-2">
          <span className="text-[10px] font-bold text-[#a32d2d] uppercase tracking-wider font-sans">SYNTHESIS AGENT</span>
          <h3 className="font-serif text-base font-bold text-slate-900 dark:text-slate-100">Gemini 1.5 Pro</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">Context window enabled up to 1M tokens for multi-article synthesis.</p>
        </div>

        <div className="p-4 bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 space-y-2">
          <span className="text-[10px] font-bold text-[#a32d2d] uppercase tracking-wider font-sans">FACT CHECK ENGINE</span>
          <h3 className="font-serif text-base font-bold text-slate-900 dark:text-slate-100">Consensus Scoring</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">Cross-verifies claims across 3+ independent journalism feeds.</p>
        </div>

        <div className="p-4 bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 space-y-2">
          <span className="text-[10px] font-bold text-[#a32d2d] uppercase tracking-wider font-sans">WEB CRAWLER</span>
          <h3 className="font-serif text-base font-bold text-slate-900 dark:text-slate-100">Live Search Harvester</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">Pulls real-time web citations for breaking news events.</p>
        </div>
      </div>
    </div>
  );
}
