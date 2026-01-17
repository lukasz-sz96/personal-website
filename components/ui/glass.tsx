import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef, ReactNode } from "react"

interface GlassProps extends ComponentPropsWithoutRef<"div"> {
    children: ReactNode
    className?: string
}

export const Glass = ({ children, className, style, ...props }: GlassProps) => {
    return (
        <div
            className={cn(
                "relative",
                "backdrop-blur-xl",
                "bg-white/80 dark:bg-white/10",
                "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.5)]",
                "dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]",
                className
            )}
            style={style}
            {...props}
        >
            {children}
        </div>
    )
}
