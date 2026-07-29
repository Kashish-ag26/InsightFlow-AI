"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const stats = [
  { label: "Articles today", value: "284", change: "+18% from yesterday" },
  { label: "High importance", value: "42", change: "Score > 85/100" },
  { label: "Vectors indexed", value: "48,920", change: "Pinecone Cloud DB" },
  { label: "Content reach", value: "184.2K", change: "Across LinkedIn & X" },
];

const topStory = {
  title: "Farmers' Unions Renew Demands for Legal MSP Guarantee; Mass Rallies Scheduled Across Border",
  source: "The Hindu",
  source_url: "https://www.thehindu.com/news/national/",
  date: "12m ago",
  category: "Indian Politics",
  summary: "Farmer delegations convene at Sambhu border urging parliamentary ratification of minimum support prices, debt relief, and pension schemes following multi-state union dialogue.",
};

const recentStories = [
  {
    id: "1",
    title: "Anthropic Releases Claude 3.7 Sonnet with Native Hybrid Thought Tracing",
    source: "Anthropic Research",
    date: "10m ago",
    category: "Tech & AI",
    importance: "High",
  },
  {
    id: "2",
    title: "Sensex & Nifty Hit All-Time Highs as FII Inflows & Q1 Earnings Exceed Forecasts",
    source: "Economic Times India",
    date: "20m ago",
    category: "Stocks & Finance",
    importance: "High",
  },
  {
    id: "3",
    title: "Global Defense Summit Unveils AI Cyber Shield Countermeasures & Drone Interception",
    source: "Reuters Defense",
    date: "35m ago",
    category: "War & Defense",
    importance: "High",
  },
  {
    id: "4",
    title: "India Dominates T20 Series Opener with Record-Breaking Century in Final Overs",
    source: "ESPN India",
    date: "45m ago",
    category: "Sports",
    importance: "Medium",
  },
];

export default function DashboardHome() {
  return (
    <div className="space-y-8 max-w-6xl mx-auto font-sans bg-[#fbfaf8] dark:bg-[#1c1b18] text-[#2c2c2a] dark:text-[#fbfaf8] scroll-smooth">
      {/* Stat Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="news-elevate-card p-5 bg-white dark:bg-zinc-900 border border-[#ece9e3] dark:border-zinc-800 rounded-xl space-y-1.5 shadow-none"
          >
            <div className="text-xs text-[#8a8880] font-sans font-medium">{s.label}</div>
            <div className="text-3xl font-bold text-[#2c2c2a] dark:text-[#fbfaf8] tracking-tight font-sans">
              {s.value}
            </div>
            <div className="text-[11px] text-[#8a8880]">{s.change}</div>
          </div>
        ))}
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Top Story & Main Feed Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Top Story Card */}
          <div className="news-elevate-card p-6 bg-white dark:bg-zinc-900 border border-[#ece9e3] dark:border-zinc-800 rounded-xl space-y-4 shadow-none">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#8a8880] font-medium">Top story today</span>
              <Badge variant="high" className="bg-[#faece7] text-[#4a1b0c] text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-[#f5d9d0]">
                Score 98/100
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 items-start">
              <div className="w-full sm:w-28 h-24 rounded-lg bg-[#f0ece4] dark:bg-zinc-800 border border-[#ece9e3] dark:border-zinc-700 flex items-center justify-center shrink-0">
                <Sparkles className="w-6 h-6 text-[#d85a30]" />
              </div>

              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2 text-xs text-[#8a8880]">
                  <span className="font-semibold text-[#2c2c2a] dark:text-[#fbfaf8]">{topStory.source}</span>
                  <span>•</span>
                  <span>{topStory.date}</span>
                  <span>•</span>
                  <span>{topStory.category}</span>
                </div>
                <h3 className="text-base font-semibold text-[#2c2c2a] dark:text-[#fbfaf8] leading-snug font-sans">
                  {topStory.title}
                </h3>
                <p className="text-xs text-[#8a8880] leading-relaxed line-clamp-2">
                  {topStory.summary}
                </p>
                <div className="pt-1 flex items-center gap-4 text-xs">
                  <a href={topStory.source_url} target="_blank" rel="noopener noreferrer" className="text-[#4a1b0c] dark:text-[#d85a30] font-semibold hover:underline flex items-center gap-1">
                    Reference Source <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Stories List */}
          <div className="p-6 bg-white dark:bg-zinc-900 border border-[#ece9e3] dark:border-zinc-800 rounded-xl space-y-4 shadow-none">
            <div className="flex items-center justify-between border-b border-[#ece9e3] dark:border-zinc-800 pb-3">
              <span className="text-xs font-semibold text-[#2c2c2a] dark:text-[#fbfaf8]">
                Recent AI & Multi-Domain Dispatches
              </span>
              <Link href="/news" className="text-xs text-[#4a1b0c] dark:text-[#d85a30] font-medium hover:underline flex items-center gap-1">
                View all wire dispatches <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-2">
              {recentStories.map((item) => (
                <div key={item.id} className="news-elevate-card p-3 rounded-lg border border-transparent hover:border-[#ece9e3] flex items-center justify-between gap-4">
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2 text-xs text-[#8a8880]">
                      <span className="font-semibold text-[#2c2c2a] dark:text-[#fbfaf8]">{item.source}</span>
                      <span>•</span>
                      <span>{item.date}</span>
                    </div>
                    <h4 className="text-sm font-medium text-[#2c2c2a] dark:text-[#fbfaf8] hover:text-[#d85a30] transition-colors leading-snug font-sans">
                      {item.title}
                    </h4>
                  </div>
                  <Badge variant="high" className="bg-[#faece7] text-[#4a1b0c] text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0">
                    {item.importance}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Topics Column */}
        <div className="space-y-6">
          <div className="p-6 bg-white dark:bg-zinc-900 border border-[#ece9e3] dark:border-zinc-800 rounded-xl space-y-4 shadow-none">
            <span className="text-xs font-semibold text-[#2c2c2a] dark:text-[#fbfaf8]">
              Trending Topics
            </span>
            <div className="space-y-2">
              {[
                { name: "Indian MSP & Electoral Reforms", count: "1,240 stories" },
                { name: "Reasoning AI Models (Claude 3.7)", count: "890 stories" },
                { name: "Nifty IT & Banking Rally", count: "640 stories" },
                { name: "Cyber Drone Shield Security", count: "420 stories" },
              ].map((t, i) => (
                <div key={i} className="news-elevate-card p-2 rounded-md hover:bg-[#fbfaf8] border border-transparent flex justify-between items-center text-xs">
                  <span className="font-medium text-[#2c2c2a] dark:text-[#fbfaf8]">{t.name}</span>
                  <span className="text-[11px] text-[#8a8880]">{t.count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-[#f0ece4] dark:bg-zinc-900 border border-[#ece9e3] dark:border-zinc-800 rounded-xl space-y-3">
            <span className="text-xs font-semibold text-[#4a1b0c] dark:text-[#d85a30] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Gemini RAG Assistant
            </span>
            <p className="text-xs text-[#2c2c2a] dark:text-[#fbfaf8] leading-relaxed">
              Ask RAG assistant to cross-check historical news archives, tech papers, or market indicators.
            </p>
            <Link href="/research">
              <Button size="sm" variant="default" className="w-full text-xs font-medium bg-[#4a1b0c] text-[#fbfaf8] rounded-full">
                Open Research Lab ↗
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
