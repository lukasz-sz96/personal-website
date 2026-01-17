"use client"

import { Link as ViewTransitionLink } from "next-view-transitions"
import NextLink from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode, MouseEvent, useEffect, useState, AnchorHTMLAttributes } from "react"

const NAV_ORDER = ["/", "/projects", "/about", "/contact"]

export interface TransitionLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string
  children: ReactNode
}

export function TransitionLink({ href, children, className, ...rest }: TransitionLinkProps) {
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

  if (isFirefox) {
    return (
      <NextLink href={href} className={className} {...rest}>
        {children}
      </NextLink>
    )
  }

  return (
    <ViewTransitionLink href={href} onClick={handleClick} className={className} {...rest}>
      {children}
    </ViewTransitionLink>
  )
}
