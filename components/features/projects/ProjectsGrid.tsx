"use client";

import { motion } from "motion/react";
import { ProjectCard, Project } from "./ProjectCard";
import { FeaturedProject } from "./FeaturedProject";

interface ProjectsGridProps {
  projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <div className="space-y-6">
      {featured && <FeaturedProject project={featured} />}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
      >
        {others.map((project, index) => {
          const size = index === 0 ? "wide" : index === 3 ? "large" : "default";

          return (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              size={size}
            />
          );
        })}
      </motion.div>
    </div>
  );
}
