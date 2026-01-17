"use client"

import { usePathname } from "next/navigation"
import { motion } from "motion/react"
import { Glass } from "@/components/ui/glass"
import { MenuItem } from "./MenuItem"
import { TransitionLink } from "@/components/layout"

const NAV_ITEMS = [
  { title: "Home", url: "/" },
  { title: "Projects", url: "/projects" },
  { title: "About", url: "/about" },
  { title: "Contact", url: "/contact" },
]

export const MenuBar = () => {
  const pathname = usePathname()
  const currentIndex = NAV_ITEMS.findIndex(item => item.url === pathname)
  const currentTitle = NAV_ITEMS[currentIndex]?.title || "Home"

  return (
    <nav aria-label="Main navigation">
      <Glass className="hidden md:flex w-fit self-end px-3 py-2 rounded-3xl gap-1">
        {NAV_ITEMS.map((item) => (
          <MenuItem
            key={item.url}
            title={item.title}
            url={item.url}
            active={pathname === item.url}
          />
        ))}
      </Glass>

      <motion.div layout transition={{ duration: 0.3, ease: "easeInOut" }} className="md:hidden">
        <Glass className="flex items-center gap-3 px-4 py-2 rounded-3xl">
          <motion.span
            key={currentTitle}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="text-sm font-medium text-white"
          >
            {currentTitle}
          </motion.span>
          <div className="flex gap-1.5" role="tablist" aria-label="Page navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.url

              if (isActive) {
                return (
                  <button
                    key={item.url}
                    type="button"
                    aria-label="Show navigation hint"
                    onClick={() => window.dispatchEvent(new CustomEvent("show-nav-hint"))}
                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pastel-orange focus-visible:ring-offset-1 focus-visible:ring-offset-gray-900 rounded-full"
                  >
                    <span className="block w-6 h-2 rounded-full bg-pastel-orange transition-all duration-300" />
                  </button>
                )
              }

              return (
                <TransitionLink
                  key={item.url}
                  href={item.url}
                  aria-label={item.title}
                  role="tab"
                  aria-selected={false}
                  className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pastel-orange focus-visible:ring-offset-1 focus-visible:ring-offset-gray-900 rounded-full"
                >
                  <span className="block w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition-all duration-300" />
                </TransitionLink>
              )
            })}
          </div>
        </Glass>
      </motion.div>
    </nav>
  )
}
