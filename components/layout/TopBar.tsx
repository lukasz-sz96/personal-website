import { Avatar } from "../ui/avatar"
import { MenuBar } from "../features/menu-bar"

interface TopBarProps {
    avatarTitle: string
    avatarText: string
}
export const TopBar = ({ avatarTitle, avatarText }: TopBarProps) => {
    return (
        <div className="flex w-full justify-between px-4 md:px-6">
            <Avatar title={avatarTitle} text={avatarText} />
            <MenuBar />
        </div>
    )
}