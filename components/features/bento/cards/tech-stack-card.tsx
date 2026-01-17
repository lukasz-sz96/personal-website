import { LayoutGrid } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { DevIcon } from "@/components/ui/dev-icons"

const techStack = [
    "React",
    "TypeScript",
    "TailwindCSS",
    "NextJS",
    "FramerMotion",
    "Figma",
    "NodeJS",
    "HTML5",
]

export const TechStackCard = () => {
    return (
        <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">Tech Stack</span>
                <LayoutGrid className="w-5 h-5 text-gray-900 dark:text-white" aria-hidden="true" />
            </div>
            <div className="grid grid-cols-4 gap-3">
                {techStack.map((tech) => (
                    <div
                        key={tech}
                        className="group aspect-square rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                        title={tech}
                    >
                        <DevIcon name={tech} className="text-gray-700/70 dark:text-white/70 group-hover:text-gray-700 dark:group-hover:text-white transition-colors" />
                    </div>
                ))}
            </div>
        </GlassCard>
    )
}
