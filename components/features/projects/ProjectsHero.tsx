"use client";

import { motion } from "motion/react";

interface ProjectsHeroProps {
  projectCount: number;
}

export function ProjectsHero({ projectCount }: ProjectsHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-sm font-mono text-gray-500 dark:text-white/40 uppercase tracking-widest mb-3"
          >
            Portfolio
          </motion.p>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
            Selected
            <span className="font-serif italic ml-3">Works</span>
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-baseline gap-2"
        >
          <span className="text-6xl md:text-8xl font-bold text-gray-200 dark:text-white/10">
            {String(projectCount).padStart(2, "0")}
          </span>
          <span className="text-sm font-mono text-gray-400 dark:text-white/30 uppercase tracking-wider">
            Projects
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="h-px bg-gradient-to-r from-gray-200 dark:from-white/10 via-gray-300 dark:via-white/20 to-transparent mt-8 origin-left"
      />
    </motion.div>
  );
}
