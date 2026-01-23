import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Detects if the current browser is Firefox.
 * Used to disable View Transitions API which Firefox doesn't support.
 */
export function isFirefox(): boolean {
  if (typeof navigator === "undefined") return false
  return navigator.userAgent.toLowerCase().includes("firefox")
}
