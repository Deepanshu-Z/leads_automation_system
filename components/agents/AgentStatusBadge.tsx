export default function AgentStatusBadge({ online }: { online: boolean }) {
  return (
    <span className={online ? "text-green-600" : "text-red-600"}>
      {online ? "Online" : "Offline"}
    </span>
  );
}
