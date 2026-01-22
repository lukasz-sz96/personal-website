"use client"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface ChatInputProps {
  onSend: (message: string) => void
  disabled?: boolean
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [value, setValue] = useState("")
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = () => {
    if (!value.trim() || disabled) return
    onSend(value)
    setValue("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  // Auto-resize textarea
  useEffect(() => {
    const textarea = inputRef.current
    if (textarea) {
      textarea.style.height = "auto"
      textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`
    }
  }, [value])

  return (
    <div
      className={cn(
        "px-4 py-3",
        "border-t border-white/10"
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2",
          "p-2 rounded-xl",
          "bg-white/5",
          "border border-white/10",
          "focus-within:border-white/20",
          "transition-colors duration-150"
        )}
      >
        <textarea
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask me anything..."
          disabled={disabled}
          rows={1}
          className={cn(
            "flex-1 resize-none",
            "bg-transparent",
            "text-sm text-white placeholder:text-white/40",
            "outline-none",
            "max-h-[120px]",
            "disabled:opacity-50"
          )}
        />
        <button
          onClick={handleSubmit}
          disabled={disabled || !value.trim()}
          className={cn(
            "size-8 rounded-lg shrink-0",
            "flex items-center justify-center",
            "bg-teal-500 hover:bg-teal-400",
            "text-white",
            "transition-colors duration-150",
            "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-teal-500",
            "outline-none focus-visible:ring-2 focus-visible:ring-teal-400/50"
          )}
          aria-label="Send message"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <p className="text-[10px] text-white/30 mt-2 text-center">
        Press Enter to send • Shift+Enter for new line
      </p>
    </div>
  )
}
