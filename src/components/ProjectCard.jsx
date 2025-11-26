import { motion } from "framer-motion";
import { FaCode, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function ProjectCard({ imgPath, title, description, Demo, Code }) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
    >
      <div className="project-image-wrapper">
        <img src={imgPath} alt={title} className="project-image" />
        <div className="project-overlay">
          <div className="project-links">
            {Demo && (
              <motion.a
                href={Demo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaExternalLinkAlt />
                <span>Live Demo</span>
              </motion.a>
            )}
            {Code && (
              <motion.a
                href={Code}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
                <span>View Code</span>
              </motion.a>
            )}
          </div>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-footer">
          {Demo && (
            <a
              href={Demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-footer-link"
            >
              <FaExternalLinkAlt />
              Demo
            </a>
          )}
          {Code && (
            <a
              href={Code}
              target="_blank"
              rel="noopener noreferrer"
              className="project-footer-link"
            >
              <FaCode />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
