"use client";

import { useState } from "react";
import RevenueCard from "@/components/payments/RevenueCard";
import PaymentTable from "@/components/payments/PaymentTable";
import { usePayments } from "@/lib/hooks/payments/usePayment";
import { Filter } from "lucide-react";

export default function PaymentsPage() {
  const [status, setStatus] = useState("");
  const { data, isLoading } = usePayments(status);

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="text-sm text-muted-foreground font-medium">Assembling payment ledgers...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <RevenueCard revenue={data?.totalRevenue || 0} />

      {/* Filter Toolbar */}
      <div className="flex items-center justify-between bg-card border border-border p-4 rounded-xl shadow-sm">
        <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          <Filter size={14} />
          Filter payments
        </div>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="text-xs bg-background border border-border px-3 py-2 rounded-lg text-foreground font-medium outline-none focus:border-primary transition-all cursor-pointer"
        >
          <option value="">All Transactions</option>
          <option value="PENDING">Pending</option>
          <option value="PAID">Paid</option>
          <option value="FAILED">Failed</option>
        </select>
      </div>

      <div className="space-y-2">
        <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Payments Ledger</h2>
        <PaymentTable payments={data?.payments || []} />
      </div>
    </div>
  );
}
