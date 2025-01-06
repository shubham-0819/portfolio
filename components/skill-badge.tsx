import { motion } from 'framer-motion'

interface SkillBadgeProps {
  name: string
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <motion.span
      className="inline-block bg-blue-900 bg-opacity-20 text-blue-100 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 border border-blue-700 border-opacity-30"
      whileHover={{ scale: 1.1, backgroundColor: 'rgba(30, 58, 138, 0.3)' }}
      whileTap={{ scale: 0.95 }}
    >
      {name}
    </motion.span>
  )
}

