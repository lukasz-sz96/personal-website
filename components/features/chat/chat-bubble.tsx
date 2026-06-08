"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"

interface ChatBubbleProps {
  onClick: () => void
  isOpen: boolean
}

export function ChatBubble({ onClick, isOpen }: ChatBubbleProps) {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "fixed bottom-6 right-6 z-50",
        "size-14 rounded-full",
        "backdrop-blur-xl",
        "bg-white/10",
        "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]",
        "hover:bg-white/15",
        "transition-colors duration-200",
        "flex items-center justify-center",
        "group",
        "cursor-pointer",
        "outline-none focus-visible:ring-2 focus-visible:ring-teal-400/50"
      )}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: isOpen ? 0 : 1,
        opacity: isOpen ? 0 : 1,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      aria-label={isOpen ? "Close chat" : "Open chat about Łukasz"}
    >
      {/* Pulse ring animation */}
      <span
        className={cn(
          "absolute inset-0 rounded-full",
          "bg-[rgb(var(--color-coral)/0.25)]",
          "animate-ping",
          "opacity-75"
        )}
        style={{ animationDuration: "2s" }}
      />

      {/* Glow effect */}
      <span
        className={cn(
          "absolute inset-[-2px] rounded-full",
          "bg-gradient-to-br from-[rgb(var(--color-coral)/0.35)] via-transparent to-amber-400/20",
          "blur-sm",
          "group-hover:from-[rgb(var(--color-coral)/0.5)] group-hover:to-amber-400/30",
          "transition-all duration-300"
        )}
      />

      {/* Icon container */}
      <span className="relative flex items-center justify-center">
        {/* Chat icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white"
        >
          <path
            d="M12 3C7.03 3 3 6.58 3 11C3 13.16 4.07 15.1 5.75 16.5L5 20L8.5 18.25C9.6 18.72 10.77 19 12 19C16.97 19 21 15.42 21 11C21 6.58 16.97 3 12 3Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="8" cy="11" r="1" fill="currentColor" />
          <circle cx="12" cy="11" r="1" fill="currentColor" />
          <circle cx="16" cy="11" r="1" fill="currentColor" />
        </svg>
      </span>

      {/* Tooltip */}
      <span
        className={cn(
          "absolute right-full mr-3 top-1/2 -translate-y-1/2",
          "px-3 py-1.5 rounded-lg",
          "bg-gray-900/90 backdrop-blur-sm",
          "text-white text-sm font-medium whitespace-nowrap",
          "opacity-0 group-hover:opacity-100",
          "translate-x-2 group-hover:translate-x-0",
          "transition-all duration-200",
          "pointer-events-none",
          "shadow-lg"
        )}
      >
        Ask about Łukasz
        <span
          className={cn(
            "absolute left-full top-1/2 -translate-y-1/2",
            "border-4 border-transparent border-l-gray-900/90"
          )}
        />
      </span>
    </motion.button>
  )
}
