import { motion } from "framer-motion";
import SkillsFlow from "./SkillsFlow";
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
  SiGo,
  SiPostgresql,
} from "react-icons/si";

const skills = [
  { icon: FaHtml5, name: "HTML5", color: "#e34c26", category: "Frontend" },
  { icon: FaCss3Alt, name: "CSS3", color: "#264de4", category: "Frontend" },
  { icon: FaJsSquare, name: "JavaScript", color: "#f7df1e", category: "Language" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178c6", category: "Language" },
  { icon: SiGo, name: "Go", color: "#00add8", category: "Language" },
  { icon: FaBootstrap, name: "Bootstrap", color: "#7952b3", category: "Frontend" },
  { icon: SiTailwindcss, name: "TailwindCSS", color: "#06b6d4", category: "Frontend" },
  { icon: FaReact, name: "React.js", color: "#61dafb", category: "Frontend" },
  { icon: SiNextdotjs, name: "Next.js", color: "#000000", category: "Frontend" },
  { icon: SiVite, name: "Vite", color: "#646cff", category: "Tool" },
  { icon: SiMarkdown, name: "Markdown", color: "#000000", category: "Tool" },
  { icon: SiMongodb, name: "MongoDB", color: "#47a248", category: "Database" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169e1", category: "Database" },
  { icon: SiMongodb, name: "ChromaDB", color: "#5f4bdb", category: "Database" },
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

function MySkills() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-10" id="skills">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#81766b] dark:text-[#c9b99a]">
            02 / Stack / Skills
          </div>
          <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[0.95] tracking-tight text-[#151311] sm:text-5xl dark:text-[#f0ece4]">
            Tools I use to build clear, usable products.
          </h2>
          <p className="mt-5 max-w-2xl font-mono text-xs uppercase tracking-[0.18em] text-[#81766b] dark:text-[#c9b99a]">
            Technologies and tools I work with
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <SkillsFlow skills={skills} selectedCategory="All" />
        </motion.div>
      </div>
    </section>
  );
}

export default MySkills;
