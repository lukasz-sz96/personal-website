"use client"

import { motion } from "motion/react"
import { TransitionLink } from "@/components/layout"

interface MenuItemProps {
  title: string
  url: string
  active?: boolean
}

export const MenuItem = ({ title, url, active }: MenuItemProps) => (
  <TransitionLink
    href={url}
    aria-current={active ? "page" : undefined}
    className="rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-pastel-orange focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
  >
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={`block rounded-2xl px-3 py-1 text-gray-300 cursor-pointer ${active ? "bg-warm-200/50 text-white" : "hover:bg-warm-200/20"}`}
    >
      {title}
    </motion.span>
  </TransitionLink>
)
