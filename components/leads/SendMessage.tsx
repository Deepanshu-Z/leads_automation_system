"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";

export default function SendMessageBox({ leadId }: any) {
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  async function send() {
    if (!message.trim() || sending) return;

    setSending(true);
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
      }
    } catch (error) {
      console.error("Failed to send message", error);
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
    <div className="mt-4 flex gap-3 items-end">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
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
  );
}
