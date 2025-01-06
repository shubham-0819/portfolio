import { motion } from 'framer-motion'
import { FileDown } from 'lucide-react'

const experiences = [
  {
    title: "Software Developer",
    company: "CE Info Systems Ltd. (MapMyIndia)",
    period: "Oct 2021 – Present",
    points: [
      "Architected and developed a comprehensive computer vision workflow platform using Angular, Nodejs and Sqlite, for data labeling and QC, reducing manual intervention by 40%",
      "Optimized the platform for performance and scalability",
      "Contributed to developing a geospatial analytics platform using Angular, Nodejs and Postgres, for analyzing geospatial data and generating insights", 
      "Developed a scalable and robust backend for the platform using Node.js and Express",
      "Mentored junior developers and conducted code reviews",
      "Created a reusable UI component library using web components that reduced development time by 50%"
    ]
  },
  {
    title: "Intern",
    company: "CE Info Sytems Ltd. (MapMyIndia)",
    period: "Apr 2021 – Sep 2021",
    points: [
      "Used web scraping to automate data extraction from external sources",
      "Developed a web application for ML team to view and analyze inference results",
      "Contributed to developing training program for new interns, focusing on Angular, TypeScript, and web component development"
    ]
  }
]

const education = {
  degree: "Bachelor of Technology in Computer Science",
  institution: "Dr. A. P. J. Abdul Kalam Technical University, Lucknow",
  location: "Greaater Noida, India",
  period: "2017 - 2021"
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-4"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
          Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 border-l-2 border-border"
            >
              <div className="absolute w-4 h-4 bg-primary/20 rounded-full -left-[9px] top-1"></div>
              <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
              <p className="text-muted-foreground">{exp.company}</p>
              <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
              <ul className="space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-muted-foreground text-sm">
                    • {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: experiences.length * 0.2 }}
            className="relative pl-8 border-l-2 border-border"
          >
            <div className="absolute w-4 h-4 bg-primary/20 rounded-full -left-[9px] top-1"></div>
            <h3 className="text-xl font-bold text-foreground">
              {education.degree}
            </h3>
            <p className="text-muted-foreground">{education.institution}</p>
            <p className="text-sm text-muted-foreground">
              {education.location}
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              {education.period}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: (experiences.length + 1) * 0.2 }}
          className="mt-12 text-center"
        >
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            View Resume
            <FileDown className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

