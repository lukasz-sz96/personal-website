import { Glass } from "@/components/ui/glass";
import { MenuItem } from "./MenuItem";
export const MenuBar = () => {
    return (
        <Glass className="w-fit self-end mr-4 md:mr-6 px-3 py-2 rounded-3xl flex gap-1">
            <MenuItem title="Home" url="#" />
            <MenuItem title="Projects" url="#" />
            <MenuItem title="About" url="#" />
            <MenuItem title="Contact" url="#" />

        </Glass>
    );
};