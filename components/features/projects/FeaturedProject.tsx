"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";
import { Github, ExternalLink, Star, KeyRound, Copy, Check } from "lucide-react";
import { Project } from "./ProjectCard";

interface FeaturedProjectProps {
  project: Project;
}

function DemoCredentials({ email, password }: { email: string; password: string }) {
  const [copied, setCopied] = useState<"email" | "password" | null>(null);

  const copyToClipboard = async (text: string, type: "email" | "password") => {
    await navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className="mt-6"
    >
      <div className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-black/40 border border-white/10 shadow-xl">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-teal-400/20 to-cyan-400/20 border border-teal-400/30">
          <KeyRound className="w-4 h-4 text-teal-300" />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-white/50 uppercase tracking-wider">Demo</span>
            <button
              onClick={() => copyToClipboard(email, "email")}
              aria-label={copied === "email" ? "Email copied" : "Copy demo email"}
              className="group/copy flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white/5 hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            >
              <span className="font-mono text-sm text-teal-200">{email}</span>
              <AnimatePresence mode="wait">
                {copied === "email" ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <Check className="w-3 h-3 text-emerald-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="opacity-0 group-hover/copy:opacity-100 transition-opacity"
                  >
                    <Copy className="w-3 h-3 text-white/40" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          <span className="hidden sm:block w-px h-4 bg-white/20" />

          <div className="flex items-center gap-2">
            <span className="text-xs text-white/50 uppercase tracking-wider">Pass</span>
            <button
              onClick={() => copyToClipboard(password, "password")}
              aria-label={copied === "password" ? "Password copied" : "Copy demo password"}
              className="group/copy flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white/5 hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            >
              <span className="font-mono text-sm text-teal-200">{password}</span>
              <AnimatePresence mode="wait">
                {copied === "password" ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <Check className="w-3 h-3 text-emerald-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="opacity-0 group-hover/copy:opacity-100 transition-opacity"
                  >
                    <Copy className="w-3 h-3 text-white/40" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  const hasImage = !!project.image;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="group transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/20">
      <GlassCard className="relative overflow-hidden min-h-[450px] md:min-h-[550px]">
        {hasImage && (
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={project.image!}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              sizes="100vw"
              priority
            />
          </div>
        )}

        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            project.gradient
          } ${
            hasImage
              ? "opacity-70 group-hover:opacity-50"
              : "opacity-70 group-hover:opacity-90"
          }`}
        />

        {hasImage && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 transition-opacity duration-500 group-hover:from-black/80 group-hover:via-black/40" />
        )}

        {!hasImage && (
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                x: [0, 30, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-white/10 blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, -20, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-black/20 blur-3xl"
            />
          </div>
        )}

        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 h-full p-8 md:p-12 flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                  Featured
                </span>
              </div>
              <span className="text-sm font-mono text-white/50">
                {project.year}
              </span>
            </div>

            <div className="flex gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source on GitHub (opens in new tab)`}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors text-white text-sm font-medium border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <Github className="w-4 h-4" aria-hidden="true" />
                  <span className="hidden md:inline">Source</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} live demo (opens in new tab)`}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-colors text-sm font-medium shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-pastel-orange focus-visible:ring-offset-2"
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  <span className="hidden md:inline">Live Demo</span>
                </a>
              )}
            </div>
          </div>

          <div className="mt-auto">
            <span className="text-sm font-mono text-white/60 uppercase tracking-widest mb-4 block drop-shadow-md">
              {project.category}
            </span>

            <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
              {project.title}
            </h2>

            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mb-8 leading-relaxed drop-shadow-md">
              {project.longDescription || project.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="px-4 py-2 text-sm font-medium rounded-full bg-black/30 text-white border border-white/10"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {project.demoCredentials && (
              <DemoCredentials
                email={project.demoCredentials.email}
                password={project.demoCredentials.password}
              />
            )}
          </div>

          <div className="absolute top-8 right-8 md:top-12 md:right-12 opacity-20 pointer-events-none">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path d="M0 0h60v2H2v58H0V0z" fill="white" />
              <path d="M60 60H0v-2h58V0h2v60z" fill="white" />
            </svg>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      </GlassCard>
      </div>
    </motion.div>
  );
}
