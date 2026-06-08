import { GlassCard } from "@/components/ui/glass-card"

export const TerminalCard = () => {
    return (
        <GlassCard className="p-6 !bg-gray-900/95 dark:!bg-gray-900/95 !border-gray-800">
            <div className="font-mono text-sm">
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                    <span className="text-pink-400">→</span>
                    <span className="text-gray-500">~</span>
                    <span className="text-white">npm run build</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span className="text-emerald-400">Build passing</span>
                    <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse" />
                </div>
            </div>
        </GlassCard>
    )
}
