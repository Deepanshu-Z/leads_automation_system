export default function AgentStatusBadge({ online }: { online: boolean }) {
  return (
    <span
      className={`
        inline-flex
        items-center
        gap-1.5
        px-2.5
        py-1
        rounded-full
        text-xs
        font-bold
        uppercase
        tracking-wider
        border
        ${
          online
            ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
            : "bg-rose-500/10 text-rose-500 border-rose-500/20"
        }
      `}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${online ? "bg-emerald-500 animate-pulse" : "bg-rose-500"}`} />
      <span>{online ? "Online" : "Offline"}</span>
    </span>
  );
}

