"use client";

import React from "react";
import { Sidebar } from "./sidebar";
import { Navbar } from "./navbar";
import { FloatingChat } from "@/components/chat/floating-chat";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-[#fbfaf8] dark:bg-[#1c1b18] text-[#2c2c2a] dark:text-[#fbfaf8] font-sans">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden bg-[#fbfaf8] dark:bg-[#1c1b18]">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 bg-[#fbfaf8] dark:bg-[#1c1b18] scroll-smooth">
          {children}
        </main>
      </div>

      {/* Floating RAG Assistant */}
      <FloatingChat />
    </div>
  );
}
