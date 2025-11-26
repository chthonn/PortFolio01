import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGithubSquare,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiMarkdown,
  SiMongodb,
  SiExpress,
  SiNetlify,
  SiGit,
  SiTailwindcss,
  SiFirebase,
  SiTypescript,
  SiVite,
  SiNextdotjs,
  SiSupabase,
  SiZapier,
  SiRedis,
} from "react-icons/si";
import { HiCode } from "react-icons/hi";
import { TbBrandFramerMotion } from "react-icons/tb";

const skills = [
  { icon: FaHtml5, name: "HTML5", color: "#e34c26", category: "Frontend" },
  { icon: FaCss3Alt, name: "CSS3", color: "#264de4", category: "Frontend" },
  { icon: FaJsSquare, name: "JavaScript", color: "#f7df1e", category: "Language" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178c6", category: "Language" },
  { icon: FaBootstrap, name: "Bootstrap", color: "#7952b3", category: "Framework" },
  { icon: SiTailwindcss, name: "TailwindCSS", color: "#06b6d4", category: "Framework" },
  { icon: FaReact, name: "React.js", color: "#61dafb", category: "Framework" },
  { icon: SiNextdotjs, name: "Next.js", color: "#000000", category: "Framework" },
  { icon: SiVite, name: "Vite", color: "#646cff", category: "Tool" },
  { icon: SiMarkdown, name: "Markdown", color: "#000000", category: "Tool" },
  { icon: SiMongodb, name: "MongoDB", color: "#47a248", category: "Database" },
  { icon: SiFirebase, name: "Firebase", color: "#ffca28", category: "Backend" },
  { icon: SiExpress, name: "Express.js", color: "#000000", category: "Backend" },
  { icon: FaNodeJs, name: "Node.js", color: "#339933", category: "Backend" },
  { icon: FaGithubSquare, name: "GitHub", color: "#181717", category: "Tool" },
  { icon: SiNetlify, name: "Netlify", color: "#00c7b7", category: "Tool" },
  { icon: SiGit, name: "Git", color: "#f05032", category: "Tool" },
  { icon: SiSupabase, name: "Supabase", color: "#3ecf8e", category: "Backend" },
  { icon: SiZapier, name: "Zapier", color: "#ff4a00", category: "Tool" },
  { icon: SiRedis, name: "Redis", color: "#dc382d", category: "Database" },
];

const categories = ["All", "Frontend", "Backend", "Language", "Framework", "Database", "Tool"];

function MySkills() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-title">
            <HiCode className="section-icon" />
            <h2>My Skills</h2>
          </div>
          <p className="section-subtitle">
            Technologies and tools I work with
          </p>
        </motion.div>

        <motion.div
          className="category-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`category-filter ${selectedCategory === category ? "active" : ""}`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -10, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                style={{ "--skill-color": skill.color }}
              >
                <div className="skill-icon-wrapper">
                  <skill.icon className="skill-icon" />
                  <div className="skill-glow" style={{ backgroundColor: skill.color }}></div>
                </div>
                <div className="skill-name">{skill.name}</div>
                <div className="skill-category">{skill.category}</div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default MySkills;