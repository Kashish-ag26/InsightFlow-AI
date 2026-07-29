"use client";

import React from "react";
import { BarChart3, TrendingUp, Users, Globe } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto font-sans bg-white dark:bg-zinc-950 text-slate-900 dark:text-slate-100">
      <div className="border-b border-slate-200 dark:border-zinc-800 pb-4">
        <span className="text-[10px] font-bold text-[#a32d2d] uppercase tracking-widest font-sans">
          PLATFORM METRICS
        </span>
        <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-slate-100">
          Performance Analytics & Reach
        </h2>
        <p className="text-xs text-slate-500">
          Distribution performance across published articles, newsletters, and social channels
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="p-4 bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 space-y-1">
          <span className="text-[10px] font-bold text-[#a32d2d] uppercase tracking-wider font-sans">TOTAL IMPRESSIONS</span>
          <div className="font-serif text-2xl font-bold text-slate-900 dark:text-slate-100">184.2K</div>
          <span className="text-[11px] text-slate-500">+18% this month</span>
        </div>

        <div className="p-4 bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 space-y-1">
          <span className="text-[10px] font-bold text-[#a32d2d] uppercase tracking-wider font-sans">POSTS GENERATED</span>
          <div className="font-serif text-2xl font-bold text-slate-900 dark:text-slate-100">342</div>
          <span className="text-[11px] text-slate-500">Across LinkedIn & X</span>
        </div>

        <div className="p-4 bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 space-y-1">
          <span className="text-[10px] font-bold text-[#a32d2d] uppercase tracking-wider font-sans">RAG QUERIES</span>
          <div className="font-serif text-2xl font-bold text-slate-900 dark:text-slate-100">1,280</div>
          <span className="text-[11px] text-slate-500">Vector answers served</span>
        </div>

        <div className="p-4 bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 space-y-1">
          <span className="text-[10px] font-bold text-[#a32d2d] uppercase tracking-wider font-sans">AVG IMPORTANCE</span>
          <div className="font-serif text-2xl font-bold text-slate-900 dark:text-slate-100">92/100</div>
          <span className="text-[11px] text-slate-500">High precision index</span>
        </div>
      </div>
    </div>
  );
}
