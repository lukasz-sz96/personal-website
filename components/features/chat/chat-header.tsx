"use client"

import { cn } from "@/lib/utils"

interface ChatHeaderProps {
  onClose: () => void
}

export function ChatHeader({ onClose }: ChatHeaderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between",
        "px-4 py-3",
        "border-b border-white/10"
      )}
    >
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div
          className={cn(
            "size-9 rounded-full",
            "bg-gradient-to-br from-teal-400/80 to-amber-400/60",
            "flex items-center justify-center",
            "text-sm font-semibold text-white",
            "shadow-lg shadow-teal-500/20"
          )}
        >
          Ł
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">AI Łukasz</h2>
          <p className="text-xs text-white/50">Usually replies instantly</p>
        </div>
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        className={cn(
          "size-8 rounded-lg",
          "flex items-center justify-center",
          "text-white/50 hover:text-white",
          "hover:bg-white/10",
          "transition-colors duration-150",
          "outline-none focus-visible:ring-2 focus-visible:ring-teal-400/50"
        )}
        aria-label="Close chat"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M18 6L6 18M6 6L18 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  )
}
