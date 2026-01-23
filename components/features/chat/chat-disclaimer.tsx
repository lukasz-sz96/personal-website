"use client"

import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"

interface ChatDisclaimerProps {
  visible: boolean
  onClose: () => void
}

export function ChatDisclaimer({ visible, onClose }: ChatDisclaimerProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, height: 0, marginTop: 0, marginBottom: 0 }}
          animate={{ opacity: 1, height: "auto", marginTop: 12, marginBottom: 8 }}
          exit={{ opacity: 0, height: 0, marginTop: 0, marginBottom: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "mx-4 px-3 py-2",
            "rounded-xl",
            "bg-amber-500/10",
            "border border-amber-500/20",
            "text-xs text-amber-200/80 leading-relaxed",
            "relative overflow-hidden"
          )}
        >
          <button
            onClick={onClose}
            className={cn(
              "absolute top-1.5 right-1.5",
              "size-5 rounded-md",
              "flex items-center justify-center",
              "text-amber-300/60 hover:text-amber-300",
              "hover:bg-amber-500/20",
              "transition-colors duration-150"
            )}
            aria-label="Close disclaimer"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <span className="font-medium text-amber-300">Hey!</span> I&apos;m an AI simulation of Łukasz — trained on his experience, projects, and preferences. For sensitive topics, I&apos;ll point you to the real Łukasz. <br /> Powered by{" "}
          <a
            href="https://github.com/lukasz-sz96/Polidex"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
          >
            Polidex
          </a>
          .
        </motion.div>
      )}
    </AnimatePresence>
  )
}
