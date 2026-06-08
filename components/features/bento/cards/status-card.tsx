import { Globe } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

export const StatusCard = () => {
  return (
    <GlassCard className="p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-white/50">
          Current Status
        </span>
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Open to</h3>
      <p className="text-2xl text-gray-400 dark:text-white/50 mb-6">work</p>
      <div className="flex items-center gap-2 text-gray-500 dark:text-white/60">
        <Globe className="w-4 h-4" />
        <span className="text-sm">Remote / Worldwide</span>
      </div>
    </GlassCard>
  );
};
