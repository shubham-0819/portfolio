'use client'

import Nav from '@/components/nav'
import ContactSection from '@/components/contact-section'
import AnimatedBackground from '@/components/animated-background'

export default function Contact() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <Nav />
      <ContactSection />
    </main>
  )
}

