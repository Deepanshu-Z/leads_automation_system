"use client";

import { useState } from "react";
import { Send, Loader2, AlertCircle } from "lucide-react";

export default function SendMessageBox({ leadId }: any) {
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function send() {
    if (!message.trim() || sending) return;

    setSending(true);
    setError(null);
    try {
      const response = await fetch(`/api/leads/${leadId}/send-message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: message,
        }),
      });

      if (response.ok) {
        setMessage("");
        setError(null);
      } else {
        const errText = await response.text();
        setError(errText || "Failed to send message.");
      }
    } catch (error) {
      console.error("Failed to send message", error);
      setError("An unexpected network error occurred.");
    } finally {
      setSending(false);
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="mt-4 flex flex-col gap-2 w-full">
      {error && (
        <div className="flex items-center gap-2 text-xs text-rose-500 bg-rose-500/10 border border-rose-500/20 rounded-xl p-3 animate-in fade-in slide-in-from-top-1 duration-200">
          <AlertCircle size={14} className="shrink-0" />
          <span className="font-medium">{error}</span>
        </div>
      )}

      <div className="flex gap-3 items-end w-full">
        <textarea
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (error) setError(null);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Type a message to reply... (Press Enter to send)"
          disabled={sending}
          className="
            flex-1
            bg-card
            border
            border-border
            rounded-xl
            p-3
            text-sm
            placeholder-muted-foreground
            focus:border-primary
            focus:ring-2
            focus:ring-primary/20
            outline-none
            resize-none
            h-[52px]
            transition-all
            disabled:opacity-50
          "
        />

        <button
          onClick={send}
          disabled={sending || !message.trim()}
          className="
            h-[52px]
            px-5
            rounded-xl
            bg-primary
            hover:bg-primary/95
            active:scale-95
            text-primary-foreground
            font-semibold
            flex
            items-center
            justify-center
            gap-2
            transition-all
            disabled:opacity-50
            disabled:pointer-events-none
            glow-primary
            shrink-0
          "
        >
          {sending ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <Send size={16} />
          )}
          <span className="hidden sm:inline">Send</span>
        </button>
      </div>
    </div>
  );
}
