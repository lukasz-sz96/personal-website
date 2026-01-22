import { Github } from "lucide-react"
import { Avatar } from "../ui/avatar"
import { MenuBar } from "../features/menu-bar"

interface TopBarProps {
    avatarText: string
}
export const TopBar = ({ avatarText }: TopBarProps) => {
    return (
        <div className="flex w-full justify-between items-center gap-4 p-4 md:p-6">
            <div className="flex-shrink-0">
                <Avatar text={avatarText} />
            </div>
            <div className="flex items-center gap-3">
                <a
                    href="https://github.com/lukasz-sz96/personal-website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-gray-600 hover:text-gray-900 dark:text-white/60 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                    aria-label="View source on GitHub"
                >
                    <Github className="w-5 h-5" />
                </a>
                <MenuBar />
            </div>
        </div>
    )
}