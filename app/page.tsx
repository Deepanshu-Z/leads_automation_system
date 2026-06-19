"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Bot,
  Zap,
  MessageSquare,
  ArrowRight,
  Users,
  CheckCircle,
  CreditCard,
  Sparkles,
  Mail,
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  Activity,
  AlertTriangle
} from "lucide-react";

export default function Home() {
  const [activeFeature, setActiveFeature] = useState<"autopilot" | "dashboard" | "checkout">("autopilot");
  const [activeStep, setActiveStep] = useState<number>(0);

  // ELI5 (Explain Like I'm 5) Workflow Steps
  const simpleSteps = [
    {
      title: "1. Customer Sends a Message",
      emoji: "💬",
      description: "A customer messages your business on WhatsApp or Instagram asking about your products, timing, or pricing.",
      badge: "Inbound Capture"
    },
    {
      title: "2. Smart Robot Answers Instantly",
      emoji: "🤖",
      description: "Our AI agent understands the customer and replies in under 3 seconds with exact details, helping them choose the right batch.",
      badge: "24/7 Auto-Pilot"
    },
    {
      title: "3. Direct Link to Pay",
      emoji: "💳",
      description: "If they want to buy, the robot generates a secure Razorpay payment link right inside the chat, letting them pay instantly.",
      badge: "Instant Checkout"
    },
    {
      title: "4. Alerts You for Tricky Questions",
      emoji: "🚨",
      description: "If the customer asks a very complex question, the robot pauses itself, alerts your team on the dashboard, and lets you takeover.",
      badge: "Human Backup"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-orange-500/20 antialiased">
      
      {/* SHINY BACKGROUND BLUR EFFECTS */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] right-1/4 w-[600px] h-[600px] bg-amber-50 rounded-full blur-[150px] pointer-events-none" />

      {/* NAVBAR */}
      <header className="border-b border-slate-100 bg-white/95 backdrop-blur sticky top-0 z-50 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-orange-500 flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-orange-500/30">
              L
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-tight text-slate-900">LEADS AUTOMATION</span>
              <span className="text-[10px] text-orange-600 font-bold uppercase tracking-widest">Business Suite</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 font-bold text-sm text-slate-600">
            <a href="#how-it-works" className="hover:text-orange-600 transition-colors">How It Works</a>
            <a href="#features" className="hover:text-orange-600 transition-colors">Key Features</a>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-bold text-slate-600 hover:text-orange-600 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-orange-500 text-sm font-bold text-white hover:bg-orange-600 transition-all shadow-md shadow-orange-500/20 hover:shadow-lg hover:-translate-y-0.5 transform"
            >
              Go to Dashboard
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 max-w-7xl mx-auto z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-bold mb-8 shadow-sm">
          <Sparkles size={12} className="fill-current text-orange-500 animate-spin" />
          Turn Facebook, WhatsApp &amp; Instagram Chats Into Revenue
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1] max-w-5xl mx-auto">
          Stop Missed Sales. Let Our Smart AI Robot
          <span className="block mt-3 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
            Sell &amp; Collect Payments 24/7
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-12 font-semibold leading-relaxed">
          We connect your customer chats directly to our automated checkout assistant. It answers questions in 2 seconds, registers students, and collects payments while you sleep.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-orange-500 font-bold text-white hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/30 transform hover:-translate-y-0.5 text-base"
          >
            Launch System Console
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* HERO TRUST PLATES */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl mx-auto mt-24">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center">
            <p className="text-4xl font-extrabold text-orange-600">3 Seconds</p>
            <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mt-2">Instant Response Time</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center">
            <p className="text-4xl font-extrabold text-orange-600">4.8x</p>
            <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mt-2">Conversion Rates Boost</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center">
            <p className="text-4xl font-extrabold text-orange-600">100%</p>
            <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mt-2">Automatic Payment Links</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (ELI5 STYLE) */}
      <section id="how-it-works" className="py-24 bg-slate-50 border-y border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">How It Works (So Simple a 5-Year-Old Can Understand!)</h2>
            <p className="text-slate-600 mt-4 font-bold">Our smart automation runs on three simple rules to keep your customers happy and paying.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {simpleSteps.map((step, idx) => (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-2xl border bg-white transition-all cursor-pointer relative ${
                  activeStep === idx
                    ? "border-orange-500 shadow-xl shadow-orange-500/5 ring-2 ring-orange-500/20"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="text-4xl mb-4">{step.emoji}</div>
                <span className="text-[10px] text-orange-600 font-extrabold uppercase tracking-wider block mb-1">
                  {step.badge}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed font-semibold">{step.description}</p>
                
                {activeStep === idx && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-orange-500 rotate-45 rounded-sm" />
                )}
              </div>
            ))}
          </div>

          {/* DYNAMIC STORYBOARD BOX */}
          <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-8 max-w-4xl mx-auto shadow-sm">
            <div className="flex items-center gap-2 mb-4 text-xs font-bold text-orange-600 font-mono uppercase tracking-widest">
              <span>Storyboard Visualization</span>
            </div>
            
            <div className="space-y-4">
              {activeStep === 0 && (
                <div className="flex gap-4 items-start animate-in fade-in duration-300">
                  <div className="text-3xl bg-slate-100 p-2 rounded-xl">💬</div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-base">Client asks: "How much does the Web Dev batch cost?"</h4>
                    <p className="text-slate-600 text-sm font-semibold mt-1">Whether they message you at 2:00 PM or 3:00 AM, the message is instantly routed to our automation server. No customer has to wait.</p>
                  </div>
                </div>
              )}
              {activeStep === 1 && (
                <div className="flex gap-4 items-start animate-in fade-in duration-300">
                  <div className="text-3xl bg-orange-50 p-2 rounded-xl">🤖</div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-base">Robot replies: "The course is ₹9,999 with weekend options."</h4>
                    <p className="text-slate-600 text-sm font-semibold mt-1">Our artificial intelligence processes the client request, checks your batch database, drafts a customized reply, and responds in under 3 seconds automatically.</p>
                  </div>
                </div>
              )}
              {activeStep === 2 && (
                <div className="flex gap-4 items-start animate-in fade-in duration-300">
                  <div className="text-3xl bg-emerald-50 p-2 rounded-xl">💳</div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-base">Robot sends: "Here is your Razorpay checkout link..."</h4>
                    <p className="text-slate-600 text-sm font-semibold mt-1">No human intervention required. When the customer confirms, the system creates a secure Razorpay checkout link and sends it to the customer. When paid, the status instantly turns to PAID.</p>
                  </div>
                </div>
              )}
              {activeStep === 3 && (
                <div className="flex gap-4 items-start animate-in fade-in duration-300">
                  <div className="text-3xl bg-rose-50 p-2 rounded-xl">🚨</div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-base">Alert: "Lead requires human intervention."</h4>
                    <p className="text-slate-600 text-sm font-semibold mt-1">If the customer asks a tricky question (e.g. refund requests, custom queries), the AI robot pauses and notifies your support team. You takeover without losing the lead.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CORE PLATFORM FEATURES */}
      <section id="features" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Everything You Need to Scale Sales and Automate Support
              </h2>
              <p className="text-slate-600 leading-relaxed font-semibold">
                Running campaigns is hard, but tracking leads and managing support shouldn't be. Our integrated dashboard gives you complete oversight of the entire automation system.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0 mt-0.5">
                    <CheckCircle size={14} className="fill-current text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm">Unified Lead Management</h4>
                    <p className="text-slate-500 text-xs mt-0.5 font-semibold">See all WhatsApp, Instagram, and Facebook prospects inside a single analytics console.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0 mt-0.5">
                    <CheckCircle size={14} className="fill-current text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm">Razorpay Automated Checkout</h4>
                    <p className="text-slate-500 text-xs mt-0.5 font-semibold">Create, track, and confirm customer checkout details automatically. Never manually check transaction screenshots again.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0 mt-0.5">
                    <CheckCircle size={14} className="fill-current text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm">Resilient Agent Takeover</h4>
                    <p className="text-slate-500 text-xs mt-0.5 font-semibold">Easily assign leads to human agents and toggle the AI bot on or off with a single click.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="mailto:deepanshupokhriyal07@gmail.com?subject=Setup%20My%20Leads%20Automation%20System"
                  className="inline-flex items-center gap-1.5 font-bold text-orange-600 hover:text-orange-700 text-sm"
                >
                  Ask us about custom CRM integrations
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>

            {/* INTERACTIVE INTERFACE SWITCHER */}
            <div className="border border-slate-200 bg-slate-50 rounded-3xl p-6 shadow-xl relative overflow-hidden">
              <div className="flex gap-2 mb-6 bg-white p-1.5 rounded-xl border border-slate-200 text-xs font-bold">
                <button
                  onClick={() => setActiveFeature("autopilot")}
                  className={`flex-1 py-2 text-center rounded-lg transition-all ${
                    activeFeature === "autopilot" ? "bg-orange-500 text-white" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  AI Robot Pilot
                </button>
                <button
                  onClick={() => setActiveFeature("dashboard")}
                  className={`flex-1 py-2 text-center rounded-lg transition-all ${
                    activeFeature === "dashboard" ? "bg-orange-500 text-white" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Sales Dashboard
                </button>
                <button
                  onClick={() => setActiveFeature("checkout")}
                  className={`flex-1 py-2 text-center rounded-lg transition-all ${
                    activeFeature === "checkout" ? "bg-orange-500 text-white" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Auto-Checkout
                </button>
              </div>

              {/* DYNAMIC SCREEN PREVIEW */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm min-h-[260px] flex flex-col justify-between">
                
                {activeFeature === "autopilot" && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                      <span className="text-[10px] font-extrabold text-orange-600 uppercase font-mono">Autopilot Mode (Active)</span>
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-xs font-semibold text-slate-600">
                        <span className="text-[9px] text-slate-400 block font-mono">Lead asks:</span>
                        "Is there any batch starts this Sunday?"
                      </div>
                      <div className="bg-orange-50/50 border border-orange-100 rounded-xl p-3 text-xs font-semibold text-slate-800 text-right">
                        <span className="text-[9px] text-orange-500 block font-mono">AI Robot replies:</span>
                        "Yes, our weekend batch starts this Sunday at 10 AM. Would you like me to send the enrollment link?"
                      </div>
                    </div>
                  </div>
                )}

                {activeFeature === "dashboard" && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                      <span className="text-[10px] font-extrabold text-orange-600 uppercase font-mono">Console Overview</span>
                      <span className="text-[10px] font-bold text-slate-500 font-mono">Live Metrics</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <span className="text-[9px] text-slate-400 font-extrabold block uppercase">New Leads Today</span>
                        <span className="text-xl font-extrabold text-slate-800">42 Leads</span>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <span className="text-[9px] text-slate-400 font-extrabold block uppercase">Payments Collected</span>
                        <span className="text-xl font-extrabold text-slate-800">₹89,990</span>
                      </div>
                    </div>
                    
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="text-[9px] text-slate-400 font-extrabold block uppercase">Avg Response Time</span>
                        <span className="text-sm font-bold text-slate-800">2.1 Seconds</span>
                      </div>
                      <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                        Instant
                      </span>
                    </div>
                  </div>
                )}

                {activeFeature === "checkout" && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                      <span className="text-[10px] font-extrabold text-orange-600 uppercase font-mono">Payment Link API</span>
                      <span className="text-[10px] font-bold text-slate-500 font-mono">Razorpay Integrated</span>
                    </div>

                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-extrabold text-slate-800">Web Development Course</span>
                        <span className="font-extrabold text-orange-600">₹9,999</span>
                      </div>
                      <div className="text-[10px] font-bold text-slate-400 font-mono">
                        URL: https://rzp.io/i/wd_weekend_batch
                      </div>
                    </div>

                    <div className="bg-emerald-50 border border-emerald-100 text-emerald-800 p-3 rounded-xl text-xs font-bold flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle size={14} className="fill-current text-emerald-600 text-white" />
                        Status: PAID
                      </span>
                      <span className="font-mono text-[9px]">ID: pay_Ok23ns82</span>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>



      {/* FOOTER */}
      <footer className="border-t border-slate-100 bg-white py-12 shrink-0 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-xs gap-6 font-bold">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded bg-orange-500 text-white flex items-center justify-center font-extrabold text-sm shadow">
              L
            </div>
            <span className="text-slate-700">Leads Automation Platform</span>
          </div>
          
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-orange-600 transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-orange-600 transition-colors">Privacy Policy</Link>
          </div>
          
          <p>© {new Date().getFullYear()} Lead Automation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
