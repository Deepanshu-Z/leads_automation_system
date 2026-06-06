import { TrendingUp, IndianRupee } from "lucide-react";

export default function RevenueCard({ revenue }: any) {
  return (
    <div
      className="
        relative
        border
        border-border
        bg-card
        rounded-xl
        p-5
        shadow-sm
        mb-6
        overflow-hidden
      "
    >
      <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-emerald-500/5 to-transparent pointer-events-none" />

      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Gross Total Revenue</span>
        <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 shrink-0">
          <IndianRupee size={16} />
        </div>
      </div>

      <div className="mt-4">
        <div className="text-3xl font-bold tracking-tight text-foreground">₹{revenue}</div>
        <p className="text-xs text-muted-foreground mt-1">Sum of all successful client invoice payments</p>
      </div>

      <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-[11px] text-emerald-500 font-semibold">
        <span className="flex items-center gap-1">
          <TrendingUp size={12} />
          <span>Real-time settlements active</span>
        </span>
      </div>
    </div>
  );
}
