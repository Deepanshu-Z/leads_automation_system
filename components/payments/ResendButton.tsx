"use client";

import { useResendPaymentLink } from "@/lib/hooks/payments/useResendPaymentLink";

type Props = {
  paymentId: number;
};

export default function ResendButton({ paymentId }: Props) {
  const resendMutation = useResendPaymentLink();

  return (
    <button
      onClick={() => resendMutation.mutate(paymentId)}
      disabled={resendMutation.isPending}
      className="
        bg-blue-500
        text-white
        px-3
        py-1
        rounded
        hover:bg-blue-600
        disabled:opacity-50
      "
    >
      {resendMutation.isPending ? "Sending..." : "Resend Link"}
    </button>
  );
}
