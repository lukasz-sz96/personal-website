import { Avatar } from "../ui/avatar"
import { MenuBar } from "../features/menu-bar"

interface TopBarProps {
    avatarTitle: string
    avatarText: string
}
export const TopBar = ({ avatarTitle, avatarText }: TopBarProps) => {
    return (
        <div className="flex w-full justify-between p-4 md:p-6">
            <Avatar title={avatarTitle} text={avatarText} />
            <MenuBar />
        </div>
    )
}