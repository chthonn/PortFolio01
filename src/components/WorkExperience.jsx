import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaExternalLinkAlt } from "react-icons/fa";

const experiences = [
  {
    title: "Lead Frontend Intern",
    company: "CtrlB",
    companyUrl: "https://ctrlb.ai/",
    location: "Onsite - Bangalore, India",
    type: "Internship",
    dateRange: "June 22, 2024 – January 22, 2025",
    description: [
      "Solely led frontend development in a fast-paced startup environment",
      "Restructured the entire frontend folder architecture, implement ESLint, enhancing code scalability, maintainability, and developer onboarding efficiency",
      "Enhanced the Logs UI, improving clarity and accessibility for log data visualization on the frontend",
      "Gained deep insights into observability practices, understanding how logs, metrics, and traces contribute to system reliability and performance monitoring"
    ],
    icon: FaLaptopCode,
    side: "left"
  },
  {
    title: "FullStack Engineering Intern",
    company: "AnapanAI",
    companyUrl: "https://www.anapan.ai/",
    location: "Remote",
    type: "Internship",
    dateRange: "May 22, 2025 – July 31, 2025",
    description: [
      "Integrated the MCP system via Zapier into the chatbot flow to automate email sends, pull presentation-data and support meeting-prep",
      "Built and revamped UI components for key modules like Opportunities and Accounts, improving usability and visual consistency",
      "Used the Mastra platform and built AI agent tools to assist users with sales insights and internal knowledge retrieval"
    ],
    icon: FaCode,
    side: "right"
  }
];

function WorkExperience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  return (
    <section className="px-5 py-20 sm:px-8 lg:px-10" id="experience">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#81766b] dark:text-[#c9b99a]">
            03 / Work / Experience
          </div>
          <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[0.95] tracking-tight text-[#151311] sm:text-5xl dark:text-[#f0ece4]">
            Startup work across frontend systems and AI workflows.
          </h2>
          <p className="mt-5 max-w-2xl font-mono text-xs uppercase tracking-[0.18em] text-[#81766b] dark:text-[#c9b99a]">
            My professional journey and contributions
          </p>
        </motion.div>

        <motion.div
          className="relative space-y-8 border-l border-dashed border-[#81766b]/35 pl-6 md:pl-10 dark:border-[#f0ece4]/15"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((experience, index) => {
            const IconComponent = experience.icon;
            return (
              <motion.div
                key={index}
                className="relative"
                variants={itemVariants}
              >
                <div className="absolute -left-[43px] top-1 grid h-8 w-8 place-items-center border border-[#81766b]/35 bg-[#f8f4ec] text-[#b65b3a] shadow-[2px_2px_0_rgba(139,115,85,0.2)] md:-left-[57px] dark:border-[#f0ece4]/15 dark:bg-[#1f1b17] dark:text-[#d4622a]">
                  <IconComponent className="h-4 w-4" />
                </div>
                
                <motion.div
                  className="border border-[#81766b]/25 bg-[#f8f4ec]/75 p-5 shadow-[5px_5px_0_rgba(139,115,85,0.12)] sm:p-6 dark:border-[#f0ece4]/12 dark:bg-[#1f1b17]/75 dark:shadow-[5px_5px_0_rgba(245,240,232,0.04)]"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div>
                    <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[#81766b] dark:text-[#c9b99a]">{experience.dateRange}</div>
                    <h3 className="text-2xl font-bold leading-tight text-[#151311] dark:text-[#f0ece4]">{experience.title}</h3>
                    <div className="mt-2 flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#81766b] dark:text-[#c9b99a]">
                      <a 
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#b65b3a] hover:underline dark:text-[#d4622a]"
                      >
                        <span>{experience.company}</span>
                        <FaExternalLinkAlt className="h-3 w-3" />
                      </a>
                      <span>•</span>
                      <span>{experience.type}</span>
                    </div>
                    <div className="mt-2 text-sm text-[#6f665e] dark:text-[#d8cfc3]">{experience.location}</div>
                  </div>
                  
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-[#6f665e] dark:text-[#d8cfc3]">
                    {experience.description.map((point, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b65b3a] dark:bg-[#d4622a]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default WorkExperience;
