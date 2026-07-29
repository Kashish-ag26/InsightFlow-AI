"use client";

import React from "react";
import { Bookmark, Download, Folder, Trash2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BookmarksPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white font-mono">Saved Articles & Collections</h2>
          <p className="text-xs text-slate-400">Organize saved intelligence stories and export as PDF/Markdown</p>
        </div>
        <Button variant="outline" size="sm" className="gap-2 border-slate-800">
          <Download className="w-3.5 h-3.5" /> Export Collection
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { title: "OpenAI Swarm Agent Architecture", category: "AI Agents", date: "Saved 2h ago" },
          { title: "NVIDIA Blackwell B200 Chiplet Specs", category: "Hardware", date: "Saved yesterday" },
        ].map((item, i) => (
          <Card key={i} className="p-4 bg-slate-900/60 border-slate-800 flex justify-between items-center">
            <div>
              <span className="text-[10px] text-blue-400 font-mono">{item.category}</span>
              <h4 className="text-sm font-bold text-white">{item.title}</h4>
              <span className="text-[10px] text-slate-500">{item.date}</span>
            </div>
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-slate-500 hover:text-red-400">
              <Trash2 className="w-4 h-4" />
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
