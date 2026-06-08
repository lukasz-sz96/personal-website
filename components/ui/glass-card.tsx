import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef, ReactNode } from "react"
import { Glass } from "./glass"

interface GlassCardProps extends ComponentPropsWithoutRef<"div"> {
    children: ReactNode
    className?: string
    glow?: boolean
}

export const GlassCard = ({ children, className, glow, ...props }: GlassCardProps) => {
    return (
        <Glass
            className={cn(
                "relative overflow-hidden rounded-3xl",
                glow && "ring-2 ring-emerald-400/30 dark:ring-0",
                className
            )}
            {...props}
        >
            {children}
        </Glass>
    )
}
