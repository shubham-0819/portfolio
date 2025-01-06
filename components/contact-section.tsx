'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function ContactSection() {
  return (
    <section className="py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-4 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">Let's Connect!</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          I'm always excited to collaborate on interesting projects or discuss new opportunities. 
          Whether you have a question, want to chat about tech, or just want to say hello, I'd love to hear from you! 
          Feel free to reach out through any of the channels below.
        </p>
        <div className="space-y-4">
          <a
            href="mailto:shubhamsingh0819@gmail.com"
            className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
            shubhamsingh0819@gmail.com
          </a>
          <div className="flex justify-center space-x-6">
            <Link href="https://github.com/shubham-0819" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/shubham-998" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="https://x.com/Shubham_0819" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          I typically respond within 24-48 hours. Looking forward to connecting with you!
        </p>
      </motion.div>
    </section>
  )
}

