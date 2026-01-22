"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { ChatMessage, TypingIndicator } from "./chat-message"
import type { Message } from "./use-chat"

interface ChatMessagesProps {
  messages: Message[]
  isLoading: boolean
}

export function ChatMessages({ messages, isLoading }: ChatMessagesProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isLoading])

  return (
    <div
      ref={scrollRef}
      data-lenis-prevent
      className={cn(
        "flex-1 min-h-0 overflow-y-auto",
        "px-4 py-3",
        "space-y-3",
        "scrollbar-none"
      )}
    >
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
      {isLoading && <TypingIndicator />}
      <div ref={bottomRef} />
    </div>
  )
}
