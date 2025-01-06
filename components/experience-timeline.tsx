import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const experiences = [
  {
    title: "Software Developer",
    company: "CE Info Systems Ltd. (MapMyIndia)",
    period: "Oct 2021 – Present",
    description: "Led deployment operations, developed using Angular and React, improved application performance, built robust backend services"
  },
  {
    title: "Intern",
    company: "CE Info Systems Ltd. (MapMyIndia)",
    period: "Apr 2021 – Sep 2021",
    description: "As an intern, I utilized web scraping to automate data extraction from external sources, developed a web application for the ML team to view and analyze inference results, and contributed to the development of a training program for new interns, focusing on Angular, TypeScript, and web component development."
  }
]

export default function ExperienceTimeline() {
  const animation = useScrollAnimation()

  return (
    <motion.div {...animation} className="space-y-8">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="relative pl-8 border-l-2 border-blue-700 border-opacity-50"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <div className="absolute w-4 h-4 bg-blue-700 bg-opacity-50 rounded-full -left-[9px] top-1"></div>
          <h3 className="text-xl font-bold text-blue-300">{exp.title}</h3>
          <p className="text-blue-200">{exp.company}</p>
          <p className="text-sm text-blue-100 opacity-70">{exp.period}</p>
          <p className="mt-2 text-gray-300">{exp.description}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}

