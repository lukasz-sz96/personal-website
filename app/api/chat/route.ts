import { NextRequest, NextResponse } from "next/server"

const POLIDEX_API_URL = process.env.POLIDEX_API_URL || "http://localhost:8000/api/v1"
const POLIDEX_API_KEY = process.env.POLIDEX_API_KEY || ""

const SYSTEM_PROMPT = `You are an AI simulation of Łukasz Szczęsny. Respond in first person, casual but professional tone.

Guidelines:
- Keep responses concise but friendly (2-4 sentences unless more detail is needed)
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

export async function POST(request: NextRequest) {
  try {
    const body: ChatRequest = await request.json()
    const { message, history = [] } = body

    if (!message?.trim()) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      )
    }

    if (!POLIDEX_API_KEY) {
      return NextResponse.json({
        answer: "I'm not fully configured yet — Polidex API key is missing. Please set up the POLIDEX_API_KEY environment variable.",
        sources: [],
      })
    }

    // Build context from history
    const contextMessages = history
      .slice(-6) // Last 6 messages for context
      .map((m) => `${m.role === "user" ? "User" : "Łukasz"}: ${m.content}`)
      .join("\n")

    const fullQuery = contextMessages
      ? `Previous conversation:\n${contextMessages}\n\nUser: ${message}`
      : message

    const response = await fetch(`${POLIDEX_API_URL}/query`, {
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
    })

    if (!response.ok) {
      console.error("Polidex API error:", response.status, await response.text())
      throw new Error("Failed to get response from Polidex")
    }

    const data = await response.json()

    return NextResponse.json({
      answer: data.answer,
      sources: [], // We hide sources per design decision
    })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    )
  }
}
