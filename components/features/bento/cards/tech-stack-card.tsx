import { Braces, Layers, Play, Pen, Compass, LayoutGrid } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"

export const TechStackCard = () => {
    return (
        <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">Tech Stack</span>
                <LayoutGrid className="w-5 h-5 text-blue-400" />
            </div>
            <div className="grid grid-cols-4 gap-3">
                <TechIcon icon={Braces} />
                <TechIcon label="TS" />
                <TechIcon icon={Layers} />
                <TechIcon icon={Play} />
                <TechIcon icon={Pen} />
                <TechIcon icon={Compass} />
                <TechIcon icon={LayoutGrid} />
                <TechIcon label="HTML" />
            </div>
        </GlassCard>
    )
}

const TechIcon = ({ icon: Icon, label }: { icon?: React.ElementType; label?: string }) => {
    return (
        <div className="aspect-square rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
            {Icon ? (
                <Icon className="w-5 h-5 text-gray-700 dark:text-white/70" />
            ) : (
                <span className="text-xs font-bold text-gray-700 dark:text-white/70">{label}</span>
            )}
        </div>
    )
}
