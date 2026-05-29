type Props = {
  status: string;
};

export default function StatusBadge({ status }: Props) {
  const colors: Record<string, string> = {
    NEW: "bg-blue-100 text-blue-700",

    CONTACTED: "bg-purple-100 text-purple-700",

    ENGAGED: "bg-teal-100 text-teal-700",

    QUALIFIED: "bg-cyan-100 text-cyan-700",

    INFO_COLLECTED: "bg-indigo-100 text-indigo-700",

    READY_TO_PAY: "bg-yellow-100 text-yellow-700",

    PAYMENT_SENT: "bg-orange-100 text-orange-700",

    PAID: "bg-green-100 text-green-700",

    ESCALATED: "bg-red-100 text-red-700",

    CONVERTED: "bg-emerald-100 text-emerald-700",

    CLOSED: "bg-gray-100 text-gray-700",

    LOST: "bg-black text-white",
  };

  return (
    <span
      className={`
        px-3
        py-1
        rounded-full
        text-xs
        font-medium
        ${colors[status] ?? "bg-gray-100 text-gray-700"}
      `}
    >
      {status}
    </span>
  );
}
