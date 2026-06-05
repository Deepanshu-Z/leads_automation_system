"use client";

import { useCreateAgent } from "@/lib/hooks/agents/useCreateAgent";
import { useState } from "react";

export default function CreateAgentForm() {
  const createAgent = useCreateAgent();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [role, setRole] = useState("AGENT");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        createAgent.mutate({
          name,

          email,

          password,

          role,
        });
      }}
      className="
        flex
        gap-2
        mb-6
      "
    >
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="AGENT">AGENT</option>

        <option value="ADMIN">ADMIN</option>
      </select>

      <button type="submit">Create</button>
    </form>
  );
}
