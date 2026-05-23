"use client";

import { useEffect, useState } from "react";

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
} from "recharts";

export default function DashboardPage() {
  const [analytics, setAnalytics] = useState<any>(null);

  // =====================================
  // FETCH ANALYTICS
  // =====================================

  async function fetchAnalytics() {
    const today = new Date().toISOString().split("T")[0];

    const res = await fetch(`/api/analytics/summary?date=${today}`);

    const data = await res.json();

    setAnalytics(data);
  }

  // =====================================
  // POLLING
  // =====================================

  useEffect(() => {
    fetchAnalytics();

    const interval = setInterval(
      fetchAnalytics,

      30000,
    );

    return () => clearInterval(interval);
  }, []);

  if (!analytics) {
    return <div>Loading...</div>;
  }

  // =====================================
  // BAR CHART DATA
  // =====================================

  const platformData = [
    {
      platform: "whatsapp",

      leads: analytics.whatsappLeads || 0,
    },

    {
      platform: "instagram",

      leads: analytics.instagramLeads || 0,
    },

    {
      platform: "facebook",

      leads: analytics.facebookLeads || 0,
    },
  ];

  // =====================================
  // PIE CHART DATA
  // =====================================

  const statusData = [
    {
      name: "NEW",

      value: analytics.newStatus || 0,
    },

    {
      name: "ENGAGED",

      value: analytics.engagedStatus || 0,
    },

    {
      name: "ESCALATED",

      value: analytics.escalatedStatus || 0,
    },

    {
      name: "CLOSED",

      value: analytics.closedStatus || 0,
    },
  ];

  return (
    <div className="p-6 space-y-8">
      {/* ================================= */}
      {/* STATS */}
      {/* ================================= */}

      <div className="grid grid-cols-4 gap-4">
        <StatCard title="New Leads Today" value={analytics.newLeads} />

        <StatCard title="Messages Sent Today" value={analytics.messagesSent} />

        <StatCard title="Payments Today" value={analytics.payments} />

        <StatCard title="Escalations Pending" value={analytics.escalations} />
      </div>

      {/* ================================= */}
      {/* CHARTS */}
      {/* ================================= */}

      <div className="grid grid-cols-2 gap-6">
        {/* BAR CHART */}

        <div className="border p-4 rounded-xl">
          <h2 className="mb-4 text-xl">Lead Volume by Platform</h2>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={platformData}>
                <XAxis dataKey="platform" />

                <YAxis />

                <Tooltip />

                <Bar dataKey="leads" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* PIE CHART */}

        <div className="border p-4 rounded-xl">
          <h2 className="mb-4 text-xl">Lead Status Breakdown</h2>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={120}
                >
                  {statusData.map(
                    (
                      _: any,

                      index: number,
                    ) => (
                      <Cell key={index} />
                    ),
                  )}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* ================================= */}
      {/* RECENT ESCALATIONS */}
      {/* ================================= */}

      <div className="border p-4 rounded-xl">
        <h2 className="mb-4 text-xl">Recent Escalations</h2>

        <div className="space-y-3">
          {analytics.recentEscalations?.map((lead: any) => (
            <div
              key={lead.id}
              className="
                  border
                  rounded-lg
                  p-3
                "
            >
              <div className="font-semibold">{lead.name || "Unknown"}</div>

              <div>{lead.platform}</div>

              <div>{lead.assignedAgent?.name || "Unassigned"}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// =====================================
// STAT CARD
// =====================================

function StatCard({
  title,

  value,
}: any) {
  return (
    <div className="border rounded-xl p-5">
      <div className="text-sm">{title}</div>

      <div className="text-4xl mt-2">{value}</div>
    </div>
  );
}
