import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function SocialLinks() {
  return (
    <motion.div 
      className="flex gap-6 mt-8 justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4 }}
    >
      <motion.a
        href="https://github.com/shubham-0819"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -2 }}
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <Github className="w-5 h-5" />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/shubham-998"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -2 }}
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <Linkedin className="w-5 h-5" />
      </motion.a>
      <motion.a
        href="https://x.com/Shubham_0819"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -2 }}
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </motion.a>
      <motion.a
        href="mailto:shubhamsingh0819@gmail.com"
        whileHover={{ y: -2 }}
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <Mail className="w-5 h-5" />
      </motion.a>
    </motion.div>
  )
}

