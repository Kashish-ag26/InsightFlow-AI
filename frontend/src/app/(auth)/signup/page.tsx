"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Sparkles, ArrowRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("Alex Mercer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-md space-y-8 relative z-10">
        <div className="text-center space-y-3">
          <Link href="/" className="inline-flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-lg">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white font-mono">InsightFlow</span>
          </Link>
          <h2 className="text-xl font-bold text-slate-100">Create Free Account</h2>
          <p className="text-xs text-slate-400">Join 2,500+ AI leads automating news research</p>
        </div>

        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-2xl backdrop-blur-xl space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300">Full Name</label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                required
                className="bg-slate-950 border-slate-800"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300">Work Email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                required
                className="bg-slate-950 border-slate-800"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300">Password</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Must be at least 8 characters"
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
              {loading ? "Creating workspace..." : "Create Account & Start Free"}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </form>

          <p className="text-center text-xs text-slate-400">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-400 font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
