"use client"

import { Link as ViewTransitionLink } from "next-view-transitions"
import { usePathname } from "next/navigation"
import { ReactNode, MouseEvent, AnchorHTMLAttributes } from "react"
import { NAV_ORDER } from "@/lib/constants"

export interface TransitionLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string
  children: ReactNode
}

export const TransitionLink = ({ href, children, className, onClick, ...rest }: TransitionLinkProps) => {
  const pathname = usePathname()

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e)
    if (e.defaultPrevented) {
      return
    }

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
    <ViewTransitionLink href={href} onClick={handleClick} className={className} {...rest}>
      {children}
    </ViewTransitionLink>
  )
}
