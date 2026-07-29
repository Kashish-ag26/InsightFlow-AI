"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Sparkles, ArrowRight, Github, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("alex@insightflow.ai");
  const [password, setPassword] = useState("••••••••");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/dashboard");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-md space-y-8 relative z-10">
        <div className="text-center space-y-3">
          <Link href="/" className="inline-flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white font-mono">InsightFlow</span>
          </Link>
          <h2 className="text-xl font-bold text-slate-100">Welcome Back</h2>
          <p className="text-xs text-slate-400">Sign in to manage your AI news intelligence agents</p>
        </div>

        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-2xl backdrop-blur-xl space-y-6">
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="gap-2 text-xs border-slate-800 bg-slate-950/60">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#EA4335"
                  d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.3 9 5 12 5z"
                />
                <path
                  fill="#4285F4"
                  d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12.3 0 15s.7 5.3 1.9 7.7l3.7-2.9c-.6-1.5-1-3.2-1-5z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.3-6.4-5.2L1.9 16C3.7 19.7 7.5 23 12 23z"
                />
              </svg>
              Google
            </Button>
            <Button variant="outline" className="gap-2 text-xs border-slate-800 bg-slate-950/60">
              <Github className="w-4 h-4" /> GitHub
            </Button>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="border-t border-slate-800 w-full" />
            <span className="bg-slate-900 px-3 text-[10px] uppercase font-mono text-slate-500 absolute">
              or continue with email
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300">Email Address</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-slate-950 border-slate-800"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="text-xs font-medium text-slate-300">Password</label>
                <a href="#" className="text-[11px] text-blue-400 hover:underline">Forgot password?</a>
              </div>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-slate-950 border-slate-800"
              />
            </div>

            <Button
              type="submit"
              variant="gradient"
              className="w-full h-11 text-sm font-semibold gap-2 mt-2"
              disabled={loading}
            >
              {loading ? "Authenticating..." : "Sign In to Dashboard"}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </form>

          <p className="text-center text-xs text-slate-400">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blue-400 font-semibold hover:underline">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
