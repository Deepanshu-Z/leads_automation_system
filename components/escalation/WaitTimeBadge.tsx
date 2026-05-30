export default function WaitTimeBadge({ escalatedAt }: any) {
  const minutes = Math.floor(
    (Date.now() - new Date(escalatedAt).getTime()) / 1000 / 60,
  );

  const danger = minutes > 60;

  return (
    <span
      className={`
        px-2
        py-1
        rounded

        ${danger ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}
      `}
    >
      {minutes} mins
    </span>
  );
}
