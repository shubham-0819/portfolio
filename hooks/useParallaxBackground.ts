import { useEffect, useState } from 'react'
import { useScroll, useTransform } from 'framer-motion'

export function useParallaxBackground() {
  const [elementTop, setElementTop] = useState(0)
  const { scrollY } = useScroll()

  useEffect(() => {
    setElementTop(window.innerHeight)
  }, [])

  const background = useTransform(
    scrollY,
    [elementTop - 200, elementTop + 200],
    ['hsl(var(--background) / 0.8)', 'hsl(var(--background))']
  )

  const darkBackground = useTransform(
    scrollY,
    [elementTop - 200, elementTop + 200],
    ['hsl(var(--background) / 0.8)', 'hsl(var(--background))']
  )

  return { background, darkBackground }
}

