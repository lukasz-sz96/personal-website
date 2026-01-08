import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef, ReactNode } from "react"

interface GlassProps extends ComponentPropsWithoutRef<"div"> {
    children: ReactNode
    className?: string
}

export const Glass = ({ children, className, ...props }: GlassProps) => {
    return (
        <div
            className={cn(
                "backdrop-blur-xl border transition-all duration-300",
                "bg-white/80 border-white/50",
                "dark:bg-white/10 dark:border-white/20",
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}
