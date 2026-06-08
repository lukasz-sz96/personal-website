import { FolderOpen, Cast, Mail } from "lucide-react";
import { LinkCard } from "../cards/link-card";

export const BottomSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <LinkCard
        href="/projects"
        icon={FolderOpen}
        iconColor="text-purple-400"
        iconBg="bg-purple-50 dark:bg-purple-500/20"
        title="Projects"
        subtitle="Apps, tools, and experiments"
      />
      <LinkCard
        href="/about"
        icon={Cast}
        iconColor="text-rose-400"
        iconBg="bg-rose-50 dark:bg-rose-500/20"
        title="Experience"
        subtitle="4+ years in the field"
      />
      <LinkCard
        href="/contact"
        icon={Mail}
        iconColor="text-blue-400"
        iconBg="bg-blue-50 dark:bg-blue-500/20"
        title="Contact"
        subtitle="Tell me what you need"
      />
    </div>
  );
};
