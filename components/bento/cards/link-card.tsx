import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"

interface LinkCardProps {
    href: string
    icon: React.ElementType
    iconColor: string
    iconBg: string
    title: string
    subtitle: string
}

export const LinkCard = ({ href, icon: Icon, iconColor, iconBg, title, subtitle }: LinkCardProps) => {
    return (
        <Link href={href}>
            <GlassCard className="p-6 h-full group cursor-pointer hover:scale-[1.02] transition-transform">
                <div className="flex items-start justify-between mb-12">
                    <div className={`p-3 rounded-xl ${iconBg}`}>
                        <Icon className={`w-5 h-5 ${iconColor}`} />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-300 dark:text-white/30 group-hover:text-gray-500 dark:group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-white/50">{subtitle}</p>
            </GlassCard>
        </Link>
    )
}
