"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sparkles,
  LayoutDashboard,
  Newspaper,
  Microscope,
  TrendingUp,
  BarChart3,
  Bookmark,
  Calendar,
  Settings,
  ShieldCheck,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
}

const mainNav: NavItem[] = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "News Feed", href: "/news", icon: Newspaper },
  { name: "Research Lab", href: "/research", icon: Microscope },
  { name: "AI Trends", href: "/trends", icon: TrendingUp },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
];

const workspaceNav: NavItem[] = [
  { name: "Bookmarks", href: "/bookmarks", icon: Bookmark },
  { name: "Scheduled", href: "/scheduled-posts", icon: Calendar },
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Admin", href: "/admin", icon: ShieldCheck },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const renderNavList = (items: NavItem[]) => (
    <div className="space-y-0.5">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname?.startsWith(item.href));
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className={cn(
              "flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors font-sans",
              isActive
                ? "bg-[#f0ece4] text-[#2c2c2a] font-semibold dark:bg-[#2e2c28] dark:text-[#fbfaf8]"
                : "text-[#8a8880] hover:text-[#2c2c2a] hover:bg-[#f5f2eb] dark:hover:bg-zinc-800/60"
            )}
          >
            <Icon className="w-4 h-4 shrink-0 text-[#8a8880]" />
            <span className="truncate">{item.name}</span>
          </Link>
        );
      })}
    </div>
  );

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#2c2c2a]/40 backdrop-blur-sm md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={cn(
          "w-[200px] flex flex-col h-screen bg-[#fbfaf8] dark:bg-[#1c1b18] text-[#2c2c2a] dark:text-[#fbfaf8] select-none shrink-0 p-3 border-r border-[#ece9e3] dark:border-zinc-800 transition-transform duration-300 ease-in-out z-50",
          "fixed inset-y-0 left-0 md:relative md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header Branding */}
        <div className="flex items-center justify-between px-2 py-2 mb-4">
          <Link href="/dashboard" onClick={onClose} className="flex items-center gap-2 hover:opacity-90">
            <div className="w-5 h-5 rounded-md bg-[#4a1b0c] text-[#fbfaf8] flex items-center justify-center">
              <Sparkles className="w-3 h-3" />
            </div>
            <span className="font-sans text-[16px] font-semibold text-[#2c2c2a] dark:text-[#fbfaf8] tracking-tight">
              InsightFlow
            </span>
          </Link>

          {/* Mobile Close Button */}
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#f5f2eb] dark:hover:bg-zinc-800 text-[#8a8880] hover:text-[#2c2c2a] md:hidden"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Navigation Lists */}
        <div className="flex-1 overflow-y-auto space-y-4 no-scrollbar">
          <div>
            <div className="px-2 text-[10px] font-bold text-[#8a8880] uppercase tracking-wider mb-1">
              CORE PLATFORM
            </div>
            {renderNavList(mainNav)}
          </div>

          <div>
            <div className="px-2 text-[10px] font-bold text-[#8a8880] uppercase tracking-wider mb-1">
              WORKSPACE
            </div>
            {renderNavList(workspaceNav)}
          </div>
        </div>

        {/* Footer Profile */}
        <div className="pt-3 border-t border-[#ece9e3] dark:border-zinc-800 px-2 flex items-center justify-between text-xs text-[#8a8880]">
          <span className="font-medium truncate text-[#2c2c2a] dark:text-[#fbfaf8]">Alex Mercer</span>
          <Link href="/login" onClick={onClose} className="hover:underline text-[10px]">
            Logout
          </Link>
        </div>
      </aside>
    </>
  );
}
