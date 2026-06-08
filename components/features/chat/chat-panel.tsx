"use client"

import { motion, AnimatePresence } from "motion/react"
import { useState, useEffect, useCallback, useRef } from "react"
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

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",")

export function ChatPanel({ isOpen, onClose }: ChatPanelProps) {
  const { messages, isLoading, sendMessage } = useChat()
  const [showDisclaimer, setShowDisclaimer] = useState(true)
  const panelRef = useRef<HTMLDivElement>(null)
  const previouslyFocusedRef = useRef<HTMLElement | null>(null)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === "Escape") {
        onClose()
        return
      }

      if (e.key !== "Tab") {
        return
      }

      const panel = panelRef.current
      if (!panel) return

      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      ).filter((element) => element.offsetParent !== null)

      if (focusable.length === 0) {
        e.preventDefault()
        panel.focus()
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    },
    [isOpen, onClose]
  )

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  useEffect(() => {
    const inertTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-chat-inert-target]")
    )

    if (!isOpen) {
      return
    }

    previouslyFocusedRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null

    inertTargets.forEach((target) => {
      target.setAttribute("aria-hidden", "true")
      ;(target as HTMLElement & { inert?: boolean }).inert = true
    })

    const focusTimer = window.setTimeout(() => {
      const firstFocusable = panelRef.current?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR)
      ;(firstFocusable ?? panelRef.current)?.focus()
    }, 0)

    return () => {
      window.clearTimeout(focusTimer)
      inertTargets.forEach((target) => {
        target.removeAttribute("aria-hidden")
        ;(target as HTMLElement & { inert?: boolean }).inert = false
      })
      previouslyFocusedRef.current?.focus()
      previouslyFocusedRef.current = null
    }
  }, [isOpen])

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
              // Surface
              "chat-panel-surface",
              // Flex layout
              "flex flex-col overflow-hidden",
              // Safe area for mobile
              "safe-area-panel"
            )}
            ref={panelRef}
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
            tabIndex={-1}
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
