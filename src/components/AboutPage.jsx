import { motion } from "framer-motion";
import { HiCode, HiLightningBolt } from "react-icons/hi";

const highlights = [
  {
    title: "Frontend ownership",
    copy: "Led frontend work at CtrlB, reorganized project structure, added ESLint discipline, and improved observability UI for logs.",
    meta: "React / UI architecture",
  },
  {
    title: "AI and automation",
    copy: "Integrated MCP through Zapier, worked with Mastra agent tools, and built flows for email, meeting prep, and sales insights.",
    meta: "MCP / Zapier / Mastra",
  },
  {
    title: "Full-stack products",
    copy: "Built PiperChat, InfoSphere, auth systems, notes tools, and API-backed interfaces with MERN, Redis, and Supabase.",
    meta: "Node / MongoDB / PostgreSQL / Firebase / Redis / Supabase",
  },
];

function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20" id="about">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#81766b] dark:text-[#c9b99a]">
            01 / About / Profile
          </div>
          <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[0.95] tracking-tight text-[#151311] sm:text-5xl dark:text-[#f0ece4]">
            Full-stack developer with a frontend-first eye.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#6f665e] dark:text-[#d8cfc3]">
            A short note about how I work, what I have shipped, and what I am growing into.
          </p>
        </motion.div>

        <motion.div 
          className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="border-y border-[#d8cfc3] py-7 dark:border-[#f0ece4]/10"
            variants={itemVariants}
          >
            <div className="space-y-5 text-base leading-8 text-[#6f665e] sm:text-lg dark:text-[#d8cfc3] [&_strong]:text-[#151311] dark:[&_strong]:text-[#f0ece4]">
              <p>
                I am a self-taught <strong>Full Stack Developer</strong> from
                India who likes turning rough product ideas into simple, usable
                web interfaces. My strongest area is React, but I stay close to
                the backend so the full flow feels reliable.
              </p>
              <p>
                In internships, I worked inside startup teams where ownership
                mattered: restructuring frontend folders, improving logs UI,
                building account and opportunity modules, and connecting AI
                tooling into real workflows.
              </p>
              <p className="border-l-2 border-[#b65b3a] pl-5 text-[#151311] dark:text-[#f0ece4]">
                Right now I am sharpening TypeScript, Next.js, backend design,
                and AI automation while continuing to ship small, complete
                projects that prove the fundamentals.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#6f665e] dark:text-[#c9b99a]">
              {["JavaScript", "React", "Node.js", "MongoDB", "PostgreSQL", "OpenAI API"].map((skill) => (
                <span key={skill} className="border border-[#81766b]/25 px-3 py-2 dark:border-[#f0ece4]/12">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div className="grid gap-4" variants={containerVariants}>
            {highlights.map((item, index) => (
              <motion.article
                key={item.title}
                className="grid gap-4 border border-[#81766b]/20 bg-[#f8f4ec]/60 p-5 sm:grid-cols-[auto_1fr] dark:border-[#f0ece4]/10 dark:bg-[#1f1b17]/60"
                variants={itemVariants}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <div className="grid h-10 w-10 place-items-center border border-[#81766b]/25 bg-[#f0ece4] text-[#b65b3a] dark:border-[#f0ece4]/12 dark:bg-[#151311] dark:text-[#d4622a]">
                  {index === 1 ? <HiLightningBolt className="h-5 w-5" /> : <HiCode className="h-5 w-5" />}
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#81766b] dark:text-[#c9b99a]">
                    0{index + 1} / {item.meta}
                  </div>
                  <h3 className="mt-2 text-xl font-black leading-tight text-[#151311] dark:text-[#f0ece4]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#6f665e] dark:text-[#d8cfc3]">
                    {item.copy}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutPage;
