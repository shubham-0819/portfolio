import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export const useScrollAnimation = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return { ref, animate: controls, initial: "hidden", variants: {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 }
  }}
}

