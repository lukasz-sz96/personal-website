"use client"

import { useState } from "react"
import { ChatBubble } from "./chat-bubble"
import { ChatPanel } from "./chat-panel"

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <ChatBubble onClick={() => setIsOpen(true)} isOpen={isOpen} />
      <ChatPanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
