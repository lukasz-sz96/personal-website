"use client"

import Image from "next/image"
import background from "@/public/backgrounds/Resthouse.png"

export function Background() {
  return (
    <div
      className="fixed inset-0 -z-10"
      style={{ viewTransitionName: 'none' }}
    >
      <Image
        alt=""
        src={background}
        placeholder="blur"
        quality={80}
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />

      <div
        className="absolute inset-0 backdrop-blur-md backdrop-saturate-150"
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          WebkitBackdropFilter: 'blur(12px) saturate(1.5)',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%, rgba(0,0,0,0.05) 100%)',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(45deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0,0,0,0.4) 100%)',
        }}
      />
    </div>
  )
}
