"use client"

import { motion } from "motion/react"
import { GlassCard } from "@/components/ui/glass-card"
import { Download, Mail, MapPin, Clock, Briefcase, Globe } from "lucide-react"
import Image from "next/image"

const stats = [
  { label: "LOCATION", value: "Płock, PL", icon: MapPin },
  { label: "EXPERIENCE", value: "4 Years", icon: Briefcase },
  { label: "AVAILABILITY", value: "Open", status: "available", icon: Clock },
  { label: "TIMEZONE", value: "GMT+1", icon: Globe },
]

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "TS" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Next.js", icon: "▲" },
  { name: "Framer Motion", icon: "✨" },
  { name: "Figma", icon: "🎯" },
  { name: "Node.js", icon: "🟢" },
  { name: "HTML", icon: "📄" },
]

export function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-4"
    >
      <GlassCard className="p-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="relative mb-4"
          >
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-teal-400 to-cyan-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                <span className="text-4xl">🧑‍💻</span>
              </div>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl font-semibold text-white"
          >
            Łukasz
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-sm"
          >
            Frontend Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-2 mt-4 w-full"
          >
            <a
              href="/CV_EN.pdf"
              download
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-pastel-orange"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              Resume
            </a>
            <a
              href="mailto:lukasz.szczesny96@gmail.com"
              aria-label="Send email"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pastel-orange"
            >
              <Mail className="w-4 h-4 text-gray-300" aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/10"
        >
          {stats.map((stat, i) => (
            <div key={stat.label}>
              <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-1">
                {stat.label}
              </p>
              <p className={`text-sm font-medium ${stat.status === "available" ? "text-emerald-400" : "text-gray-300"}`}>
                {stat.status === "available" && (
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
                )}
                {stat.value}
              </p>
            </div>
          ))}
        </motion.div>
      </GlassCard>

      <GlassCard className="p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-gray-400">&lt;/&gt;</span>
            <h3 className="font-medium text-white">Core Stack</h3>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.05 }}
                className="aspect-square rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                title={tech.name}
              >
                {tech.icon}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </GlassCard>
    </motion.div>
  )
}
