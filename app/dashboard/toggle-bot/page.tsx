"use client";

import { useState } from "react";
import { Bot, Play, Pause, Power, Info, HelpCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Page() {
  const [isActive, setIsActive] = useState(true);
  const [loading, setLoading] = useState(false);

  const toggleBot = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/toggle-bot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderId: "917292057858",
        }),
      });

      const data = await res.json();
      console.log(data);
      // Toggle local display state
      setIsActive(!isActive);
    } catch (error) {
      console.error("Failed to toggle bot", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-200">
      <Card className="border-border bg-card shadow-sm">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Bot size={22} />
            </div>
            <div>
              <CardTitle className="text-base font-bold text-foreground">AI Automation Engine</CardTitle>
              <CardDescription className="text-xs">Configure autonomous auto-replies across all channels</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Main Status Display */}
          <div className="flex items-center justify-between p-4 bg-muted/40 rounded-xl border border-border">
            <div className="space-y-0.5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Engine Status</p>
              <div className="flex items-center gap-2">
                <span className={`h-2.5 w-2.5 rounded-full ${isActive ? "bg-emerald-500 animate-pulse" : "bg-rose-500"}`} />
                <span className="text-sm font-bold text-foreground">
                  {isActive ? "ACTIVE & MONITORING" : "PAUSED (MANUAL OVERRIDE)"}
                </span>
              </div>
            </div>

            <button
              onClick={toggleBot}
              disabled={loading}
              className={`
                flex
                items-center
                gap-2
                px-4
                py-2
                rounded-lg
                text-xs
                font-bold
                uppercase
                tracking-wider
                transition-all
                active:scale-95
                disabled:opacity-50
                ${
                  isActive
                    ? "bg-rose-600 hover:bg-rose-700 text-white shadow-rose-600/10 shadow-md"
                    : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/10 shadow-md"
                }
              `}
            >
              <Power size={14} />
              <span>{loading ? "Processing..." : isActive ? "Deactivate" : "Activate"}</span>
            </button>
          </div>

          {/* Details list */}
          <div className="space-y-3.5 text-sm">
            <div className="flex items-start gap-2 text-muted-foreground">
              <Info size={16} className="text-primary shrink-0 mt-0.5" />
              <p className="text-xs leading-relaxed">
                When active, the AI engine scans WhatsApp, Instagram, and Facebook threads every 3 seconds to auto-classify intents, qualification status, and automatically trigger Razorpay payments.
              </p>
            </div>

            <div className="flex items-start gap-2 text-muted-foreground">
              <HelpCircle size={16} className="text-muted-foreground shrink-0 mt-0.5" />
              <p className="text-xs leading-relaxed">
                If deactivated, human agents will need to reply to all incoming leads manually. The takeover locks are automatically applied.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
