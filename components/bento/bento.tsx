"use client"

import { HeroCard } from "./cards/hero-card"
import { StatusCard } from "./cards/status-card"
import { TechStackCard } from "./cards/tech-stack-card"
import { TerminalCard } from "./cards/terminal-card"
import { BottomSection } from "./sections/bottom-section"

export const Bento = () => {
    return (
        <div className="w-full max-w-6xl p-4 md:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <HeroCard />
                <StatusCard />
                <TechStackCard />
                <TerminalCard />
                <BottomSection />
            </div>
        </div>
    )
}
