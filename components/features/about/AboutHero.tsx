"use client"

import { motion } from "motion/react"
import { Rocket, Accessibility, Palette, Wrench } from "lucide-react"

const traits = [
  { icon: Rocket, label: "Performance-minded", color: "text-orange-400" },
  { icon: Accessibility, label: "Accessibility", color: "text-emerald-400" },
  { icon: Palette, label: "Design systems", color: "text-blue-400" },
  { icon: Wrench, label: "APIs and tooling", color: "text-violet-400" },
]

export function AboutHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        <span className="text-white">Web apps</span>
        <br />
        <span className="bg-gradient-to-r from-pastel-orange via-pastel-rose to-pastel-orange bg-clip-text text-transparent">
          with care.
        </span>
      </h1>

      <div className="space-y-4 text-gray-400 mb-8">
        <p>
          I&apos;m Łukasz, a web developer with{" "}
          <span className="text-white font-medium">4 years of commercial experience</span>{" "}
          building React, TypeScript, and backend-backed applications.
        </p>
        <p>
          Most of my work sits between product and engineering: reusable UI, API integration,
          accessibility, animation, and code that stays understandable as it grows.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap gap-3"
      >
        {traits.map((trait, i) => (
          <motion.div
            key={trait.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + i * 0.1 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
          >
            <trait.icon className={`w-4 h-4 ${trait.color}`} />
            {trait.label}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
