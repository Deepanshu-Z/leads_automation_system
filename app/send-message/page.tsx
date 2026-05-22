"use client";

import { useState } from "react";

export default function SendMessagePage() {
  const [platform, setPlatform] = useState("whatsapp");
  const [recipientId, setRecipientId] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleSend = async () => {
    setLoading(true);
    setResponse("");

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
      setResponse(data);
    } catch (err) {
      setResponse("Error sending message");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Send Message</h2>

      <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
        <option value="whatsapp">WhatsApp</option>
        <option value="instagram">Instagram</option>
        <option value="messenger">Messenger</option>
      </select>

      <br />
      <br />

      <input
        placeholder="Recipient ID / Phone"
        value={recipientId}
        onChange={(e) => setRecipientId(e.target.value)}
      />

      <br />
      <br />

      <textarea
        placeholder="Message"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleSend} disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </button>

      <p>{response}</p>
    </div>
  );
}
