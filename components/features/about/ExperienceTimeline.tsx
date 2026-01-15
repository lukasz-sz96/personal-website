"use client";

import { motion } from "motion/react";
import { GlassCard } from "@/components/ui/glass-card";
import { Briefcase } from "lucide-react";

type ExperienceStatus = "current" | "completed" | "past";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  clients?: string[];
  technologies: string[];
  status: ExperienceStatus;
}

const experiences: Experience[] = [
  {
    title: "Frontend Developer",
    company: "Accenture",
    period: "2021 - 2025",
    description:
      "Building enterprise-grade web applications for global clients. Specializing in React ecosystem, GenAI interfaces, and accessibility implementations across web, mobile, and VR platforms.",
    clients: ["Google", "Meta", "VeloBank", "Procter & Gamble", "Lavazza"],
    technologies: [
      "React",
      "TypeScript",
      "React Native",
      "Tailwind CSS",
      "Redux",
    ],
    status: "current",
  },
  {
    title: "Social Network Owner",
    company: "Self Employed",
    period: "2017 - 2022",
    description:
      "Founded and managed an online community with 50,000+ users and a team of 20 staff members. Handled UI/UX design, frontend development, database administration, and server infrastructure.",
    technologies: ["React.js", "REST API", "MySQL", "Node.js"],
    status: "completed",
  },
  {
    title: "Freelance Developer",
    company: "Self Employed",
    period: "2019 - 2021",
    description:
      "Created custom websites, JavaScript applications, and database solutions for various clients. Worked with both Windows Server and Linux environments.",
    technologies: ["JavaScript", "MySQL", "Lua"],
    status: "past",
  },
];

const statusColors: Record<ExperienceStatus, string> = {
  current: "bg-emerald-400",
  completed: "bg-rose-400",
  past: "bg-gray-500",
};

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
                <div
                  className={`absolute left-0 top-2 w-3.5 h-3.5 rounded-full ${
                    statusColors[exp.status]
                  } border-4 border-gray-900`}
                />

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-medium text-white">{exp.title}</h3>
                      <p className="text-sm text-pastel-orange">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-md whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-gray-400 mb-3">
                    {exp.description}
                  </p>

                  {exp.clients && exp.clients.length > 0 && (
                    <div className="mb-3">
                      <span className="text-xs text-gray-500 uppercase tracking-wider">
                        Clients:{" "}
                      </span>
                      <span className="text-xs text-gray-300">
                        {exp.clients.join(" · ")}
                      </span>
                    </div>
                  )}

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
  );
}
