"use client"

import { Link } from "next-view-transitions"
import { usePathname } from "next/navigation"
import { ReactNode, MouseEvent } from "react"

const NAV_ORDER = ["/", "/projects", "/about", "/contact"]

interface TransitionLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export function TransitionLink({ href, children, className }: TransitionLinkProps) {
  const pathname = usePathname()

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === href) {
      e.preventDefault()
      return
    }
    const fromIndex = NAV_ORDER.indexOf(pathname)
    const toIndex = NAV_ORDER.indexOf(href)
    const direction = toIndex > fromIndex ? "left" : "right"
    document.documentElement.dataset.transition = direction
  }

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  )
}
