'use client'

import { motion } from 'framer-motion'
import SocialLinks from './social-links'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1 
          className="text-4xl md:text-7xl font-bold mb-8 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-primary/10 rounded-lg mr-3 text-primary"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            I'M
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            SHUBHAM
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Your friendly neighborhood full-stack developer and engineer. I spend my days (and often nights) crafting the
          internet canvas with <span className="text-primary font-medium">PROJECTS</span> and lines of code, turning zeros and ones into immersive, interactive experiences.
        </motion.p>
        
        <motion.p 
          className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          When I'm not developing with <span className="text-primary font-medium">Angular</span>, <span className="text-primary font-medium">React</span>, and <span className="text-primary font-medium">Node</span>, 
          you can find me exploring <span className="text-primary font-medium">Design Patterns & pragmatic engineering blogs</span> and playing with artificial intelligence models. 
          Feel free to <Link href="/contact" className="text-primary font-medium hover:text-primary/80 transition-colors">CONTACT ME</Link>.
        </motion.p>
        
        <motion.a 
          href="#experience"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          See More About Me
          <svg 
            className="ml-2 w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7" 
            />
          </svg>
        </motion.a>
        <SocialLinks />
      </div>
    </section>
  )
}

