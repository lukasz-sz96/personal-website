"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ArrowLeft, ArrowRight } from "lucide-react"

export function NavigationHint() {
  const [visible, setVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  const showHint = useCallback(() => {
    setVisible(true)
    const timer = setTimeout(() => setVisible(false), 4000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    setMounted(true)
    setIsMobile(window.matchMedia("(max-width: 768px)").matches)

    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches)
    }
    window.addEventListener("resize", handleResize)

    const handleShowHint = () => showHint()
    window.addEventListener("show-nav-hint", handleShowHint)

    const hasSeenHint = sessionStorage.getItem("nav-hint-seen")
    if (!hasSeenHint) {
      const showTimer = setTimeout(() => {
        setVisible(true)
        sessionStorage.setItem("nav-hint-seen", "true")
      }, 1500)

      const hideTimer = setTimeout(() => {
        setVisible(false)
      }, 6500)

      return () => {
        clearTimeout(showTimer)
        clearTimeout(hideTimer)
        window.removeEventListener("resize", handleResize)
        window.removeEventListener("show-nav-hint", handleShowHint)
      }
    }

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("show-nav-hint", handleShowHint)
    }
  }, [showHint])

  if (!mounted) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-pastel-orange to-pastel-rose text-sm text-warm-900 font-medium shadow-lg shadow-orange-500/30 whitespace-nowrap">
            {isMobile ? (
              <>
                <motion.span
                  animate={{ x: [0, -4, 0] }}
                  transition={{ repeat: 3, duration: 0.6 }}
                >
                  ←
                </motion.span>
                <span>Swipe to navigate</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: 3, duration: 0.6 }}
                >
                  →
                </motion.span>
              </>
            ) : (
              <>
                <ArrowLeft className="w-4 h-4" />
                <span>Use arrow keys to navigate</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
