"use client";

import React from "react";
import { Calendar, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ScheduledPostsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white font-mono">Scheduled & Published Content</h2>
        <p className="text-xs text-slate-400">Automated publishing queue across LinkedIn, X/Twitter, and Medium</p>
      </div>

      <div className="space-y-4">
        {[
          { platform: "LinkedIn", title: "OpenAI Swarm Agent Analysis", time: "Today @ 5:00 PM", status: "Scheduled" },
          { platform: "X / Twitter", title: "Claude 3.7 Sonnet Thread", time: "Tomorrow @ 10:00 AM", status: "Draft" },
        ].map((item, i) => (
          <Card key={i} className="p-4 bg-slate-900/60 border-slate-800 flex justify-between items-center text-xs">
            <div>
              <Badge variant="purple" className="text-[10px] mb-1">{item.platform}</Badge>
              <div className="font-bold text-white">{item.title}</div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-slate-400 font-mono flex items-center gap-1">
                <Clock className="w-3 h-3 text-cyan-400" /> {item.time}
              </span>
              <Badge variant="cyan">{item.status}</Badge>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
