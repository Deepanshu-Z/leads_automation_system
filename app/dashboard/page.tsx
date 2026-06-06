"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  Legend,
} from "recharts";
import {
  Users,
  MessageSquare,
  CreditCard,
  AlertTriangle,
  TrendingUp,
  Sparkles,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  const router = useRouter();
  const [analytics, setAnalytics] = useState<any>(null);

  // =====================================
  // FETCH ANALYTICS
  // =====================================
  async function fetchAnalytics() {
    try {
      const today = new Date().toISOString().split("T")[0];
      const res = await fetch(`/api/analytics/summary?date=${today}`);
      const data = await res.json();
      console.log(data);
      setAnalytics(data);
    } catch (error) {
      console.error("Error fetching analytics", error);
    }
  }

  // =====================================
  // POLLING
  // =====================================
  useEffect(() => {
    fetchAnalytics();
    const interval = setInterval(fetchAnalytics, 30000);
    return () => clearInterval(interval);
  }, []);

  const platformData = useMemo(() => {
    if (!analytics?.platformData) {
      return [];
    }

    return [
      {
        platform: "WhatsApp",
        leads:
          analytics.platformData.find((p: any) => p.platform === "whatsapp")
            ?.leads || 0,
        fill: "oklch(0.65 0.18 140)", // Modern WhatsApp Green
      },
      {
        platform: "Instagram",
        leads:
          analytics.platformData.find((p: any) => p.platform === "instagram")
            ?.leads || 0,
        fill: "oklch(0.6 0.22 330)", // Instagram Pinkish Purple
      },
      {
        platform: "Facebook",
        leads:
          analytics.platformData.find((p: any) => p.platform === "facebook")
            ?.leads || 0,
        fill: "oklch(0.55 0.18 250)", // Facebook Blue
      },
    ];
  }, [analytics]);

  const statusData = useMemo(() => {
    if (!analytics?.statusData) {
      return [];
    }

    const map: any = {
      NEW: { name: "New Leads", color: "oklch(0.6 0.16 255)" }, // Indigo
      ENGAGED: { name: "Engaged", color: "oklch(0.65 0.18 180)" }, // Teal
      ESCALATED: { name: "Escalated", color: "oklch(0.6 0.18 20)" }, // Orange/Red
      CLOSED: { name: "Closed", color: "oklch(0.65 0.01 240)" }, // Muted slate
    };

    return [
      {
        status: "NEW",
        name: map.NEW.name,
        value: analytics.statusData.find((s: any) => s.status === "NEW")?.value || 0,
        fill: map.NEW.color,
      },
      {
        status: "ENGAGED",
        name: map.ENGAGED.name,
        value: analytics.statusData.find((s: any) => s.status === "ENGAGED")?.value || 0,
        fill: map.ENGAGED.color,
      },
      {
        status: "ESCALATED",
        name: map.ESCALATED.name,
        value: analytics.statusData.find((s: any) => s.status === "ESCALATED")?.value || 0,
        fill: map.ESCALATED.color,
      },
      {
        status: "CLOSED",
        name: map.CLOSED.name,
        value: analytics.statusData.find((s: any) => s.status === "CLOSED")?.value || 0,
        fill: map.CLOSED.color,
      },
    ].filter((item) => item.value > 0);
  }, [analytics]);

  if (!analytics) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="text-sm text-muted-foreground font-medium">Assembling live metrics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* ================================= */}
      {/* STATS OVERVIEW */}
      {/* ================================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard
          title="New Leads Today"
          value={analytics.newLeads}
          icon={Users}
          description="Direct platform acquisitions"
          trend="+12% from yesterday"
          colorClass="text-blue-500 bg-blue-500/10"
        />
        <StatCard
          title="Messages Sent Today"
          value={analytics.messagesSent}
          icon={MessageSquare}
          description="Automated &amp; agent replies"
          trend="99.8% delivery rate"
          colorClass="text-indigo-500 bg-indigo-500/10"
        />
        <StatCard
          title="Payments Collected"
          value={`₹${analytics.payments}`}
          icon={CreditCard}
          description="Successful Razorpay receipts"
          trend="Instant settlements"
          colorClass="text-emerald-500 bg-emerald-500/10"
        />
        <StatCard
          title="Escalations Pending"
          value={analytics.escalations}
          icon={AlertTriangle}
          description="Requires human intervention"
          trend="Urgent action needed"
          colorClass="text-rose-500 bg-rose-500/10"
          badge={analytics.escalations > 0}
        />
      </div>

      {/* ================================= */}
      {/* CHARTS CONTAINER */}
      {/* ================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* BAR CHART */}
        <div className="border border-border bg-card rounded-xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-base font-bold tracking-tight text-foreground">Lead Volume by Platform</h2>
              <p className="text-xs text-muted-foreground mt-0.5">Distribution of users across messaging endpoints</p>
            </div>
            <Sparkles size={16} className="text-primary" />
          </div>

          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={platformData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                <XAxis
                  dataKey="platform"
                  stroke="var(--muted-foreground)"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="var(--muted-foreground)"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  cursor={{ fill: "var(--muted)", opacity: 0.15 }}
                  contentStyle={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--border)",
                    borderRadius: "8px",
                    color: "var(--foreground)",
                    fontSize: "13px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Bar dataKey="leads" radius={[6, 6, 0, 0]} maxBarSize={45}>
                  {platformData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* PIE CHART */}
        <div className="border border-border bg-card rounded-xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-base font-bold tracking-tight text-foreground">Lead Status Breakdown</h2>
              <p className="text-xs text-muted-foreground mt-0.5">Overview of customer progression stages</p>
            </div>
            <TrendingUp size={16} className="text-emerald-500" />
          </div>

          <div className="h-80 w-full flex flex-col sm:flex-row items-center justify-center">
            {statusData.length === 0 ? (
              <p className="text-sm text-muted-foreground">No statuses recorded today.</p>
            ) : (
              <>
                <div className="h-full w-full sm:w-2/3">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={statusData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={65}
                        outerRadius={95}
                        paddingAngle={3}
                      >
                        {statusData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "var(--card)",
                          borderColor: "var(--border)",
                          borderRadius: "8px",
                          color: "var(--foreground)",
                          fontSize: "13px",
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                {/* Custom list description legend */}
                <div className="flex flex-col gap-3.5 mt-4 sm:mt-0 px-2 w-full sm:w-1/3 text-sm">
                  {statusData.map((entry, index) => (
                    <div key={index} className="flex items-center justify-between gap-2 border-b border-border/50 pb-1.5 last:border-0 last:pb-0">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full shrink-0" style={{ backgroundColor: entry.fill }} />
                        <span className="font-medium text-xs text-muted-foreground truncate">{entry.name}</span>
                      </div>
                      <span className="font-semibold text-xs text-foreground">{entry.value}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ================================= */}
      {/* RECENT ESCALATIONS SECTION */}
      {/* ================================= */}
      <div className="border border-border bg-card rounded-xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-base font-bold tracking-tight text-foreground flex items-center gap-2">
              <ShieldAlert size={18} className="text-rose-500" />
              Recent Escalations
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">Leads awaiting human agent priority assignment</p>
          </div>
          <button
            onClick={() => router.push("/dashboard/leads/escalations")}
            className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
          >
            View queue
            <ArrowRight size={14} />
          </button>
        </div>

        {(!analytics.recentEscalations || analytics.recentEscalations.length === 0) ? (
          <div className="py-8 text-center text-sm text-muted-foreground bg-muted/20 border border-dashed rounded-lg">
            No pending escalations found! Great job.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {analytics.recentEscalations.map((lead: any) => (
              <div
                key={lead.id}
                onClick={() => router.push(`/dashboard/leads/${lead.id}`)}
                className="group border border-border rounded-xl p-4 bg-muted/20 hover:bg-muted/40 hover:border-primary/30 transition-all cursor-pointer shadow-sm relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 h-1 w-full bg-rose-500 opacity-80" />
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                      {lead.name || "Anonymous Lead"}
                    </div>
                    <div className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider mt-0.5">
                      {lead.platform}
                    </div>
                  </div>
                  <span className="bg-rose-500/10 text-rose-500 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                    Escalated
                  </span>
                </div>

                <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Assigned Agent:</span>
                  <span className="font-medium text-foreground">
                    {lead.assignedAgent?.name || "Unassigned"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// =====================================
// STAT CARD COMPONENT
// =====================================
function StatCard({ title, value, icon: Icon, description, trend, colorClass, badge }: any) {
  return (
    <div className="relative border border-border bg-card rounded-xl p-5 shadow-sm hover:scale-[1.01] transition-transform duration-200">
      {badge && (
        <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-rose-500 animate-ping" />
      )}
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{title}</span>
        <div className={`p-2 rounded-lg shrink-0 ${colorClass}`}>
          <Icon size={18} />
        </div>
      </div>

      <div className="mt-4">
        <div className="text-3xl font-bold tracking-tight text-foreground">{value}</div>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
      </div>

      <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-[11px] text-muted-foreground">
        <span>{trend}</span>
      </div>
    </div>
  );
}
