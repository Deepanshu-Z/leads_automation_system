import PaymentStatusBadge from "./PaymentStatusBadge";
import ResendButton from "./ResendButton";
import { MessageSquare, Camera, Globe } from "lucide-react";

export default function PaymentRow({ payment }: any) {
  // Helper to render platform icons
  const renderPlatformIcon = (plat: string) => {
    switch (plat?.toLowerCase()) {
      case "whatsapp":
        return <MessageSquare size={13} className="text-emerald-500 shrink-0" />;
      case "instagram":
        return <Camera size={13} className="text-pink-500 shrink-0" />;
      case "facebook":
        return <Globe size={13} className="text-blue-500 shrink-0" />;
      default:
        return <MessageSquare size={13} className="text-muted-foreground shrink-0" />;
    }
  };

  return (
    <tr className="hover:bg-muted/40 transition-colors duration-150 border-b border-border">
      <td className="px-6 py-4 font-semibold text-foreground">{payment.lead?.name || "Anonymous Lead"}</td>

      <td className="px-6 py-4 font-mono font-bold text-foreground text-xs">₹{payment.amount}</td>

      <td className="px-6 py-4">
        <span className="inline-flex items-center gap-1.5 bg-muted px-2 py-0.5 rounded text-xs font-semibold uppercase tracking-wider">
          {renderPlatformIcon(payment.lead?.platform)}
          <span>{payment.lead?.platform || "web"}</span>
        </span>
      </td>

      <td className="px-6 py-4">
        <PaymentStatusBadge status={payment.status} />
      </td>

      <td className="px-6 py-4 text-muted-foreground text-xs">{new Date(payment.createdAt).toLocaleString()}</td>

      <td className="px-6 py-4 text-muted-foreground text-xs">
        {payment.paidAt ? (
          <span className="font-semibold text-foreground">{new Date(payment.paidAt).toLocaleString()}</span>
        ) : (
          <span className="text-muted-foreground/45 font-medium">-</span>
        )}
      </td>

      <td className="px-6 py-4">
        {payment.status === "FAILED" && <ResendButton paymentId={payment.id} />}
      </td>
    </tr>
  );
}
