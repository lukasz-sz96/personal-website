"use client"

import { motion } from "motion/react"
import { Mail, MapPin, Clock, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "lukasz.szczesny96@gmail.com",
    href: "mailto:lukasz.szczesny96@gmail.com",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Płock, Poland",
    color: "from-emerald-400 to-teal-500",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    color: "from-violet-400 to-purple-500",
  },
]

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/lukasz-sz96",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/lukasz-szczesny/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
]

export function ContactInfo() {
  return (
    <div className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
          <span className="text-white">Let's create</span>
          <br />
          <span className="bg-gradient-to-r from-pastel-orange via-pastel-rose to-pastel-orange bg-clip-text text-transparent">
            something amazing
          </span>
          <br />
          <span className="text-white">together.</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-md">
          Have a project in mind or just want to chat? I&apos;m always excited to hear about new opportunities and ideas.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-4"
      >
        {contactMethods.map((method, i) => (
          <motion.div
            key={method.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.1 }}
          >
            {method.href ? (
              <a
                href={method.href}
                className={cn(
                  "group flex items-center gap-4 p-4 rounded-2xl",
                  "bg-white/5 border border-white/10",
                  "hover:bg-white/[0.08] hover:border-white/20",
                  "transition-all duration-200",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-pastel-orange"
                )}
              >
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center",
                  "bg-gradient-to-br",
                  method.color
                )}>
                  <method.icon className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-0.5">
                    {method.label}
                  </p>
                  <p className="text-white font-medium">{method.value}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" aria-hidden="true" />
              </a>
            ) : (
              <div
                className={cn(
                  "flex items-center gap-4 p-4 rounded-2xl",
                  "bg-white/5 border border-white/10"
                )}
              >
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center",
                  "bg-gradient-to-br",
                  method.color
                )}>
                  <method.icon className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-0.5">
                    {method.label}
                  </p>
                  <p className="text-white font-medium">{method.value}</p>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <p className="text-sm text-gray-500 mb-4">Find me on</p>
        <div className="flex gap-3">
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.name} (opens in new tab)`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.05 }}
              className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center",
                "bg-white/5 border border-white/10",
                "text-gray-400 hover:text-white",
                "hover:bg-white/10 hover:border-white/20",
                "transition-all duration-200",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-pastel-orange"
              )}
            >
              <span aria-hidden="true">{link.icon}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
