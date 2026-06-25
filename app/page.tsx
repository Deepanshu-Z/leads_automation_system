"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  CreditCard,
  Sparkles,
  ShieldCheck,
  ChevronDown,
  TrendingUp,
  Zap,
  Bot,
  BrainCircuit,
  Globe,
  BarChart3,
  MessageSquare,
  Star,
  Inbox,
  Link2,
  BellRing,
  Rocket,
  Users,
  Clock,
  Lock,
  Layers,
  Mail,
} from "lucide-react";

/* ─────────────────────── DATA ─────────────────────── */

const FEATURES = [
  {
    icon: Inbox,
    title: "Inbound Chat Capture",
    desc: "Every WhatsApp, Instagram & Facebook message is instantly captured and routed to your automation pipeline — zero delay, zero missed leads.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Responses",
    desc: "Our AI reads every query and fires back a precise, personalised reply in under 3 seconds — smarter than any support agent, available 24/7.",
  },
  {
    icon: Link2,
    title: "Instant Payment Links",
    desc: "When a lead is ready to buy, the bot generates a Razorpay checkout link right inside the chat — no friction, no drop-offs.",
  },
  {
    icon: BellRing,
    title: "Smart Escalation Alerts",
    desc: "Complex queries get flagged instantly. The AI pauses, alerts your team on the dashboard, and lets a human take over — without losing the lead.",
  },
];

const WHY_US = [
  "Responds to every lead in under 3 seconds",
  "Collects payments without human involvement",
  "Works 24/7 — even while you sleep",
  "Handles WhatsApp, Instagram & Facebook in one place",
  "Smart AI that knows when to hand off to humans",
  "Full dashboard with real-time analytics",
];



const TESTIMONIALS = [
  {
    name: "Arjun Sharma",
    role: "Director, TechPath Academy",
    review: "We went from manually replying to 50+ DMs a day to zero — the AI handles everything. Our enrollments jumped 3x in the first month.",
    stars: 5,
  },
  {
    name: "Priya Mehta",
    role: "Founder, SkillBridge",
    review: "The Razorpay integration is magic. Students now pay directly in the WhatsApp chat. We stopped losing leads at the payment step entirely.",
    stars: 5,
  },
  {
    name: "Rohit Verma",
    role: "CEO, LearnFast Institute",
    review: "Setup took 2 hours. By day 3 we had collected ₹1.2L in course fees without a single manual reply. Absolutely worth every rupee.",
    stars: 5,
  },
];

const FAQS = [
  {
    q: "Which platforms does this work on?",
    a: "Our system connects with WhatsApp Business API, Instagram DMs, and Facebook Messenger — all managed from one unified dashboard.",
  },
  {
    q: "How does the AI know what to reply?",
    a: "You provide your course details, batch schedules, pricing, and FAQs during onboarding. The AI is trained on this data and answers accordingly — no generic bot responses.",
  },
  {
    q: "What payment gateway is supported?",
    a: "We integrate natively with Razorpay. Payment links are generated automatically and sent inside the chat. You see payment status update in real-time on your dashboard.",
  },
  {
    q: "What happens when the AI can't answer?",
    a: "The AI detects uncertain or complex queries, pauses itself, and sends an escalation alert to your dashboard so a human agent can take over — no customer is ever abandoned.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes — we offer a 7-day fully functional trial on the Growth plan. No credit card required. Book a demo call and we will set it up for you same day.",
  },
];

