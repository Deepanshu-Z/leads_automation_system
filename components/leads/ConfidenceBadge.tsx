import { Sparkles } from "lucide-react";

export default function ConfidenceBadge({ intent, confidence }: any) {
  const pct = (confidence * 100).toFixed(0);
  const isHigh = confidence >= 0.85;
  const isMed = confidence >= 0.6 && confidence < 0.85;

  const colorClass = isHigh
    ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    : isMed
      ? "text-amber-400 bg-amber-500/10 border-amber-500/20"
      : "text-rose-400 bg-rose-500/10 border-rose-500/20";

  return (
    <div
      className={`
        inline-flex
        items-center
        gap-1.5
        px-2
        py-0.5
        rounded-md
        border
        text-[10px]
        font-semibold
        mt-2
        ${colorClass}
      `}
    >
      <Sparkles size={10} className="shrink-0" />
      <span className="uppercase tracking-wider">{intent || "UNKNOWN_INTENT"}</span>
      <span className="opacity-50">•</span>
      <span>{pct}% Match</span>
    </div>
  );
}

