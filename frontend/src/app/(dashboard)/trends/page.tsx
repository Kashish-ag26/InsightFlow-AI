"use client";

import React from "react";
import { TrendingUp, Flame, ArrowUpRight } from "lucide-react";

const trends = [
  { topic: "Indian MSP & Electoral Reforms", articles: "1,240 articles", growth: "+42% this week", category: "POLITICS" },
  { topic: "Reasoning AI Models (Claude 3.7)", articles: "890 articles", growth: "+38% this week", category: "TECH & AI" },
  { topic: "Nifty IT & Banking Rally", articles: "640 articles", growth: "+29% this week", category: "STOCKS & FINANCE" },
  { topic: "Autonomous Cyber Drone Shield", articles: "420 articles", growth: "+18% this week", category: "WAR & DEFENSE" },
];

export default function TrendsPage() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto font-sans bg-white dark:bg-zinc-950 text-slate-900 dark:text-slate-100">
      <div className="border-b border-slate-200 dark:border-zinc-800 pb-4">
        <span className="text-[10px] font-bold text-[#a32d2d] uppercase tracking-widest font-sans">
          MARKET SIGNALS
        </span>
        <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-slate-100">
          Trending Topics & Velocity Analysis
        </h2>
        <p className="text-xs text-slate-500">
          Real-time topic momentum calculated across multi-domain RSS harvesters
        </p>
      </div>

      <div className="space-y-3">
        {trends.map((t, i) => (
          <div key={i} className="p-4 bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-[#a32d2d] uppercase tracking-wider font-sans">
                #{i + 1} {t.category}
              </span>
              <h3 className="font-serif text-base font-bold text-slate-900 dark:text-slate-100">{t.topic}</h3>
              <div className="flex gap-4 text-xs text-slate-500 font-mono">
                <span>{t.articles}</span>
                <span className="text-emerald-600 font-bold">{t.growth}</span>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-slate-400" />
          </div>
        ))}
      </div>
    </div>
  );
}
