'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function InteractiveBackground() {
  const [windowHeight, setWindowHeight] = useState(0)
  const { scrollY } = useScroll()

  useEffect(() => {
    setWindowHeight(window.innerHeight)
  }, [])

  const y1 = useTransform(scrollY, [0, windowHeight], [0, windowHeight / 2])
  const y2 = useTransform(scrollY, [0, windowHeight], [0, windowHeight / 3])
  const y3 = useTransform(scrollY, [0, windowHeight], [0, windowHeight / 4])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"
        style={{ y: y1 }}
      />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 opacity-50"
        style={{ y: y2 }}
      />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-bl from-primary/5 to-secondary/5 opacity-25"
        style={{ y: y3 }}
      />
    </div>
  )
}

