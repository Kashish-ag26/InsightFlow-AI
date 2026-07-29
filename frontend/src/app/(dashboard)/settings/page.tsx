"use client";

import React, { useState } from "react";
import { User, Shield, Key, Bell, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SettingsPage() {
  const [name, setName] = useState("Alex Mercer");
  const [email, setEmail] = useState("alex@insightflow.ai");

  return (
    <div className="space-y-6 max-w-4xl mx-auto font-sans bg-[#fbfaf8] dark:bg-[#1c1b18] text-[#2c2c2a] dark:text-[#fbfaf8]">
      {/* Header */}
      <div className="border-b border-[#ece9e3] dark:border-zinc-800 pb-4">
        <span className="text-[10px] font-bold text-[#4a1b0c] uppercase tracking-widest font-sans">
          PLATFORM PREFERENCES
        </span>
        <h2 className="font-serif text-2xl font-normal text-[#2c2c2a] dark:text-[#fbfaf8]">
          Account Settings
        </h2>
        <p className="text-xs text-[#8a8880]">
          Manage your personal details, credentials, and API connection tokens
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Navigation Sidebar */}
        <div className="space-y-1">
          {[
            { label: "Profile Details", icon: User, active: true },
            { label: "Credentials & Access", icon: Key, active: false },
            { label: "Notifications", icon: Bell, active: false },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <button
                key={i}
                className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                  item.active
                    ? "bg-[#f0ece4] text-[#2c2c2a] font-semibold dark:bg-zinc-800 dark:text-[#fbfaf8]"
                    : "text-[#8a8880] hover:text-[#2c2c2a] hover:bg-[#fbfaf8] dark:hover:bg-zinc-800/40"
                }`}
              >
                <Icon className="w-4 h-4 text-[#8a8880]" />
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Profile Card */}
        <div className="p-6 bg-white dark:bg-zinc-900 border border-[#ece9e3] dark:border-zinc-800 rounded-xl space-y-4 shadow-none">
          <h3 className="font-serif text-base font-semibold text-[#2c2c2a] dark:text-[#fbfaf8]">
            Profile Details
          </h3>

          <div className="space-y-3">
            <div>
              <label className="text-xs font-semibold text-[#2c2c2a] dark:text-[#fbfaf8]">Full Name</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 text-xs bg-[#fbfaf8] dark:bg-zinc-950 border-[#ece9e3] dark:border-zinc-800"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-[#2c2c2a] dark:text-[#fbfaf8]">Email Address</label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 text-xs bg-[#fbfaf8] dark:bg-zinc-950 border-[#ece9e3] dark:border-zinc-800"
              />
            </div>
          </div>

          <Button size="sm" className="bg-[#4a1b0c] text-[#fbfaf8] rounded-full text-xs font-medium gap-1.5 mt-2">
            <Save className="w-3.5 h-3.5" /> Save Profile
          </Button>
        </div>

        {/* API Credentials */}
        <div className="p-6 bg-white dark:bg-zinc-900 border border-[#ece9e3] dark:border-zinc-800 rounded-xl space-y-4 shadow-none">
          <h3 className="font-serif text-base font-semibold text-[#2c2c2a] dark:text-[#fbfaf8]">
            API Keys & Integrations
          </h3>

          <div className="space-y-3">
            <div>
              <label className="text-xs font-semibold text-[#2c2c2a] dark:text-[#fbfaf8]">
                Google Gemini API Key
              </label>
              <Input type="password" value="••••••••••••••••••••••••••••••••••••" className="mt-1 text-xs bg-[#fbfaf8] dark:bg-zinc-950 border-[#ece9e3] dark:border-zinc-800" readOnly />
            </div>

            <div>
              <label className="text-xs font-semibold text-[#2c2c2a] dark:text-[#fbfaf8]">
                Pinecone API Key
              </label>
              <Input type="password" value="pcsk_insightdev_api_key_configured" className="mt-1 text-xs bg-[#fbfaf8] dark:bg-zinc-950 border-[#ece9e3] dark:border-zinc-800" readOnly />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
