import { motion } from "framer-motion";
import { HiBriefcase } from "react-icons/hi";
import { FaCode, FaLaptopCode, FaExternalLinkAlt } from "react-icons/fa";
import "../assets/styles/WorkExperience.css";

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
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-title">
            <HiBriefcase className="section-icon" />
            <h2>Work Experience</h2>
          </div>
          <p className="section-subtitle">
            My professional journey and contributions
          </p>
        </motion.div>

        <motion.div
          className="timeline-wrapper"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="timeline-line"></div>
          
          {experiences.map((experience, index) => {
            const IconComponent = experience.icon;
            return (
              <motion.div
                key={index}
                className={`timeline-item timeline-item-${experience.side}`}
                variants={itemVariants}
              >
                <div className="timeline-node-wrapper">
                  <div className="timeline-date">{experience.dateRange}</div>
                  <div className="timeline-node">
                    <IconComponent className="timeline-icon" />
                  </div>
                </div>
                
                <motion.div
                  className="timeline-content"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="experience-header-content">
                    <h3 className="experience-title">{experience.title}</h3>
                    <div className="experience-meta">
                      <a 
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="experience-company-link"
                      >
                        <span className="experience-company">{experience.company}</span>
                        <FaExternalLinkAlt className="company-link-icon" />
                      </a>
                      <span className="experience-separator">•</span>
                      <span className="experience-type">{experience.type}</span>
                    </div>
                    <div className="experience-location">{experience.location}</div>
                  </div>
                  
                  <ul className="experience-description">
                    {experience.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
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

