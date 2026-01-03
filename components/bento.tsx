"use client"

import { GlassCard } from "@/components/ui/glass-card"
import Link from "next/link"
import {
    Globe,
    Sparkles,
    Code2,
    FileJson,
    Hexagon,
    Box,
    Terminal,
    Braces,
    Mail,
    ArrowUpRight
} from "lucide-react"

export function Bento() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-4xl p-4 md:p-6">
            <GlassCard className="col-span-2 md:row-span-2 p-6 md:p-8 flex flex-col justify-between min-h-[200px] md:min-h-0">
                <div>
                    <p className="text-white/60 text-xs md:text-sm font-medium tracking-wide uppercase mb-2">
                        Frontend Developer
                    </p>
                    <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-2 md:mb-3">
                        Łukasz
                    </h1>
                    <p className="text-white/70 text-base md:text-lg">
                        Crafting beautiful, performant web experiences
                    </p>
                </div>
                <div className="flex items-center gap-2 text-white/50 mt-4 md:mt-0">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm">4+ years of experience</span>
                </div>
            </GlassCard>

            <GlassCard glow className="col-span-1 p-4 md:p-5 flex flex-col justify-between min-h-[120px]">
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[rgb(var(--color-coral))] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[rgb(var(--color-coral))]" />
                    </span>
                    <span className="text-white/60 text-xs font-medium uppercase tracking-wide">
                        Status
                    </span>
                </div>
                <div>
                    <p className="text-white font-semibold text-sm md:text-base">Open to</p>
                    <p className="text-white font-semibold text-sm md:text-base">opportunities</p>
                </div>
            </GlassCard>

            <GlassCard className="col-span-1 p-4 md:p-5 flex flex-col justify-between min-h-[120px]">
                <Globe className="w-5 h-5 text-white/60" />
                <div>
                    <p className="text-white font-semibold text-sm md:text-base">Remote</p>
                    <p className="text-white/60 text-xs md:text-sm">Worldwide</p>
                </div>
            </GlassCard>

            <GlassCard className="col-span-2 p-4 md:p-5">
                <p className="text-white/60 text-xs font-medium uppercase tracking-wide mb-3 md:mb-4">
                    Tech Stack
                </p>
                <div className="flex items-center gap-3 md:gap-4 flex-wrap">
                    <TechIcon icon={Code2} label="React" />
                    <TechIcon icon={FileJson} label="TypeScript" />
                    <TechIcon icon={Braces} label="JavaScript" />
                    <TechIcon icon={Hexagon} label="Next.js" />
                    <TechIcon icon={Box} label="Docker" />
                    <TechIcon icon={Terminal} label="Python" />
                </div>
            </GlassCard>

            <Link href="/contact" className="col-span-2 group">
                <GlassCard glow className="h-full p-4 md:p-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 md:p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                            <Mail className="w-4 h-4 md:w-5 md:h-5 text-white/70 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div>
                            <p className="text-white font-semibold text-sm md:text-base">Get in touch</p>
                            <p className="text-white/50 text-xs md:text-sm">Let&apos;s work together</p>
                        </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </GlassCard>
            </Link>
        </div>
    )
}

function TechIcon({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
    return (
        <div className="group flex flex-col items-center gap-1">
            <div className="p-2 md:p-2.5 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:scale-110 group-hover:border-white/20">
                <Icon className="w-5 h-5 md:w-6 md:h-6 text-white/70 group-hover:text-white transition-colors duration-300" />
            </div>
            <span className="text-white/50 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                {label}
            </span>
        </div>
    )
}
