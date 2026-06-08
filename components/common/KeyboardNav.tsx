"use client"

import { useEffect, useCallback } from "react"
import { usePathname } from "next/navigation"
import { useTransitionRouter } from "next-view-transitions"
import { NAV_ORDER } from "@/lib/constants"

export const KeyboardNav = () => {
  const pathname = usePathname()
  const transitionRouter = useTransitionRouter()

  const navigate = useCallback((direction: "left" | "right") => {
    const currentIndex = NAV_ORDER.indexOf(pathname)
    if (currentIndex === -1) return

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }

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

    transitionRouter.push(nextPath)
  }, [pathname, transitionRouter])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        (e.target instanceof HTMLElement && e.target.closest('[role="dialog"]')) ||
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
