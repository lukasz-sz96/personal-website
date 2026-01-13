"use client"

import { motion } from "motion/react"
import { HeroCard } from "./cards/hero-card"
import { StatusCard } from "./cards/status-card"
import { TechStackCard } from "./cards/tech-stack-card"
import { TerminalCard } from "./cards/terminal-card"
import { BottomSection } from "./sections/bottom-section"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export const Bento = () => {
  return (
    <div className="w-full p-4 md:p-6">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="lg:col-span-2 lg:row-span-3">
          <HeroCard />
        </motion.div>
        <motion.div variants={item}>
          <StatusCard />
        </motion.div>
        <motion.div variants={item}>
          <TechStackCard />
        </motion.div>
        <motion.div variants={item}>
          <TerminalCard />
        </motion.div>
        <motion.div variants={item} className="lg:col-span-3">
          <BottomSection />
        </motion.div>
      </motion.div>
    </div>
  )
}
