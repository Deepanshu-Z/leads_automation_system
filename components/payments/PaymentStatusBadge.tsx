export default function PaymentStatusBadge({ status }: any) {
  const colors = {
    PENDING: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    PAID: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    FAILED: "bg-rose-500/10 text-rose-500 border-rose-500/20",
  };

  const style = colors[status as keyof typeof colors] || "bg-muted text-muted-foreground border-border";

  return (
    <span
      className={`
        inline-flex
        items-center
        px-2.5
        py-1
        rounded-full
        text-xs
        font-bold
        uppercase
        tracking-wider
        border
        ${style}
      `}
    >
      {status}
    </span>
  );
}
