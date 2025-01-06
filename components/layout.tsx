import { Inter } from 'next/font/google'
import { motion } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`min-h-screen bg-black text-white ${inter.className}`}>
      <div className="fixed inset-0 bg-blue-900 opacity-20 blur-3xl bg-[radial-gradient(ellipse_at_top,rgba(29,78,216,0.3),transparent_80%)]"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  )
}

