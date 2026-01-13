import { ContactForm, ContactInfo } from "@/components/features/contact"

export default function ContactPage() {
  return (
    <div className="relative w-full min-h-screen p-4 md:p-6">

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start pt-4 md:pt-8">
          <ContactInfo />
          <div className="lg:sticky lg:top-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
