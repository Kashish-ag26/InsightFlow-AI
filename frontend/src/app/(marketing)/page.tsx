"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Globe, Newspaper, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MarketingPage() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-red-900/20 selection:text-red-400">
      {/* Top Header Masthead */}
      <header className="border-b border-slate-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center border-b border-slate-100 dark:border-zinc-900 text-xs font-sans text-slate-500 uppercase tracking-wider">
          <span>{currentDate}</span>
          <span className="font-bold text-[#a32d2d]">GLOBAL & INDIAN MULTI-DOMAIN WIRE</span>
          <span>ESTABLISHED 2026</span>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight uppercase text-slate-900 dark:text-slate-100">
              Insight<span className="text-[#a32d2d]">Flow</span>
            </h1>
            <p className="text-xs text-slate-500 font-sans uppercase tracking-widest mt-1">
              Autonomous AI News Intelligence & Content Automation Platform
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="outline" size="sm" className="font-bold uppercase tracking-wider text-xs">
                Sign In
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="default" size="sm" className="font-bold uppercase tracking-wider text-xs">
                Launch Newsroom ↗
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Front-Page Hero Grid */}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-slate-200 dark:border-zinc-800">
          <div className="md:col-span-2 space-y-4">
            <span className="text-[10px] font-bold text-[#a32d2d] uppercase tracking-widest font-sans">
              FRONT PAGE DISPATCH
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
              Real-Time Intelligence Across Politics, Tech & AI, War, Stocks, Sports & Fashion
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
              InsightFlow autonomously harvests multi-source news every 2 hours, deduplicates stories, ranks by high importance, conducts Gemini research synthesis, stores vector knowledge in RAG, and auto-generates multi-platform posts.
            </p>
            <div className="pt-2 flex items-center gap-4">
              <Link href="/dashboard">
                <Button size="lg" variant="default" className="font-bold uppercase tracking-wider text-xs">
                  Enter Platform <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="p-6 border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900/50 space-y-4">
            <span className="text-[10px] font-bold text-[#a32d2d] uppercase tracking-widest font-sans">
              WIRE HIGHLIGHTS
            </span>
            <div className="space-y-3 text-xs divide-y divide-slate-200 dark:divide-zinc-800">
              <div className="pt-2 space-y-1">
                <span className="font-bold text-slate-900 dark:text-slate-100">INDIAN POLITICS</span>
                <p className="text-slate-600 dark:text-slate-400">Farmers&apos; unions convene MSP rallies across northern state borders.</p>
              </div>
              <div className="pt-2 space-y-1">
                <span className="font-bold text-slate-900 dark:text-slate-100">TECH & AI</span>
                <p className="text-slate-600 dark:text-slate-400">Anthropic debuts Claude 3.7 Sonnet with hybrid reasoning engine.</p>
              </div>
              <div className="pt-2 space-y-1">
                <span className="font-bold text-slate-900 dark:text-slate-100">STOCKS & MARKETS</span>
                <p className="text-slate-600 dark:text-slate-400">Sensex & Nifty rally +720 points on strong Q1 institutional data.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-zinc-800 py-8 text-center text-xs text-slate-500 font-sans uppercase tracking-wider">
        <p>© {new Date().getFullYear()} InsightFlow Daily Wire. All rights reserved.</p>
      </footer>
    </div>
  );
}
