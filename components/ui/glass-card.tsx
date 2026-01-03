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
        "relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md backdrop-saturate-150 border transition-all duration-300 hover:bg-white/[0.15]",
        glow
          ? "glow-coral"
          : "border-white/20 shadow-glass hover:shadow-glass-hover hover:border-white/30",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
