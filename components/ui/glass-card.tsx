import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef, ReactNode } from "react"

interface GlassCardProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
  glow?: boolean
}

export function GlassCard({ children, className, glow, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl backdrop-blur-xl border transition-all duration-300",
        "bg-white/80 border-white/50 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10",
        "dark:bg-white/10 dark:border-white/20 dark:shadow-none dark:hover:bg-white/[0.15] dark:hover:border-white/30",
        glow && "dark:glow-coral ring-2 ring-emerald-400/30 dark:ring-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
