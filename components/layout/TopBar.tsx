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
            <MenuBar />
        </div>
    )
}