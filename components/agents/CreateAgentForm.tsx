"use client";

import { useCreateAgent } from "@/lib/hooks/agents/useCreateAgent";
import { useState } from "react";
import { UserPlus, Mail, Lock, User, Shield, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function CreateAgentForm() {
  const createAgent = useCreateAgent();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("AGENT");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) return;

    createAgent.mutate(
      {
        name,
        email,
        password,
        role,
      },
      {
        onSuccess: () => {
          setName("");
          setEmail("");
          setPassword("");
        },
      }
    );
  };

  return (
    <Card className="border-border bg-card shadow-sm w-full">
      <CardHeader>
        <div className="flex items-center gap-2.5">
          <UserPlus size={18} className="text-primary" />
          <div>
            <CardTitle className="text-sm font-bold text-foreground">Add New Agent</CardTitle>
            <CardDescription className="text-xs">Create credentials for a new support executive</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          {/* Name input */}
          <div className="space-y-1">
            <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Agent Name</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-muted-foreground">
                <User size={14} />
              </span>
              <input
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 bg-background border border-border rounded-lg text-xs placeholder-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all"
                required
              />
            </div>
          </div>

          {/* Email input */}
          <div className="space-y-1">
            <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Email Address</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-muted-foreground">
                <Mail size={14} />
              </span>
              <input
                type="email"
                placeholder="john@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 bg-background border border-border rounded-lg text-xs placeholder-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all"
                required
              />
            </div>
          </div>

          {/* Password input */}
          <div className="space-y-1">
            <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-muted-foreground">
                <Lock size={14} />
              </span>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 bg-background border border-border rounded-lg text-xs placeholder-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all"
                required
              />
            </div>
          </div>

          {/* Role select & Submit Button */}
          <div className="flex gap-2">
            <div className="flex-1 space-y-1">
              <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider">System Role</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-2.5 flex items-center text-muted-foreground pointer-events-none">
                  <Shield size={13} />
                </span>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full pl-7 pr-2 py-1.5 bg-background border border-border rounded-lg text-xs text-foreground font-medium outline-none focus:border-primary transition-all cursor-pointer"
                >
                  <option value="AGENT">AGENT</option>
                  <option value="ADMIN">ADMIN</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={createAgent.isPending}
              className="px-4 py-1.5 h-[30px] rounded-lg bg-primary hover:bg-primary/95 text-white font-bold text-xs uppercase tracking-wider transition-all disabled:opacity-50 self-end shrink-0 shadow-sm shadow-primary/10 flex items-center justify-center gap-1.5"
            >
              {createAgent.isPending ? (
                <Loader2 size={12} className="animate-spin" />
              ) : (
                <span>Create</span>
              )}
            </button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
