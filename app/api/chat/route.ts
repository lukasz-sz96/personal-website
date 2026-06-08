import { NextRequest, NextResponse } from "next/server"

const POLIDEX_API_URL = process.env.POLIDEX_API_URL || ""
const POLIDEX_API_KEY = process.env.POLIDEX_API_KEY || ""
const MAX_MESSAGE_LENGTH = 1000
const MAX_HISTORY_MESSAGES = 6
const UPSTREAM_TIMEOUT_MS = 12_000

const SYSTEM_PROMPT = `Answer questions about Łukasz Szczęsny using the provided project and profile notes. Write in first person only when the answer clearly comes from Łukasz's profile. Keep the tone plain and professional.

Guidelines:
- Keep responses concise (2-4 sentences unless more detail is needed)
- For salary/rate questions: "I'd prefer to discuss compensation directly — feel free to reach out via the contact page!"
- For personal life questions: Keep it light, redirect to professional topics
- For opinions on past employers: Stay positive and professional`

interface ChatMessage {
  role: "user" | "assistant"
  content: string
}

interface ChatRequest {
  message: string
  history?: ChatMessage[]
}

function cleanContent(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, MAX_MESSAGE_LENGTH) : ""
}

function cleanHistory(history: unknown): ChatMessage[] {
  if (!Array.isArray(history)) {
    return []
  }

  return history
    .filter((message): message is ChatMessage => {
      if (!message || typeof message !== "object") return false
      const role = (message as ChatMessage).role
      const content = (message as ChatMessage).content
      return (role === "user" || role === "assistant") && typeof content === "string"
    })
    .slice(-MAX_HISTORY_MESSAGES)
    .map((message) => ({
      role: message.role,
      content: cleanContent(message.content),
    }))
    .filter((message) => message.content.length > 0)
}

export async function POST(request: NextRequest) {
  let body: ChatRequest

  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON request body" },
      { status: 400 }
    )
  }

  const message = cleanContent(body.message)
  const history = cleanHistory(body.history)

  if (!message) {
    return NextResponse.json(
      { error: "Message is required" },
      { status: 400 }
    )
  }

  if (body.message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      { error: `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer` },
      { status: 400 }
    )
  }

  if (!POLIDEX_API_KEY || !POLIDEX_API_URL) {
    return NextResponse.json(
      { error: "Chat is not configured" },
      { status: 503 }
    )
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), UPSTREAM_TIMEOUT_MS)

  try {
    const contextMessages = history
      .map((m) => `${m.role === "user" ? "User" : "Łukasz"}: ${m.content}`)
      .join("\n")

    const fullQuery = contextMessages
      ? `Previous conversation:\n${contextMessages}\n\nUser: ${message}`
      : message

    const response = await fetch(`${POLIDEX_API_URL.replace(/\/$/, "")}/query`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": POLIDEX_API_KEY,
      },
      body: JSON.stringify({
        query: fullQuery,
        top_k: 5,
        system_prompt: SYSTEM_PROMPT,
      }),
      signal: controller.signal,
    })

    if (!response.ok) {
      console.error("Polidex API error:", response.status, await response.text())
      return NextResponse.json(
        { error: "Chat service is unavailable" },
        { status: 502 }
      )
    }

    const data = await response.json()

    return NextResponse.json({
      answer: typeof data.answer === "string" ? data.answer : "",
      sources: [], // We hide sources per design decision
    })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      { error: "Chat service timed out" },
      { status: error instanceof Error && error.name === "AbortError" ? 504 : 500 }
    )
  } finally {
    clearTimeout(timeout)
  }
}
