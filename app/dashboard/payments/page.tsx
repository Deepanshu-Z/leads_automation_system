"use client";

import { useState } from "react";

import RevenueCard from "@/components/payments/RevenueCard";

import PaymentTable from "@/components/payments/PaymentTable";
import { usePayments } from "@/lib/hooks/payments/usePayment";

export default function PaymentsPage() {
  const [status, setStatus] = useState("");

  const { data, isLoading } = usePayments(status);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <RevenueCard revenue={data.totalRevenue} />

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="">All</option>

        <option value="PENDING">Pending</option>

        <option value="PAID">Paid</option>

        <option value="FAILED">Failed</option>
      </select>

      <PaymentTable payments={data.payments} />
    </div>
  );
}
