"use client"

import { motion } from "motion/react"
import { GlassCard } from "@/components/ui/glass-card"
import { Send, Loader2, AlertCircle } from "lucide-react"
import { useState, FormEvent } from "react"
import { cn } from "@/lib/utils"

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        throw new Error("Failed to send message")
      }
    } catch {
      setError("Failed to send message. Please try again or email me directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <GlassCard className="p-8 md:p-10 bg-black/40 dark:bg-black/50 backdrop-blur-xl border-white/20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.1 }}
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center"
          >
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>
          <h3 className="text-2xl font-semibold text-white mb-2">Message Sent!</h3>
          <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
        </motion.div>
      </GlassCard>
    )
  }

  return (
    <GlassCard className="p-8 md:p-10 bg-black/40 dark:bg-black/50 backdrop-blur-xl border-white/20">
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label="Name"
            delay={0.4}
          >
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your name"
              className={cn(
                "w-full px-4 py-3 rounded-xl",
                "bg-white/10 border border-white/20",
                "text-white placeholder:text-gray-400",
                "focus:outline-none focus:border-white/40 focus:bg-white/15",
                "transition-all duration-200"
              )}
            />
          </FormField>

          <FormField
            label="Email"
            delay={0.45}
          >
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your@email.com"
              className={cn(
                "w-full px-4 py-3 rounded-xl",
                "bg-white/10 border border-white/20",
                "text-white placeholder:text-gray-400",
                "focus:outline-none focus:border-white/40 focus:bg-white/15",
                "transition-all duration-200"
              )}
            />
          </FormField>
        </div>

        <FormField
          label="Subject"
          delay={0.5}
        >
          <input
            type="text"
            required
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            placeholder="What is this about?"
            className={cn(
              "w-full px-4 py-3 rounded-xl",
              "bg-white/10 border border-white/20",
              "text-white placeholder:text-gray-400",
              "focus:outline-none focus:border-white/40 focus:bg-white/15",
              "transition-all duration-200"
            )}
          />
        </FormField>

        <FormField
          label="Message"
          delay={0.55}
        >
          <textarea
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell me about your project, idea, or just say hello..."
            className={cn(
              "w-full px-4 py-3 rounded-xl resize-none",
              "bg-white/10 border border-white/20",
              "text-white placeholder:text-gray-400",
              "focus:outline-none focus:border-white/40 focus:bg-white/15",
              "transition-all duration-200"
            )}
          />
        </FormField>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400"
          >
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm">{error}</p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "w-full py-4 rounded-xl font-medium text-sm",
              "bg-gradient-to-r from-pastel-orange to-pastel-rose",
              "text-gray-900 hover:opacity-90",
              "flex items-center justify-center gap-2",
              "transition-all duration-200",
              "disabled:opacity-70 disabled:cursor-not-allowed",
              "shadow-lg shadow-pastel-orange/20"
            )}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </button>
        </motion.div>
      </motion.form>
    </GlassCard>
  )
}

function FormField({
  label,
  delay,
  children,
}: {
  label: string
  delay: number
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>
      {children}
    </motion.div>
  )
}
