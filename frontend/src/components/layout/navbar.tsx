"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Search, Sparkles, Bell, Sun, Moon, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockNotifications = [
  { id: "1", title: "Claude 3.7 Sonnet Released", time: "10m ago" },
  { id: "2", title: "Sensex Hits All-Time High (+720 pts)", time: "25m ago" },
  { id: "3", title: "Cyber Security Summit Concludes", time: "40m ago" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const getSectionTitle = (path: string | null) => {
    if (!path || path === "/dashboard") return "Today's briefing";
    const segment = path.split("/").pop();
    if (segment === "news") return "Intelligence Feed";
    if (segment === "research") return "Research Laboratory";
    if (segment === "trends") return "Market Trends";
    if (segment === "analytics") return "Analytics & Reach";
    return (segment || "Briefing").replace("-", " ");
  };

  return (
    <header className="h-16 px-6 bg-[#fbfaf8] dark:bg-[#1c1b18] flex items-center justify-between border-b border-[#ece9e3] dark:border-zinc-800 text-[#2c2c2a] dark:text-[#fbfaf8]">
      {/* Section Title (The ONE Serif Element ~24-26px) */}
      <h1 className="font-serif text-2xl font-normal text-[#2c2c2a] dark:text-[#fbfaf8] tracking-tight capitalize">
        {getSectionTitle(pathname)}
      </h1>

      {/* Right Controls: Bordered White Search + Solid Dark Maroon "Ask AI" */}
      <div className="flex items-center gap-3">
        {/* Search Pill Button */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#8a8880]" />
          <input
            type="text"
            placeholder="Search news, topics, RAG..."
            className="h-8 pl-8 pr-4 w-52 rounded-full border border-[#ece9e3] dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs text-[#2c2c2a] dark:text-[#fbfaf8] placeholder:text-[#8a8880] focus:outline-none focus:border-[#4a1b0c]"
          />
        </div>

        {/* Solid Dark Maroon "Ask AI" Button */}
        <Button
          size="sm"
          className="bg-[#4a1b0c] hover:bg-[#381409] text-[#fbfaf8] rounded-full text-xs font-medium px-4 gap-1.5 border border-[#4a1b0c]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#fbfaf8]" />
          <span>Ask AI</span>
        </Button>

        {/* Theme Toggle */}
        <button
          onClick={() => {
            document.documentElement.classList.toggle("dark");
            setIsDark(!isDark);
          }}
          className="p-1.5 text-[#8a8880] hover:text-[#2c2c2a] dark:hover:text-[#fbfaf8] transition-colors"
          title="Toggle theme"
        >
          {isDark ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-slate-700" />}
        </button>

        {/* Notification Bell Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-1.5 text-[#8a8880] hover:text-[#2c2c2a] dark:hover:text-[#fbfaf8] transition-colors relative"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#d85a30]" />
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-72 p-4 bg-white dark:bg-zinc-900 border border-[#ece9e3] dark:border-zinc-800 rounded-xl shadow-xl z-50 space-y-3">
              <div className="flex items-center justify-between border-b border-[#ece9e3] dark:border-zinc-800 pb-2">
                <span className="text-xs font-semibold text-[#2c2c2a] dark:text-[#fbfaf8]">
                  Wire Alerts
                </span>
                <button onClick={() => setShowNotifications(false)} className="text-[#8a8880] hover:text-[#2c2c2a]">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-2">
                {mockNotifications.map((n) => (
                  <div key={n.id} className="py-1.5 border-b border-[#ece9e3]/60 text-xs space-y-0.5">
                    <p className="font-medium text-[#2c2c2a] dark:text-[#fbfaf8] leading-snug">{n.title}</p>
                    <span className="text-[10px] text-[#8a8880]">{n.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
