"use client";

import React from "react";
import { ShieldCheck, Cpu, Database, Server, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminPage() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto font-sans bg-white dark:bg-zinc-950 text-slate-900 dark:text-slate-100">
      <div className="border-b border-slate-200 dark:border-zinc-800 pb-4">
        <span className="text-[10px] font-bold text-[#a32d2d] uppercase tracking-widest font-sans">
          SYSTEM HEALTH & ADMIN
        </span>
        <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-slate-100">
          Agent Pipelines & Infrastructure Control
        </h2>
        <p className="text-xs text-slate-500">
          Monitor Celery worker queues, FastAPI server status, and vector database sync
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 space-y-2">
          <span className="text-[10px] font-bold text-[#a32d2d] uppercase tracking-wider font-sans">FASTAPI BACKEND</span>
          <div className="text-sm font-bold text-emerald-600">● Operational (Port 8000)</div>
          <span className="text-[11px] text-slate-500">SQLite + Async SQLAlchemy</span>
        </div>

        <div className="p-4 bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 space-y-2">
          <span className="text-[10px] font-bold text-[#a32d2d] uppercase tracking-wider font-sans">CELERY TASK WORKERS</span>
          <div className="text-sm font-bold text-emerald-600">● 4 Worker Threads Active</div>
          <span className="text-[11px] text-slate-500">Scheduled 2-hour pipeline</span>
        </div>

        <div className="p-4 bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 space-y-2">
          <span className="text-[10px] font-bold text-[#a32d2d] uppercase tracking-wider font-sans">PINECONE VECTOR DB</span>
          <div className="text-sm font-bold text-emerald-600">● Index Synced</div>
          <span className="text-[11px] text-slate-500">48,920 vectors online</span>
        </div>
      </div>

      <div className="p-6 bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 space-y-4">
        <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-slate-100">
          Recent Pipeline Execution Logs
        </h3>

        <div className="p-4 bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 font-mono text-xs text-slate-800 dark:text-slate-200 space-y-1.5 leading-relaxed">
          <div>[07:45:10] INFO - NewsCollectorAgent: Crawled 42 items across 6 domain feeds.</div>
          <div>[07:45:12] INFO - DuplicateDetectionAgent: 4 duplicates removed.</div>
          <div>[07:45:15] INFO - ImportanceRankingAgent: Ranked top story score = 98/100.</div>
          <div>[07:45:18] INFO - RAGService: Embedded 38 articles into Pinecone index.</div>
        </div>
      </div>
    </div>
  );
}
