"use client";

import { useState } from "react";
import { Send, Smartphone, MessageSquare, RefreshCw, Loader2, Sparkles, CheckCircle2, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function SendMessagePage() {
  const [platform, setPlatform] = useState("whatsapp");
  const [recipientId, setRecipientId] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [reEnabling, setReEnabling] = useState(false);
  const [response, setResponse] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");

  const agentId = 1234;

  const handleSend = async () => {
    if (!recipientId || !text) {
      setResponse("Please fill in recipient ID and message text.");
      setStatusType("error");
      return;
    }

    setLoading(true);
    setResponse("");
    setStatusType("");

    try {
      const res = await fetch(`/api/leads/${1}/reply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
        }),
      });

      const data = await res.text();
      setResponse(data || "Message sent successfully!");
      setStatusType("success");
    } catch (err) {
      setResponse("Error sending message. Please check logs.");
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

  const reEnableAi = async () => {
    setReEnabling(true);
    setResponse("");
    setStatusType("");

    try {
      const res = await fetch(`/api/leads/${1}/reenableai`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          agentId,
        }),
      });

      const data = await res.text();
      setResponse(data || "AI engine successfully re-enabled on lead.");
      setStatusType("success");
    } catch (err) {
      setResponse("Error re-enabling AI on lead.");
      setStatusType("error");
    } finally {
      setReEnabling(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-200">
      <Card className="border-border bg-card shadow-sm">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Send size={20} />
            </div>
            <div>
              <CardTitle className="text-base font-bold text-foreground">Quick Broadcast Message</CardTitle>
              <CardDescription className="text-xs">Dispatch manual quick-replies or override AI responders</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-5">
          {/* Response Notification Banner */}
          {response && (
            <div
              className={`
                flex
                items-start
                gap-2.5
                p-3.5
                rounded-lg
                text-xs
                border
                ${
                  statusType === "success"
                    ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500"
                    : "bg-rose-500/10 border-rose-500/20 text-rose-500"
                }
              `}
            >
              {statusType === "success" ? (
                <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
              ) : (
                <AlertTriangle size={16} className="shrink-0 mt-0.5" />
              )}
              <span className="font-medium">{response}</span>
            </div>
          )}

          {/* Platform Select */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Channel Platform
            </label>
            <div className="grid grid-cols-3 gap-2">
              {["whatsapp", "instagram", "messenger"].map((plat) => (
                <button
                  key={plat}
                  type="button"
                  onClick={() => setPlatform(plat)}
                  className={`
                    py-2
                    px-3
                    rounded-lg
                    border
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    text-center
                    transition-all
                    ${
                      platform === plat
                        ? "bg-primary border-primary text-primary-foreground shadow-sm"
                        : "bg-background border-border text-muted-foreground hover:bg-muted hover:text-foreground"
                    }
                  `}
                >
                  {plat}
                </button>
              ))}
            </div>
          </div>

          {/* Recipient Phone/ID */}
          <div className="space-y-1.5">
            <label htmlFor="recipient" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Recipient Number / Account ID
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-muted-foreground">
                <Smartphone size={16} />
              </span>
              <input
                id="recipient"
                type="text"
                placeholder="e.g. 919876543210 or fb-user-id"
                value={recipientId}
                onChange={(e) => setRecipientId(e.target.value)}
                disabled={loading || reEnabling}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all disabled:opacity-50"
                required
              />
            </div>
          </div>

          {/* Text Message */}
          <div className="space-y-1.5">
            <label htmlFor="message" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Message Content
            </label>
            <div className="relative">
              <span className="absolute top-3 left-3 text-muted-foreground">
                <MessageSquare size={16} />
              </span>
              <textarea
                id="message"
                placeholder="Write your manual reply here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                disabled={loading || reEnabling}
                rows={4}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none disabled:opacity-50"
                required
              />
            </div>
          </div>

          {/* Actions button footer */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleSend}
              disabled={loading || reEnabling}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary hover:bg-primary/95 text-primary-foreground text-xs font-bold uppercase tracking-wider shadow-md glow-primary transition-all disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  <span>Dispatching...</span>
                </>
              ) : (
                <>
                  <Send size={14} />
                  <span>Dispatch Message</span>
                </>
              )}
            </button>

            <button
              onClick={reEnableAi}
              disabled={loading || reEnabling}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold uppercase tracking-wider transition-all disabled:opacity-50"
            >
              {reEnabling ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  <span>Configuring AI...</span>
                </>
              ) : (
                <>
                  <RefreshCw size={14} />
                  <span>Handover to AI Bot</span>
                </>
              )}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
