"use client"

import { usePathname } from "next/navigation"
import { Glass } from "@/components/ui/glass"
import { MenuItem } from "./MenuItem"

const NAV_ITEMS = [
  { title: "Home", url: "/" },
  { title: "Projects", url: "/projects" },
  { title: "About", url: "/about" },
  { title: "Contact", url: "/contact" },
]

export const MenuBar = () => {
  const pathname = usePathname()

  return (
    <nav aria-label="Main navigation">
      <Glass className="w-fit self-end px-3 py-2 rounded-3xl flex gap-1">
        {NAV_ITEMS.map((item) => (
          <MenuItem
            key={item.url}
            title={item.title}
            url={item.url}
            active={pathname === item.url}
          />
        ))}
      </Glass>
    </nav>
  )
}
