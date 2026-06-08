"use client"

import { motion, AnimatePresence } from "motion/react"
import { useState, useEffect, useCallback } from "react"
import { cn } from "@/lib/utils"
import { useBodyScrollLock } from "@/lib/hooks"
import { ChatHeader } from "./chat-header"
import { ChatDisclaimer } from "./chat-disclaimer"
import { ChatSuggestions } from "./chat-suggestions"
import { ChatMessages } from "./chat-messages"
import { ChatInput } from "./chat-input"
import { useChat } from "./use-chat"

interface ChatPanelProps {
  isOpen: boolean
  onClose: () => void
}

export function ChatPanel({ isOpen, onClose }: ChatPanelProps) {
  const { messages, isLoading, sendMessage } = useChat()
  const [showDisclaimer, setShowDisclaimer] = useState(true)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    },
    [isOpen, onClose]
  )

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  // Lock body scroll on mobile when open
  useBodyScrollLock(isOpen, true)

  const showSuggestions = messages.length === 0

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Mobile backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Chat panel */}
          <motion.div
            className={cn(
              // Mobile: full screen
              "fixed inset-0 z-50",
              "md:inset-auto md:bottom-24 md:right-6",
              // Desktop: fixed size panel
              "md:w-[380px] md:h-[520px]",
              "md:rounded-2xl",
              // Glass effect
              "backdrop-blur-xl",
              "bg-gray-900/90 md:bg-gray-900/80",
              "md:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]",
              "md:shadow-2xl",
              // Flex layout
              "flex flex-col overflow-hidden",
              // Safe area for mobile
              "pt-safe-top pb-safe-bottom"
            )}
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Chat about Łukasz"
          >
            {/* Glow effect - desktop only */}
            <div
              className={cn(
                "hidden md:block",
                "absolute inset-0 -z-10 rounded-2xl",
                "bg-gradient-to-br from-teal-500/10 via-transparent to-amber-500/10",
                "blur-xl"
              )}
            />

            <ChatHeader onClose={onClose} />

            <ChatDisclaimer visible={showDisclaimer} onClose={() => setShowDisclaimer(false)} />

            {showSuggestions ? (
              <ChatSuggestions onSelect={sendMessage} disabled={isLoading} />
            ) : null}

            <ChatMessages messages={messages} isLoading={isLoading} />

            <ChatInput onSend={sendMessage} disabled={isLoading} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
