"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"

const SUGGESTIONS = [
  "What's your tech stack?",
  "What experience do you have?",
  "Are you open to remote work?",
  "What projects excite you?",
]

interface ChatSuggestionsProps {
  onSelect: (suggestion: string) => void
  disabled?: boolean
}

export function ChatSuggestions({ onSelect, disabled }: ChatSuggestionsProps) {
  return (
    <div className="px-4 py-3">
      <p className="text-xs text-white/40 mb-2 font-medium">Quick questions</p>
      <div className="flex flex-wrap gap-2">
        {SUGGESTIONS.map((suggestion, index) => (
          <motion.button
            key={suggestion}
            onClick={() => onSelect(suggestion)}
            disabled={disabled}
            className={cn(
              "px-3 py-1.5",
              "rounded-full",
              "text-xs font-medium",
              "bg-white/5 hover:bg-white/10",
              "border border-white/10 hover:border-white/20",
              "text-white/70 hover:text-white",
              "transition-all duration-150",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "outline-none focus-visible:ring-2 focus-visible:ring-teal-400/50"
            )}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 + 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {suggestion}
          </motion.button>
        ))}
      </div>
    </div>
  )
}
