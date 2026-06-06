"use client";

import Link from "next/link";
import { Bot, Zap, MessageSquare, ShieldAlert, ArrowRight, Activity, Users, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500/30 font-sans">
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* NAVBAR */}
      <header className="border-b border-slate-900 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-indigo-600/30">
              L
            </div>
            <span className="font-semibold tracking-wider text-white">LEADS AUTOMATION</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-500 transition-all shadow-md shadow-indigo-600/20"
            >
              Go to Dashboard
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-20 max-w-5xl mx-auto z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-900/50 text-indigo-400 text-xs font-semibold mb-6 animate-pulse">
          <Zap size={12} />
          Now powered by next-gen AI intent detection
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
          Automate Leads, Messaging &amp;{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
            Conversations Instantly
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mb-10 leading-relaxed">
          Unify your WhatsApp, Instagram, and Facebook leads. Let our autonomous AI handle qualification, collect information, generate Razorpay links, and escalate complex cases in real-time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-indigo-600 font-semibold text-white hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/30 transform hover:-translate-y-0.5"
          >
            Launch System Console
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 border border-slate-800 font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition-all transform hover:-translate-y-0.5"
          >
            Agent Credentials Login
          </Link>
        </div>

        {/* HERO STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl mt-24 pt-10 border-t border-slate-900">
          <div className="text-left">
            <p className="text-3xl font-bold text-white">99.8%</p>
            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mt-1">Bot Uptime</p>
          </div>
          <div className="text-left">
            <p className="text-3xl font-bold text-white">&lt; 3 Sec</p>
            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mt-1">Response Time</p>
          </div>
          <div className="text-left">
            <p className="text-3xl font-bold text-white">10k+</p>
            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mt-1">Leads Managed</p>
          </div>
          <div className="text-left">
            <p className="text-3xl font-bold text-white">4.8x</p>
            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mt-1">Conversion Boost</p>
          </div>
        </div>
      </section>

      {/* CORE FEATURES SECTION */}
      <section className="bg-slate-950 border-t border-slate-900 py-24 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white">Built for High-Growth Sales Workflows</h2>
            <p className="text-slate-400 mt-4">Everything you need to automate support &amp; payment pipelines without losing the human touch.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 transition-all hover:bg-slate-900">
              <div className="h-12 w-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6">
                <Bot size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Automated AI Bot</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Processes messages autonomously on WhatsApp, Instagram &amp; Facebook. Identifies customer intent and responds instantly.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-all hover:bg-slate-900">
              <div className="h-12 w-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6">
                <ShieldAlert size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Smart Escalation Queue</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Recognizes frustrated, high-value, or complex queries and alerts human agents instantly with direct links.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/30 transition-all hover:bg-slate-900">
              <div className="h-12 w-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Omnichannel Inbox</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Allows human agents to seamlessly takeover from the AI bot, send direct messages, and collect client feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-xs gap-4">
          <p>© {new Date().getFullYear()} Leads Automation System. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

