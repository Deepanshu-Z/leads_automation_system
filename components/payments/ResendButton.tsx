"use client";

import { useResendPaymentLink } from "@/lib/hooks/payments/useResendPaymentLink";
import { Send, Loader2 } from "lucide-react";

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
        inline-flex
        items-center
        gap-1.5
        px-3
        py-1.5
        rounded-lg
        bg-primary
        hover:bg-primary/95
        text-primary-foreground
        text-[10px]
        font-bold
        uppercase
        tracking-wider
        shadow-sm
        transition-all
        active:scale-95
        disabled:opacity-50
        cursor-pointer
      "
    >
      {resendMutation.isPending ? (
        <Loader2 size={11} className="animate-spin" />
      ) : (
        <Send size={11} />
      )}
      <span>{resendMutation.isPending ? "Sending..." : "Resend"}</span>
    </button>
  );
}
