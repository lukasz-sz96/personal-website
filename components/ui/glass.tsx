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
                "glass-surface",
                className
            )}
            style={style}
            {...props}
        >
            {children}
        </div>
    )
}