/* ─────────────────────── FAQ ITEM ─────────────────────── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border-b border-white/10 transition-all`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">{q}</span>
        <span
          className={`shrink-0 h-7 w-7 rounded-full bg-orange-500/15 border border-orange-500/30 flex items-center justify-center transition-transform duration-300 ${
            open ? "rotate-180 bg-orange-500/30" : ""
          }`}
        >
          <ChevronDown size={14} className="text-orange-400" />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-48 pb-5" : "max-h-0"}`}
      >
        <p className="text-white/55 text-sm leading-relaxed font-semibold">{a}</p>
      </div>
    </div>
  );
}

/* ─────────────────────── PAGE ─────────────────────── */
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial((p) => (p + 1) % TESTIMONIALS.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-[#08080f] text-white font-sans antialiased overflow-x-hidden">

      {/* ══════════════════════════════════════════
          NAVBAR
      ══════════════════════════════════════════ */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#08080f]/90 backdrop-blur-2xl shadow-xl shadow-black/40 border-b border-white/5" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center font-black text-lg text-white shadow-lg shadow-orange-500/30">
              L
            </div>
            <span className="font-black text-base tracking-tight text-white">Leads<span className="text-orange-400">Bot</span></span>
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-white/50">
            <a href="#about" className="hover:text-orange-400 transition-colors">About</a>
            <a href="#features" className="hover:text-orange-400 transition-colors">Features</a>
            <a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a>
            <a href="#faq" className="hover:text-orange-400 transition-colors">FAQ</a>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link href="/login" className="hidden sm:block text-sm font-bold text-white/50 hover:text-white transition-colors">
              Sign In
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-sm font-extrabold text-white transition-all shadow-lg shadow-orange-500/30 hover:-translate-y-0.5 transform"
            >
              Go to Dashboard <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════
          HERO — SPLIT BACKGROUND (Protem style)
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col pt-20" style={{ background: "linear-gradient(90deg, #08080f 58%, #1a0a00 42%)" }}>
        {/* Right side ambient glow */}
        <div className="absolute right-0 top-0 bottom-0 w-[42%] overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-amber-500/10 to-transparent" />
          <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-orange-500/20 blur-[80px]" />
        </div>

        {/* Subtle grid on left */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[58%] pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", backgroundSize: "50px 50px" }}
        />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 flex flex-col lg:flex-row items-center gap-12 flex-1 py-20">
          {/* LEFT — text */}
          <div className="flex-1 lg:pr-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-bold mb-6">
              <Sparkles size={11} className="fill-current" />
              AI-Powered Sales Automation
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.0] tracking-tight text-white mb-6">
              Let&apos;s Turn Your{" "}
              <span className="text-orange-400">DMs Into</span>{" "}
              Revenue.
            </h1>

            <p className="text-white/55 text-lg font-semibold leading-relaxed mb-10 max-w-lg">
              Our AI agent answers customer queries in 3 seconds, sends Razorpay payment links in-chat, and collects fees on autopilot — 24 hours a day, 7 days a week.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-orange-500 hover:bg-orange-600 font-extrabold text-white text-base transition-all shadow-xl shadow-orange-500/30 hover:-translate-y-0.5 transform"
              >
                <Rocket size={18} /> Launch System Console
              </Link>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-white/15 bg-white/5 font-extrabold text-white/70 hover:bg-white/10 hover:border-orange-500/30 transition-all text-base"
              >
                Learn More <ArrowRight size={16} />
              </a>
            </div>

            {/* Mini stats */}
            <div className="flex gap-8 mt-14">
              {[
                { val: "3s", label: "Avg. Response" },
                { val: "4.8×", label: "Conversion Boost" },
                { val: "100%", label: "Auto-Payments" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="text-2xl font-black text-orange-400">{s.val}</p>
                  <p className="text-xs text-white/35 font-bold uppercase tracking-wider mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Visual dashboard mockup */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Glow */}
              <div className="absolute -inset-8 rounded-3xl bg-orange-500/10 blur-3xl" />

              {/* Main card */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent rounded-t-3xl" />

                {/* Header row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    AUTOPILOT ACTIVE
                  </div>
                </div>

                {/* Chat bubbles */}
                <div className="space-y-3 mb-5">
                  <div className="bg-white/6 border border-white/8 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                    <p className="text-[10px] text-white/30 font-mono mb-1">Lead · WhatsApp · 11:42 PM</p>
                    <p className="text-sm font-semibold text-white/75">&ldquo;Hi! What are the course fees for Web Dev batch?&rdquo;</p>
                  </div>
                  <div className="bg-orange-500/12 border border-orange-500/20 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%] ml-auto">
                    <p className="text-[10px] text-orange-400 font-mono mb-1">AI Agent · replied in 2.1s</p>
                    <p className="text-sm font-semibold text-white/80">&ldquo;The weekend batch is ₹9,999. Want me to send the payment link now? 🎯&rdquo;</p>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[75%]">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 mb-1">
                      <CheckCircle size={11} /> Payment Collected
                    </div>
                    <p className="text-sm font-bold text-white">₹9,999 · pay_Ok23ns82</p>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/8">
                  {[
                    { label: "Leads Today", val: "42" },
                    { label: "Revenue", val: "₹89K" },
                    { label: "Response", val: "2.1s" },
                  ].map((s, i) => (
                    <div key={i} className="bg-white/4 rounded-xl p-3 text-center">
                      <p className="text-base font-black text-orange-400">{s.val}</p>
                      <p className="text-[9px] text-white/30 font-bold uppercase tracking-wide mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl px-4 py-2 shadow-xl shadow-orange-500/40">
                <p className="text-white font-black text-sm">24/7 On</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ABOUT — 2 column (image left, text right)
      ══════════════════════════════════════════ */}
      <section id="about" className="py-28 bg-[#0d0d18]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — visual */}
            <div className="relative flex items-center justify-center order-2 lg:order-1">
              <div className="absolute inset-0 bg-orange-500/5 rounded-3xl blur-2xl" />
              <div className="relative w-full max-w-sm bg-white/4 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent rounded-t-3xl" />
                {/* Animated bot icon */}
                <div className="flex justify-center mb-6">
                  <div className="h-24 w-24 rounded-3xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-2xl shadow-orange-500/40">
                    <Bot size={48} className="text-white" />
                  </div>
                </div>
                <h3 className="text-center text-xl font-black text-white mb-2">Your AI Sales Agent</h3>
                <p className="text-center text-white/40 text-sm font-semibold mb-6">Always on. Never tired. Never misses a lead.</p>

                <div className="space-y-3">
                  {[
                    { label: "WhatsApp", color: "bg-emerald-500", pct: "92%" },
                    { label: "Instagram DMs", color: "bg-pink-500", pct: "78%" },
                    { label: "Facebook", color: "bg-blue-500", pct: "65%" },
                  ].map((c, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs font-bold mb-1.5">
                        <span className="text-white/60">{c.label}</span>
                        <span className="text-white/40">{c.pct}</span>
                      </div>
                      <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
                        <div className={`h-full ${c.color} rounded-full`} style={{ width: c.pct }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — text */}
            <div className="order-1 lg:order-2">
              <span className="text-xs font-black text-orange-400 uppercase tracking-widest border border-orange-500/25 px-3 py-1 rounded-full bg-orange-500/8">
                About the System
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-white mt-5 mb-5 leading-tight">
                The Smartest Way to Handle Sales Conversations
              </h2>
              <p className="text-white/50 text-base font-semibold leading-relaxed mb-6">
                Leads Automation is an end-to-end AI system that plugs into your social media inboxes and handles every step of your sales funnel — from answering questions to collecting payment — without any human intervention.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Connects to WhatsApp, Instagram & Facebook",
                  "AI trained on your exact course and pricing details",
                  "Generates Razorpay links directly in-chat",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-orange-500/15 border border-orange-500/30 flex items-center justify-center shrink-0">
                      <CheckCircle size={11} className="text-orange-400" />
                    </div>
                    <span className="text-white/65 text-sm font-semibold">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-orange-500 hover:bg-orange-600 font-extrabold text-white text-sm transition-all shadow-lg shadow-orange-500/25 hover:-translate-y-0.5 transform"
              >
                Learn More <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURES GRID — 2×2 (Protem style)
      ══════════════════════════════════════════ */}
      <section id="features" className="py-28 bg-[#08080f]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-black text-orange-400 uppercase tracking-widest border border-orange-500/25 px-3 py-1 rounded-full bg-orange-500/8">
              Key Features
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mt-5 mb-4 leading-tight">The Future of Sales Automation</h2>
            <p className="text-white/45 font-semibold text-base">
              Four powerful pillars that turn every incoming message into a potential sale — automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className="group flex gap-5 p-7 rounded-3xl border border-white/8 bg-white/3 backdrop-blur-sm hover:border-orange-500/30 hover:bg-white/6 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Icon box — Protem yellow square style adapted */}
                  <div className="shrink-0 h-16 w-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:shadow-orange-500/50 transition-all">
                    <Icon size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white mb-2">{f.title}</h3>
                    <p className="text-white/45 text-sm font-semibold leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          QUOTE BANNER — full width accent (Protem style)
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-amber-500 relative overflow-hidden">
        {/* Background text (Protem watermark style) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="text-[200px] font-black text-white/5 select-none tracking-tighter whitespace-nowrap">AUTOMATE</span>
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-8">
          <blockquote className="text-2xl sm:text-3xl font-black text-white/90 max-w-2xl leading-snug italic">
            &ldquo;Your customers don&apos;t wait. Your AI agent shouldn&apos;t either. Every unanswered message is a sale your competitor gets.&rdquo;
          </blockquote>
          <Link
            href="/dashboard"
            className="shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#08080f] text-white font-extrabold text-base hover:bg-black transition-all shadow-xl"
          >
            Get Started <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY US — image left + checklist right
      ══════════════════════════════════════════ */}
      <section className="py-28 bg-[#0d0d18] relative overflow-hidden">
        {/* Faint bg pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, rgba(249,115,22,0.8) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — visual illustration */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-orange-500/5 blur-3xl" />
              <div className="relative grid grid-cols-2 gap-4">
                {[
                  { icon: Clock, label: "3-Second Reply", val: "Always", color: "from-blue-500/20 to-blue-600/10", border: "border-blue-500/20" },
                  { icon: CreditCard, label: "Payments Collected", val: "₹89K+", color: "from-emerald-500/20 to-emerald-600/10", border: "border-emerald-500/20" },
                  { icon: Users, label: "Leads Handled", val: "1,200+", color: "from-purple-500/20 to-purple-600/10", border: "border-purple-500/20" },
                  { icon: TrendingUp, label: "Conversion Rate", val: "4.8×", color: "from-orange-500/20 to-amber-600/10", border: "border-orange-500/20" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className={`p-6 rounded-2xl border ${item.border} bg-gradient-to-br ${item.color} backdrop-blur-sm`}
                    >
                      <Icon size={24} className="text-white/50 mb-3" />
                      <p className="text-2xl font-black text-white mb-1">{item.val}</p>
                      <p className="text-xs text-white/35 font-bold uppercase tracking-wider">{item.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right — checklist */}
            <div>
              <span className="text-xs font-black text-orange-400 uppercase tracking-widest border border-orange-500/25 px-3 py-1 rounded-full bg-orange-500/8">
                Why Choose Us
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-white mt-5 mb-5 leading-tight">
                Why <span className="text-orange-400">LeadsBot?</span>
              </h2>
              <p className="text-white/45 font-semibold text-base leading-relaxed mb-8">
                There are plenty of chatbots out there. We are not a chatbot — we are a full AI sales agent that understands your business and closes deals.
              </p>

              <ul className="space-y-4">
                {WHY_US.map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/30">
                      <CheckCircle size={13} className="text-white" />
                    </div>
                    <span className="text-white/70 font-semibold text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT / GET IN TOUCH
      ══════════════════════════════════════════ */}
      <section id="contact" className="py-28 bg-[#08080f]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="relative rounded-3xl overflow-hidden border border-orange-500/20 bg-white/3 backdrop-blur-xl p-12 sm:p-16">
            {/* Top shimmer line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
            {/* Dot pattern bg */}
            <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, rgba(249,115,22,0.8) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
            {/* Glow blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />

            <div className="relative flex flex-col lg:flex-row items-center gap-12">

              {/* Left — icon + heading */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 shadow-xl shadow-orange-500/30 mb-6">
                  <Mail size={30} className="text-white" />
                </div>
                <span className="block text-xs font-black text-orange-400 uppercase tracking-widest border border-orange-500/25 px-3 py-1 rounded-full bg-orange-500/8 w-fit mx-auto lg:mx-0 mb-5">
                  Get In Touch
                </span>
                <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
                  Have Any Questions<br />
                  <span className="text-orange-400">or Want to Connect?</span>
                </h2>
                <p className="text-white/45 font-semibold text-base leading-relaxed">
                  Whether you want to set up the automation system, have a custom requirement, or simply want to know more — just drop us a mail. We reply within the same business day.
                </p>
              </div>

              {/* Right — mail card */}
              <div className="flex-shrink-0 w-full lg:w-auto">
                <div className="relative bg-[#0d0d18] border border-white/10 rounded-2xl p-8 w-full lg:w-[380px] shadow-2xl shadow-black/40">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent rounded-t-2xl" />

                  {/* Mail address display */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-orange-400" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Email Us At</p>
                      <p className="text-sm font-bold text-orange-400 break-all">deepanshupokhriyal07@gmail.com</p>
                    </div>
                  </div>

                  {/* What to expect list */}
                  <ul className="space-y-3 mb-8">
                    {[
                      "Custom demo for your business",
                      "Setup support & onboarding",
                      "Integration questions",
                      "Partnership & collaboration",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-semibold text-white/55">
                        <div className="h-1.5 w-1.5 rounded-full bg-orange-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="mailto:deepanshupokhriyal07@gmail.com?subject=LeadsBot%20Enquiry"
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 font-extrabold text-white text-sm shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 transition-all transform"
                  >
                    <Mail size={16} /> Send Us a Mail
                  </a>

                  <p className="text-center text-white/25 text-xs font-semibold mt-4">We typically reply within a few hours</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TESTIMONIALS — Protem review section style
          Amber background + dark cards + ghost REVIEWS text
      ══════════════════════════════════════════ */}
      <section className="py-28 bg-amber-500/90 relative overflow-hidden">
        {/* Giant ghost text — Protem REVIEW style */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="text-[220px] font-black text-black/8 select-none tracking-tighter whitespace-nowrap">REVIEWS</span>
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-black text-orange-900/60 uppercase tracking-widest border border-orange-900/20 px-3 py-1 rounded-full bg-orange-900/10">
              Testimonials
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#08080f] mt-5 mb-2 leading-tight">What Our Clients Say</h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className={`rounded-3xl p-7 transition-all duration-500 ${
                  i === activeTestimonial
                    ? "bg-[#08080f] shadow-2xl shadow-black/30 scale-[1.02]"
                    : "bg-[#1a0800]/90"
                }`}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <Star key={si} size={14} className="text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/75 text-sm font-semibold leading-relaxed italic mb-6">&ldquo;{t.review}&rdquo;</p>
                <div>
                  <p className="text-white font-black text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs font-semibold mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`rounded-full transition-all ${i === activeTestimonial ? "w-6 h-2.5 bg-[#08080f]" : "w-2.5 h-2.5 bg-[#08080f]/30"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ ACCORDION — 2 column (Protem style)
      ══════════════════════════════════════════ */}
      <section id="faq" className="py-28 bg-[#08080f]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Left — title (2 cols) */}
            <div className="lg:col-span-2">
              <span className="text-xs font-black text-orange-400 uppercase tracking-widest border border-orange-500/25 px-3 py-1 rounded-full bg-orange-500/8">
                FAQ
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-white mt-5 mb-5 leading-tight">
                Got Questions?
              </h2>
              <p className="text-white/45 font-semibold text-base leading-relaxed mb-8">
                Everything you need to know about setting up and running your AI sales automation system.
              </p>
              <a
                href="mailto:deepanshupokhriyal07@gmail.com?subject=LeadsBot Query"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-orange-500/30 text-orange-400 font-extrabold text-sm hover:bg-orange-500/10 transition-all"
              >
                <Mail size={15} /> Ask Us Directly
              </a>
            </div>

            {/* Right — accordion (3 cols) */}
            <div className="lg:col-span-3">
              {FAQS.map((faq, i) => (
                <FaqItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA BANNER — App download style (Protem)
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)", backgroundSize: "35px 35px" }} />
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-black/15 blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/25 text-white text-xs font-bold mb-6 backdrop-blur-sm">
            <Sparkles size={12} className="fill-current" /> Also Available on Your Dashboard
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Automate Your Sales?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-10 font-semibold text-lg">
            Set it up once. Let the AI close deals, collect payments, and grow your revenue — on autopilot, forever.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-[#08080f] text-white font-extrabold text-base hover:bg-black transition-all shadow-2xl"
            >
              <Layers size={18} /> Launch System Console
            </Link>
            <a
              href="mailto:deepanshupokhriyal07@gmail.com?subject=Setup My Leads Bot"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-white/15 border border-white/30 text-white font-extrabold text-base hover:bg-white/25 transition-all backdrop-blur-sm"
            >
              <MessageSquare size={18} /> Book a Demo Call
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER — dark bg (Protem style)
      ══════════════════════════════════════════ */}
      <footer className="bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 flex flex-col sm:flex-row items-start justify-between gap-10">
          {/* Left — brand + social */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center font-black text-lg text-white">
                L
              </div>
              <span className="font-black text-base text-white">Leads<span className="text-orange-400">Bot</span></span>
            </div>
            <p className="text-white/35 text-sm font-semibold max-w-xs leading-relaxed mb-6">
              AI-powered sales automation for modern businesses. Turn every DM into a done deal.
            </p>
            <div className="flex gap-3">
              {[Globe, MessageSquare, Mail].map((Icon, i) => (
                <div key={i} className="h-9 w-9 rounded-lg bg-white/6 border border-white/8 flex items-center justify-center hover:bg-orange-500/20 hover:border-orange-500/30 transition-all cursor-pointer">
                  <Icon size={15} className="text-white/40" />
                </div>
              ))}
            </div>
          </div>

          {/* Right — links */}
          <div className="flex gap-16">
            <div>
              <p className="text-xs font-black text-white/30 uppercase tracking-widest mb-4">Product</p>
              <ul className="space-y-3">
                {["Features", "Plans", "Dashboard", "API"].map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm font-semibold text-white/45 hover:text-orange-400 transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-black text-white/30 uppercase tracking-widest mb-4">Legal</p>
              <ul className="space-y-3">
                {[
                  { label: "Privacy Policy", href: "/privacy" },
                  { label: "Terms of Service", href: "/terms" },
                ].map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm font-semibold text-white/45 hover:text-orange-400 transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright bar — Protem dark blue bottom bar adapted */}
        <div className="bg-orange-950/60 border-t border-orange-500/10 py-4">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/30 font-semibold">
            <p>© {new Date().getFullYear()} Leads Automation Platform. All rights reserved.</p>
            <p>Built with ❤️ for Indian EdTech businesses</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
