"use client"

import { motion } from "motion/react"
import { GlassCard } from "@/components/ui/glass-card"
import { Briefcase } from "lucide-react"

type ExperienceStatus = "current" | "completed" | "past"

interface Experience {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
  status: ExperienceStatus
}

const experiences: Experience[] = [
  {
    title: "Senior Frontend Developer",
    company: "TechCorp Solutions",
    period: "2022 - PRESENT",
    description: "Leading the frontend architecture for a high-traffic SaaS platform. Spearheaded the migration to Next.js, resulting in a 40% performance boost.",
    technologies: ["Next.js", "TypeScript", "GraphQL"],
    status: "current",
  },
  {
    title: "Frontend Developer",
    company: "Creative Agency Studio",
    period: "2020 - 2022",
    description: "Developed award-winning marketing websites and e-commerce stores. Collaborated closely with designers to implement complex GSAP animations.",
    technologies: ["Vue.js", "GSAP", "Shopify"],
    status: "completed",
  },
  {
    title: "Junior Web Developer",
    company: "Freelance & Contract",
    period: "2019 - 2020",
    description: "Started my career building responsive websites for local businesses. Mastered HTML, CSS, and vanilla JavaScript fundamentals.",
    technologies: [],
    status: "past",
  },
]

const statusColors: Record<ExperienceStatus, string> = {
  current: "bg-emerald-400",
  completed: "bg-rose-400",
  past: "bg-gray-500",
}

export function ExperienceTimeline() {
  return (
    <GlassCard className="p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-orange-500/20">
            <Briefcase className="w-5 h-5 text-orange-400" />
          </div>
          <h2 className="text-xl font-semibold text-white">Experience</h2>
        </div>

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.period}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + i * 0.15 }}
                className="relative pl-8"
              >
                <div className={`absolute left-0 top-2 w-3.5 h-3.5 rounded-full ${statusColors[exp.status]} border-4 border-gray-900`} />

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-medium text-white">{exp.title}</h3>
                      <p className="text-sm text-pastel-orange">{exp.company}</p>
                    </div>
                    <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-md whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-gray-400 mb-3">{exp.description}</p>

                  {exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded-md bg-white/10 text-gray-300 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </GlassCard>
  )
}
