"use client";

import React, { useState } from "react";
import { Sidebar } from "./sidebar";
import { Navbar } from "./navbar";
import { FloatingChat } from "@/components/chat/floating-chat";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-[#fbfaf8] dark:bg-[#1c1b18] text-[#2c2c2a] dark:text-[#fbfaf8] font-sans relative">
      {/* Sidebar - Handles both desktop sticky and mobile overlay drawer */}
      <Sidebar isOpen={isMobileSidebarOpen} onClose={() => setIsMobileSidebarOpen(false)} />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden bg-[#fbfaf8] dark:bg-[#1c1b18]">
        <Navbar onMenuClick={() => setIsMobileSidebarOpen(true)} />
        
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-[#fbfaf8] dark:bg-[#1c1b18] scroll-smooth">
          {children}
        </main>
      </div>

      {/* Floating RAG Assistant */}
      <FloatingChat />
    </div>
  );
}
