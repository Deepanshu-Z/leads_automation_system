"use client";

import { signIn } from "next-auth/react";

import { useState } from "react";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  async function handleLogin() {
    const result = await signIn(
      "credentials",

      {
        email,

        password,

        redirect: false,
      },
    );

    if (!result?.error) {
      router.push("/dashboard");
    }
  }

  return (
    <div className="p-10">
      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
