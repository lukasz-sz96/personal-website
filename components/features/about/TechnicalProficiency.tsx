"use client"

import { motion } from "motion/react"
import { GlassCard } from "@/components/ui/glass-card"
import { Code2 } from "lucide-react"

interface SkillCategory {
  title: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "LANGUAGES",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5 & Semantic Markup", "CSS3 / SCSS", "Python (Basic)"],
  },
  {
    title: "FRAMEWORKS & LIBRARIES",
    skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Framer Motion", "Redux Toolkit", "React Query"],
  },
  {
    title: "TOOLS & WORKFLOW",
    skills: ["Git & GitHub", "Webpack / Vite", "Jest / RTL", "Cypress", "Figma", "Vercel"],
  },
]

export function TechnicalProficiency() {
  return (
    <GlassCard className="p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-rose-500/20">
            <Code2 className="w-5 h-5 text-rose-400" />
          </div>
          <h2 className="text-xl font-semibold text-white">Technical Proficiency</h2>
        </div>

        <div className="space-y-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + categoryIndex * 0.1 }}
            >
              <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 + categoryIndex * 0.1 + skillIndex * 0.03 }}
                    className={`px-3 py-1.5 text-sm rounded-lg border transition-colors cursor-default ${
                      skillIndex === 0 && categoryIndex === 1
                        ? "bg-pastel-orange/20 border-pastel-orange/30 text-pastel-orange"
                        : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </GlassCard>
  )
}
