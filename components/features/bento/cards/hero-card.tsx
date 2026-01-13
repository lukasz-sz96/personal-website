import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"

export const HeroCard = () => {
    return (
        <GlassCard className="h-full p-8 md:p-12 flex flex-col justify-between min-h-[400px] lg:min-h-[500px]">
            <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/20 border border-emerald-200 dark:border-emerald-500/30 mb-8">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-emerald-700 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                        Available for work
                    </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white tracking-tight mb-2">
                    Digital
                </h1>
                <h1 className="text-5xl md:text-7xl font-serif italic text-gray-900 dark:text-white tracking-tight mb-6">
                    Craftsman.
                </h1>
                <p className="text-gray-600 dark:text-white/70 text-lg md:text-xl max-w-md leading-relaxed">
                    I build accessible, pixel-perfect, and performant web experiences. Focused on motion and micro-interactions.
                </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                >
                    View Projects
                    <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 text-gray-900 dark:text-white rounded-full font-medium hover:bg-gray-50 dark:hover:bg-white/20 transition-colors"
                >
                    More about me
                </Link>
            </div>
        </GlassCard>
    )
}
