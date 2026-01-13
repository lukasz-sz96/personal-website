"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  gradient: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  year: string;
  category: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  size?: "default" | "large" | "wide";
}

export function ProjectCard({
  project,
  index,
  size = "default",
}: ProjectCardProps) {
  const isLarge = size === "large";
  const isWide = size === "wide";
  const hasImage = !!project.image;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative",
        isLarge && "md:col-span-2 md:row-span-2",
        isWide && "md:col-span-2"
      )}
    >
      <GlassCard
        className={cn(
          "relative overflow-hidden h-full",
          "transition-all duration-500",
          "hover:scale-[1.02] hover:-translate-y-1",
          isLarge ? "min-h-[500px]" : "min-h-[320px]"
        )}
      >
        {hasImage && (
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={project.image!}
              alt={project.title}
              fill
              className={cn(
                "object-cover",
                "transition-transform duration-700 ease-out",
                "group-hover:scale-110"
              )}
              sizes={isLarge ? "66vw" : isWide ? "66vw" : "33vw"}
            />
          </div>
        )}

        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-500",
            hasImage
              ? "opacity-80 group-hover:opacity-60"
              : "opacity-60 group-hover:opacity-80",
            project.gradient
          )}
        />

        {hasImage && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 transition-opacity duration-500 group-hover:from-black/70 group-hover:via-black/30" />
        )}

        <div
          className="absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 h-full p-6 md:p-8 flex flex-col">
          <div className="flex items-start justify-between mb-auto">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-white/60 uppercase tracking-wider">
                {project.category}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span className="text-xs font-mono text-white/60">
                {project.year}
              </span>
            </div>

            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-colors border border-white/10"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-4 h-4 text-white" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-colors border border-white/10"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-4 h-4 text-white" />
                </a>
              )}
            </div>
          </div>

          <div className="mt-auto">
            {!hasImage && (
              <span className="block text-[120px] md:text-[180px] font-bold leading-none text-white/[0.07] absolute bottom-0 right-4 select-none pointer-events-none">
                {String(index + 1).padStart(2, "0")}
              </span>
            )}

            <h3
              className={cn(
                "font-bold text-white mb-3 relative drop-shadow-lg",
                isLarge ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"
              )}
            >
              {project.title}
            </h3>

            <p
              className={cn(
                "text-white/80 mb-6 relative line-clamp-2 drop-shadow-md",
                isLarge ? "text-lg max-w-lg" : "text-sm max-w-sm"
              )}
            >
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 relative">
              {project.tech.slice(0, isLarge ? 6 : 4).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-black/30 backdrop-blur-sm text-white/90 border border-white/10"
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > (isLarge ? 6 : 4) && (
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-black/20 text-white/60">
                  +{project.tech.length - (isLarge ? 6 : 4)}
                </span>
              )}
            </div>
          </div>

          <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-gray-900 font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg">
              View Project
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border border-white/20" />
      </GlassCard>
    </motion.div>
  );
}
