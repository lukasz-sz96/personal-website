"use client"

import { useEffect, useCallback } from "react"
import { usePathname, useRouter } from "next/navigation"
import { useTransitionRouter } from "next-view-transitions"

const NAV_ORDER = ["/", "/projects", "/about", "/contact"]

export function KeyboardNav() {
  const pathname = usePathname()
  const router = useRouter()
  const transitionRouter = useTransitionRouter()

  const navigate = useCallback((direction: "left" | "right") => {
    const currentIndex = NAV_ORDER.indexOf(pathname)
    if (currentIndex === -1) return

    let nextIndex: number
    if (direction === "left") {
      nextIndex = currentIndex - 1
      if (nextIndex < 0) nextIndex = NAV_ORDER.length - 1
    } else {
      nextIndex = currentIndex + 1
      if (nextIndex >= NAV_ORDER.length) nextIndex = 0
    }

    const nextPath = NAV_ORDER[nextIndex]

    const transitionDirection = nextIndex > currentIndex ? "left" : "right"
    if (currentIndex === 0 && nextIndex === NAV_ORDER.length - 1) {
      document.documentElement.dataset.transition = "right"
    } else if (currentIndex === NAV_ORDER.length - 1 && nextIndex === 0) {
      document.documentElement.dataset.transition = "left"
    } else {
      document.documentElement.dataset.transition = transitionDirection
    }

    // Check if Firefox (View Transitions support issues)
    const isFirefox = navigator.userAgent.toLowerCase().includes("firefox")

    if (isFirefox) {
      router.push(nextPath)
    } else {
      transitionRouter.push(nextPath)
    }
  }, [pathname, router, transitionRouter])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        (e.target as HTMLElement).isContentEditable
      ) {
        return
      }

      if (e.metaKey || e.ctrlKey || e.altKey) {
        return
      }

      if (e.key === "ArrowLeft") {
        e.preventDefault()
        navigate("left")
      } else if (e.key === "ArrowRight") {
        e.preventDefault()
        navigate("right")
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [navigate])

  return null
}
