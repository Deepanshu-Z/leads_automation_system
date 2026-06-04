export default function PaymentStatusBadge({ status }: any) {
  const colors = {
    PENDING: "bg-yellow-100 text-yellow-700",

    PAID: "bg-green-100 text-green-700",

    FAILED: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`
        px-3
        py-1
        rounded-full
        text-xs
        ${colors[status as keyof typeof colors]}
      `}
    >
      {status}
    </span>
  );
}
