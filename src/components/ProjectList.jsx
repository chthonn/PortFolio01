import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "PiperChat",
    description:
      "Built a Discord-style chat platform using React, Tailwind, Node.js, Express, MongoDB, and Socket.IO. Implemented servers, channels, realtime messaging, auth flows, and robust socket event handling.",
    Demo: "https://www.youtube.com/watch?v=eX9f0HHp65k",
    Code: "https://github.com/0rigin-c0de/PiperChat01",
    technologies: ["Node.js", "React", "MongoDB", "Socket.IO", "Tailwind", "Supabase"],
    highlights: ["Realtime messaging", "Servers & channels", "Socket.IO events", "JWT auth"],
  },
  {
    title: "VotingApp",
    description:
      "A secure online voting system built with Node.js, Express, MongoDB (Mongoose), Redis, and Socket.IO. Features JWT authentication, bcrypt password hashing, Aadhaar-based signup, role-based access control, audit-ready records, and one-vote-per-user logic.",
    Demo: "",
    Code: "https://github.com/0rigin-c0de/VotingApp",
    technologies: ["Node.js", "Express", "MongoDB", "Redis", "Socket.IO", "JWT"],
    highlights: ["Secure voting", "Role-based access", "Real-time vote updates", "Audit-ready records"],
  },
  {
    title: "AnchorDocs RAG",
    description:
      "Local RAG system for QA over documents using TypeScript, Node.js, Express, Ollama, and ChromaDB. Implemented document ingestion, chunking, embedding generation, hybrid retrieval (vector search + BM25), cross-encoder reranking, and CLI/API workflows.",
    Demo: "",
    Code: "https://github.com/0rigin-c0de/AnchorDocs",
    technologies: ["TypeScript", "Node.js", "Express", "ChromaDB", "Ollama", "BM25"],
    highlights: ["Document ingestion", "Vector search + BM25", "Cross-encoder reranking", "Citation-based answers"],
  },
  {
    title: "Reactron",
    description:
      "A blog application with a custom backend built using Node.js and Express. Built CRUD operations for users and posts, secure profile management, and performance/security optimizations.",
    Demo: "",
    Code: "https://github.com/0rigin-c0de/Reactron",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    highlights: ["Custom backend", "CRUD operations", "User profiles", "Security optimizations"],
  },
];

function ProjectList() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="px-5 py-20 sm:px-8 lg:px-10" id="projects">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#81766b] dark:text-[#c9b99a]">
            04 / Selected / Projects
          </div>
          <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[0.95] tracking-tight text-[#151311] sm:text-5xl dark:text-[#f0ece4]">
            Projects that show the stack in motion.
          </h2>
          <p className="mt-5 max-w-2xl font-mono text-xs uppercase tracking-[0.18em] text-[#81766b] dark:text-[#c9b99a]">
            A collection of my recent work and side projects
          </p>
        </motion.div>

        <motion.div
          className="divide-y divide-[#d8cfc3] border-y border-[#d8cfc3] dark:divide-[#f0ece4]/10 dark:border-[#f0ece4]/10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index + 1}
              title={project.title}
              description={project.description}
              Demo={project.Demo}
              Code={project.Code}
              technologies={project.technologies}
              highlights={project.highlights}
            />
          ))}
        </motion.div>

        <div className="mt-8 flex justify-center">
          <a
            href="https://github.com/0rigin-c0de?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-[#151311] dark:border-[#f0ece4] text-[#151311] dark:text-[#f0ece4] hover:bg-[#151311] hover:text-white dark:hover:bg-[#f0ece4] dark:hover:text-[#151311] font-medium text-sm rounded"
          >
            More projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectList;
