"use client"

import { motion } from "motion/react"
import Markdown from "react-markdown"
import { cn } from "@/lib/utils"
import type { Message } from "./use-chat"

interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user"

  return (
    <motion.div
      className={cn(
        "flex",
        isUser ? "justify-end" : "justify-start"
      )}
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <div
        className={cn(
          "max-w-[85%] px-4 py-2.5 rounded-2xl",
          "text-sm leading-relaxed",
          isUser
            ? [
                "bg-gradient-to-br from-teal-500 to-teal-600",
                "text-white",
                "rounded-br-md",
                "shadow-lg shadow-teal-500/20",
              ]
            : [
                "bg-white/10",
                "text-white/90",
                "rounded-bl-md",
                "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]",
              ]
        )}
      >
        {isUser ? (
          message.content
        ) : (
          <Markdown
            components={{
              p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
              strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
              em: ({ children }) => <em className="italic">{children}</em>,
              ul: ({ children }) => <ul className="list-disc list-inside mb-2 last:mb-0 space-y-1">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal list-inside mb-2 last:mb-0 space-y-1">{children}</ol>,
              li: ({ children }) => <li>{children}</li>,
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-300 hover:text-teal-200 underline underline-offset-2"
                >
                  {children}
                </a>
              ),
              code: ({ children }) => (
                <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs font-mono">{children}</code>
              ),
              pre: ({ children }) => (
                <pre className="bg-white/10 p-2 rounded-lg overflow-x-auto mb-2 last:mb-0 text-xs">{children}</pre>
              ),
            }}
          >
            {message.content}
          </Markdown>
        )}
      </div>
    </motion.div>
  )
}

export function TypingIndicator() {
  return (
    <motion.div
      className="flex justify-start"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div
        className={cn(
          "px-4 py-3 rounded-2xl rounded-bl-md",
          "bg-white/10",
          "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]",
          "flex items-center gap-1"
        )}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="size-2 rounded-full bg-white/50"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}
