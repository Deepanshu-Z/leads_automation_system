"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import fetchleads from "@/lib/actions/leads/fetchLeads";
import {
  Search,
  MessageSquare,
  Camera,
  Globe,
  ChevronLeft,
  ChevronRight,
  Filter,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LeadsPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [platform, setPlatform] = useState("");
  const [page, setPage] = useState(1);

  // =====================================
  // FETCH LEADS
  // =====================================
  const { data, isLoading, error } = useQuery({
    queryKey: ["leads", page, search, status, platform],
    queryFn: () => fetchleads({ page, search, status, platform }),
    staleTime: 1000 * 60,
  });

  const leads = data?.data || [];

  if (error) {
    return (
      <div className="p-6 text-center text-rose-500 font-semibold bg-rose-500/10 border border-rose-500/20 rounded-xl">
        Unable to load leads directory. Please refresh or try again.
      </div>
    );
  }

  // Helper to render platform icons
  const renderPlatformIcon = (plat: string) => {
    switch (plat?.toLowerCase()) {
      case "whatsapp":
        return (
          <MessageSquare size={16} className="text-emerald-500 shrink-0" />
        );
      case "instagram":
        return <Camera size={16} className="text-pink-500 shrink-0" />;
      case "facebook":
        return <Globe size={16} className="text-blue-500 shrink-0" />;
      default:
        return (
          <MessageSquare size={16} className="text-muted-foreground shrink-0" />
        );
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* ================================= */}
      {/* FILTERS & SEARCH CONTAINER */}
      {/* ================================= */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-card border border-border p-4 rounded-xl shadow-sm">
        {/* SEARCH BOX */}
        <div className="relative w-full md:w-80">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-muted-foreground">
            <Search size={16} />
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            placeholder="Search leads name or phone..."
            className="w-full pl-9 pr-4 py-2 text-sm bg-background border border-border rounded-lg placeholder-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>

        {/* SELECT SYSTEM */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            <Filter size={14} />
            Filter by:
          </div>

          {/* STATUS FILTER */}
          <select
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
              setPage(1);
            }}
            className="text-xs bg-background border border-border px-3 py-2 rounded-lg text-foreground font-medium outline-none focus:border-primary transition-all cursor-pointer"
          >
            <option value="">All Statuses</option>
            <option value="NEW">New</option>
            <option value="ENGAGED">Engaged</option>
            <option value="PAID">Paid</option>
            <option value="ESCALATED">Escalated</option>
          </select>

          {/* PLATFORM FILTER */}
          <select
            value={platform}
            onChange={(e) => {
              setPlatform(e.target.value);
              setPage(1);
            }}
            className="text-xs bg-background border border-border px-3 py-2 rounded-lg text-foreground font-medium outline-none focus:border-primary transition-all cursor-pointer"
          >
            <option value="">All Platforms</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="instagram">Instagram</option>
            <option value="facebook">Facebook</option>
          </select>
        </div>
      </div>

      {/* ================================= */}
      {/* DATA TABLE CONTAINER */}
      {/* ================================= */}
      <div className="border border-border bg-card rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border bg-muted/40 text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Phone</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Platform</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Assigned Agent</th>
                <th className="px-6 py-4">Last Interaction</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-border text-sm">
              {isLoading ? (
                <tr>
                  <td colSpan={7} className="px-6 py-10 text-center">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
                      <span className="text-xs text-muted-foreground font-medium">
                        Loading leads directory...
                      </span>
                    </div>
                  </td>
                </tr>
              ) : leads.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="px-6 py-10 text-center text-muted-foreground"
                  >
                    No leads found matching current filter query.
                  </td>
                </tr>
              ) : (
                leads.map((lead: any) => (
                  <tr
                    key={lead.id}
                    onClick={() => router.push(`/dashboard/leads/${lead.id}`)}
                    className="hover:bg-muted/40 cursor-pointer transition-colors duration-150"
                  >
                    <td className="px-6 py-4 font-semibold text-foreground truncate max-w-[180px]">
                      {lead.name || "Anonymous User"}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground font-mono text-xs">
                      {lead.sourceId || "N/A"}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground truncate max-w-[180px]">
                      {lead.email || "N/A"}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-2 bg-muted px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wider">
                        {renderPlatformIcon(lead.platform)}
                        <span>{lead.platform}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={lead.status} />
                    </td>
                    <td className="px-6 py-4">
                      {lead.agent?.name ? (
                        <span className="inline-flex items-center gap-1.5 text-xs text-foreground font-medium">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          {lead.agent.name}
                        </span>
                      ) : (
                        <span className="inline-flex items-center text-xs text-muted-foreground font-normal border border-dashed border-border px-2 py-0.5 rounded">
                          Unassigned
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground text-xs font-medium">
                      {new Date(lead.updatedAt).toLocaleString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================================= */}
      {/* PAGINATION COMPONENT */}
      {/* ================================= */}
      <div className="flex items-center justify-between bg-card border border-border p-4 rounded-xl shadow-sm text-sm">
        <div className="text-xs text-muted-foreground font-medium">
          Showing page{" "}
          <span className="text-foreground font-semibold">{page}</span> of leads
          directory
        </div>

        <div className="flex items-center gap-2">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            className="inline-flex items-center justify-center p-2 rounded-lg border border-border text-muted-foreground hover:bg-muted hover:text-foreground disabled:opacity-40 disabled:pointer-events-none transition-colors"
            title="Previous Page"
          >
            <ChevronLeft size={16} />
          </button>

          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={leads.length < 10} // Assuming 10 items per page limit
            className="inline-flex items-center justify-center p-2 rounded-lg border border-border text-muted-foreground hover:bg-muted hover:text-foreground disabled:opacity-40 disabled:pointer-events-none transition-colors"
            title="Next Page"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

// =====================================
// STATUS BADGE COMPONENT
// =====================================
function StatusBadge({ status }: any) {
  const colors: any = {
    NEW: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    ENGAGED: "bg-teal-500/10 text-teal-500 border-teal-500/20",
    PAID: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    ESCALATED: "bg-rose-500/10 text-rose-500 border-rose-500/20",
  };

  const colorStyle =
    colors[status] || "bg-muted text-muted-foreground border-border";

  return (
    <span
      className={`
        px-2.5
        py-1
        rounded-full
        text-xs
        font-bold
        uppercase
        tracking-wider
        border
        ${colorStyle}
      `}
    >
      {status}
    </span>
  );
}
