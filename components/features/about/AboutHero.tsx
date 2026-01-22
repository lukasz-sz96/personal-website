"use client"

import { motion } from "motion/react"
import { Rocket, Accessibility, Palette, Wrench } from "lucide-react"

const traits = [
  { icon: Rocket, label: "Performance Enthusiast", color: "text-orange-400" },
  { icon: Accessibility, label: "A11y Advocate", color: "text-emerald-400" },
  { icon: Palette, label: "Design System Lover", color: "text-blue-400" },
  { icon: Wrench, label: "Tech Tinkerer", color: "text-violet-400" },
]

export function AboutHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        <span className="text-white">Crafting digital</span>
        <br />
        <span className="bg-gradient-to-r from-pastel-orange via-pastel-rose to-pastel-orange bg-clip-text text-transparent">
          experiences with soul.
        </span>
      </h1>

      <div className="space-y-4 text-gray-400 mb-8">
        <p>
          Hello! I'm a passionate Web Developer with{" "}
          <span className="text-white font-medium">4 years of commercial experience</span>{" "}
          specializing in building accessible, pixel-perfect, and performant web applications.
        </p>
        <p>
          My journey began with a curiosity for how things work on the web, which quickly evolved
          into a career focused on the intersection of design and engineering. I believe that the best
          digital products are born where technical excellence meets intuitive design.
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
