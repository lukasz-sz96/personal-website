"use client"

import { Link as ViewTransitionLink } from "next-view-transitions"
import NextLink from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode, MouseEvent, AnchorHTMLAttributes } from "react"
import { NAV_ORDER } from "@/lib/constants"
import { useMounted } from "@/lib/hooks"
import { isFirefox } from "@/lib/utils"

export interface TransitionLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string
  children: ReactNode
}

export const TransitionLink = ({ href, children, className, ...rest }: TransitionLinkProps) => {
  const pathname = usePathname()
  const isFirefoxBrowser = useMounted() && isFirefox()

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

  if (isFirefoxBrowser) {
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
