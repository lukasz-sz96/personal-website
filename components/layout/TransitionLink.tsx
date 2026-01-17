"use client"

import { Link as ViewTransitionLink } from "next-view-transitions"
import NextLink from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode, MouseEvent, useEffect, useState } from "react"

const NAV_ORDER = ["/", "/projects", "/about", "/contact"]

interface TransitionLinkProps {
  href: string
  children: ReactNode
  className?: string
  "aria-current"?: "page" | "step" | "location" | "date" | "time" | "true" | "false"
}

export function TransitionLink({ href, children, className, "aria-current": ariaCurrent }: TransitionLinkProps) {
  const pathname = usePathname()
  const [isFirefox, setIsFirefox] = useState(false)

  useEffect(() => {
    setIsFirefox(navigator.userAgent.toLowerCase().includes("firefox"))
  }, [])

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

  // Use regular Next.js Link for Firefox (View Transitions are buggy with Firefox)
  if (isFirefox) {
    return (
      <NextLink href={href} className={className} aria-current={ariaCurrent}>
        {children}
      </NextLink>
    )
  }

  return (
    <ViewTransitionLink href={href} onClick={handleClick} className={className} aria-current={ariaCurrent}>
      {children}
    </ViewTransitionLink>
  )
}
