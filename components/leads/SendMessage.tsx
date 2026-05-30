"use client";

import { useState } from "react";

export default function SendMessageBox({ leadId }: any) {
  const [message, setMessage] = useState("");

  async function send() {
    const response = await fetch(`/api/leads/${leadId}/send-message`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        content: message,
      }),
    });
    setMessage("");
  }

  return (
    <div
      className="
        mt-4
        flex
        gap-2
      "
    >
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="
          flex-1
          border
          rounded
          p-3
        "
      />

      <button
        onClick={send}
        className="
          bg-black
          text-white
          px-6
          rounded
        "
      >
        Send
      </button>
    </div>
  );
}
