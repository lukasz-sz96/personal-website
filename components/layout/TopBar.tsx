import { Avatar } from "../ui/avatar"
import { MenuBar } from "../features/menu-bar"

interface TopBarProps {
    avatarText: string
}
export const TopBar = ({ avatarText }: TopBarProps) => {
    return (
        <div className="flex w-full justify-between p-4 md:p-6">
            <Avatar text={avatarText} />
            <MenuBar />
        </div>
    )
}