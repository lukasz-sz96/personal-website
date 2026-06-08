import {
  ProfileCard,
  AboutHero,
  ExperienceTimeline,
  TechnicalProficiency,
} from "@/components/features/about"

export default function AboutPage() {
  return (
    <div className="w-full p-4 md:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-4">
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <ProfileCard />
        </aside>

        <div className="space-y-6">
          <AboutHero />
          <ExperienceTimeline />
          <TechnicalProficiency />
        </div>
      </div>
    </div>
  )
}
