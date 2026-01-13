"use client"

import { motion } from "motion/react"
import { GlassCard } from "@/components/ui/glass-card"
import { Code2, Layers } from "lucide-react"

interface SkillCategory {
  title: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "CORE",
    skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "FRAMEWORKS & LIBRARIES",
    skills: ["Next.js", "React Native", "Redux / RTK", "Tailwind CSS", "Styled Components", "Material UI", "React Query"],
  },
  {
    title: "TOOLS & BACKEND",
    skills: ["Node.js", "Python", "Docker", "Git", "Azure DevOps", "Vite"],
  },
]

const highlightedSkills = ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js"]

const industries = [
  "E-Commerce",
  "Financial Services",
  "AI Services",
  "Internal Business Tools",
  "Social Media",
  "Virtual Reality",
]

export function TechnicalProficiency() {
  return (
    <div className="space-y-4">
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
                        highlightedSkills.includes(skill)
                          ? "bg-pastel-orange/15 border-pastel-orange/30 text-white"
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

      <GlassCard className="p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-teal-500/20">
              <Layers className="w-5 h-5 text-teal-400" />
            </div>
            <h2 className="text-xl font-semibold text-white">Industries</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {industries.map((industry, i) => (
              <motion.span
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.7 + i * 0.05 }}
                className="px-3 py-1.5 text-sm rounded-lg bg-white/5 border border-white/10 text-gray-300"
              >
                {industry}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </GlassCard>
    </div>
  )
}
