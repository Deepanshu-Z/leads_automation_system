"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import fetchleads from "@/lib/actions/fetch/leads/fetchLeads";

export default function LeadsPage() {
  const router = useRouter();

  const [leads, setLeads] = useState<any[]>([]);

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("");

  const [platform, setPlatform] = useState("");

  const [page, setPage] = useState(1);

  // =====================================
  // FETCH LEADS
  // =====================================
  const {
    data,

    isLoading,

    error,
  } = useQuery({
    queryKey: ["leads", page, search, status, platform],
    queryFn: () => fetchleads({ page, search, status, platform, setLeads }),
    staleTime: 1000 * 60,
  });

  if (error) {
    return <div className="p-6">couldnt find leads!!!...</div>;
  }

  //   if (isLoading) {
  //     return <div className="p-6">LOADING...</div>;
  //   }
  return (
    <div className="p-6">
      {/* ================================= */}
      {/* FILTERS */}
      {/* ================================= */}

      <div className="flex gap-4 mb-6">
        {/* SEARCH */}

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="
            Search lead
          "
          className="
            border
            p-2
          "
        />

        {/* STATUS */}

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="
            border
            p-2
          "
        >
          <option value="">All Status</option>

          <option value="NEW">NEW</option>

          <option value="ENGAGED">ENGAGED</option>

          <option value="PAID">PAID</option>

          <option value="ESCALATED">ESCALATED</option>
        </select>

        {/* PLATFORM */}

        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className="
            border
            p-2
          "
        >
          <option value="">All Platforms</option>

          <option value="whatsapp">WhatsApp</option>

          <option value="instagram">Instagram</option>

          <option value="facebook">Facebook</option>
        </select>
      </div>

      {/* ================================= */}
      {/* TABLE */}
      {/* ================================= */}

      <table className="w-full border">
        <thead>
          <tr className="border-b">
            <th>Name</th>

            <th>Phone</th>

            <th>Email</th>

            <th>Platform</th>

            <th>Status</th>

            <th>Assigned Agent</th>

            <th>Last Interaction</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr
              key={lead.id}
              onClick={() => router.push(`/dashboard/leads/${lead.id}`)}
              className="
                  border-b
                  cursor-pointer
                  hover:bg-gray-100
                "
            >
              <td>{lead.name}</td>

              <td>{lead.phone}</td>

              <td>{lead.email}</td>

              <td>{lead.platform}</td>

              <td>
                <StatusBadge status={lead.status} />
              </td>

              <td>{lead.assignedAgent?.name || "Unassigned"}</td>

              <td>{new Date(lead.updatedAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ================================= */}
      {/* PAGINATION */}
      {/* ================================= */}

      <div className="flex gap-4 mt-6">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="
            border
            px-4
            py-2
          "
        >
          Prev
        </button>

        <div>Page {page}</div>

        <button
          onClick={() => setPage((p) => p + 1)}
          className="
            border
            px-4
            py-2
          "
        >
          Next
        </button>
      </div>
    </div>
  );
}

// =====================================
// STATUS BADGE
// =====================================

function StatusBadge({ status }: any) {
  const colors: any = {
    NEW: "bg-blue-500",

    ENGAGED: "bg-teal-500",

    PAID: "bg-green-500",

    ESCALATED: "bg-orange-500",
  };

  return (
    <span
      className={`
        px-3
        py-1
        rounded-full
        text-white
        text-sm

        ${colors[status]}
        `}
    >
      {status}
    </span>
  );
}
