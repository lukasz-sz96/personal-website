"use client"

import { useEffect, useCallback, useRef } from "react"
import { usePathname } from "next/navigation"
import { useTransitionRouter } from "next-view-transitions"
import { NAV_ORDER } from "@/lib/constants"

const SWIPE_THRESHOLD = 50

export const SwipeNav = () => {
  const pathname = usePathname()
  const transitionRouter = useTransitionRouter()
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)

  const navigate = useCallback((direction: "left" | "right") => {
    const currentIndex = NAV_ORDER.indexOf(pathname)
    if (currentIndex === -1) return

    let nextIndex: number
    if (direction === "left") {
      nextIndex = currentIndex + 1
      if (nextIndex >= NAV_ORDER.length) nextIndex = 0
    } else {
      nextIndex = currentIndex - 1
      if (nextIndex < 0) nextIndex = NAV_ORDER.length - 1
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
    const handleTouchStart = (e: TouchEvent) => {
      if (e.target instanceof HTMLElement && e.target.closest('[role="dialog"]')) {
        return
      }

      touchStartX.current = e.touches[0].clientX
      touchStartY.current = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartX.current === null || touchStartY.current === null) return

      const touchEndX = e.changedTouches[0].clientX
      const touchEndY = e.changedTouches[0].clientY

      const deltaX = touchEndX - touchStartX.current
      const deltaY = touchEndY - touchStartY.current

      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > SWIPE_THRESHOLD) {
        if (deltaX > 0) {
          navigate("right")
        } else {
          navigate("left")
        }
      }

      touchStartX.current = null
      touchStartY.current = null
    }

    window.addEventListener("touchstart", handleTouchStart, { passive: true })
    window.addEventListener("touchend", handleTouchEnd, { passive: true })

    return () => {
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchend", handleTouchEnd)
    }
  }, [navigate])

  return null
}
