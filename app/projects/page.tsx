import { ProjectsHero, ProjectsGrid, projects } from "@/components/features/projects"

export default function ProjectsPage() {
  return (
    <div className="w-full p-4 md:p-6">
      <ProjectsHero projectCount={projects.length} />
      <ProjectsGrid projects={projects} />
    </div>
  )
}
