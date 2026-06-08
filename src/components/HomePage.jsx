import { motion } from "framer-motion";
import { 
  AiFillGithub, 
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { HiArrowDown, HiArrowNarrowRight } from "react-icons/hi";

const stats = [
  { value: "02", label: "Internships" },
  { value: "20+", label: "Tools used" },
  { value: "07", label: "Projects shipped" },
];

function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const socialLinks = [
    {
      icon: AiFillGithub,
      url: "https://github.com/0rigin-c0de",
      label: "GitHub",
      color: "#333",
    },
    {
      icon: AiFillLinkedin,
      url: "https://www.linkedin.com/in/shunnu",
      label: "LinkedIn",
      color: "#0077b5",
    },
    {
      icon: AiOutlineMail,
      url: "mailto:skswork004@gmail.com",
      label: "Email",
      color: "#ea4335",
    },
  ];

  return (
    <section className="relative overflow-hidden px-5 pb-14 pt-10 sm:px-8 lg:px-10 lg:pb-18 lg:pt-14" id="home">
      <svg
        className="pointer-events-none absolute right-[8%] top-28 hidden h-24 w-24 text-[#b65b3a]/45 lg:block"
        viewBox="0 0 120 120"
        fill="none"
        aria-hidden="true"
      >
        <path d="M20 64C38 26 84 24 98 58" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M30 82C50 66 72 66 92 82" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M60 18V34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M78 24L70 38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <svg
        className="pointer-events-none absolute bottom-24 right-[35%] hidden h-20 w-20 text-[#81766b]/35 xl:block"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
      >
        <path d="M20 72C34 44 56 38 80 26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M67 24H82V39" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M24 26L34 36M34 26L24 36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <svg
        className="pointer-events-none absolute right-[19%] top-[44%] hidden h-24 w-24 text-[#151311]/20 lg:block dark:text-[#f0ece4]/20"
        viewBox="0 0 120 120"
        fill="none"
        aria-hidden="true"
      >
        <path d="M18 56C28 42 38 42 48 56C58 70 68 70 78 56C88 42 98 42 106 54" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M27 78H67" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M75 78C92 78 100 70 100 58" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <text x="22" y="34" fill="currentColor" fontSize="16" fontFamily="monospace" fontWeight="700">Go</text>
      </svg>
      <svg
        className="pointer-events-none absolute right-[5%] top-[58%] hidden h-28 w-28 text-[#b65b3a]/35 xl:block"
        viewBox="0 0 140 140"
        fill="none"
        aria-hidden="true"
      >
        <ellipse cx="70" cy="70" rx="48" ry="16" stroke="currentColor" strokeWidth="3" />
        <ellipse cx="70" cy="70" rx="48" ry="16" stroke="currentColor" strokeWidth="3" transform="rotate(60 70 70)" />
        <ellipse cx="70" cy="70" rx="48" ry="16" stroke="currentColor" strokeWidth="3" transform="rotate(120 70 70)" />
        <circle cx="70" cy="70" r="5" fill="currentColor" />
      </svg>
      <svg
        className="pointer-events-none absolute left-[45%] top-36 hidden h-20 w-20 text-[#E54D26]/30 xl:block"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
      >
        <path d="M26 20H74V68C74 76 68 82 58 82C50 82 44 78 40 72" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M31 34H56" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <text x="29" y="61" fill="currentColor" fontSize="18" fontFamily="monospace" fontWeight="700">JS</text>
      </svg>
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="max-w-4xl" variants={itemVariants}>
            <motion.div
              className="mb-6 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-[#81766b] dark:text-[#c9b99a]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="h-2 w-2 bg-[#E54D26]" />
              <span>Currently building from India</span>
            </motion.div>

            <motion.h1
              className="max-w-3xl text-6xl font-black leading-[0.88] tracking-tight text-[#151311] sm:text-7xl lg:text-[7.4rem] dark:text-[#f0ece4]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span>Build</span>
              <br />
              <span>ship</span>
              <br />
              <span className="text-[#E54D26]">learn</span>
            </motion.h1>

            <motion.div
              className="mt-6 max-w-2xl text-base font-medium leading-7 text-[#6f665e] sm:text-lg sm:leading-8 dark:text-[#d8cfc3]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              I am Sunil Kumar, a full-stack developer focused on React
              interfaces, Node backends, and AI-assisted workflows that make
              products easier to use and maintain.
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3"
              variants={itemVariants}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="grid h-12 w-12 place-items-center border border-[#d8cfc3] bg-[#f8f4ec] text-xl text-[#6f665e] transition-colors hover:border-[#151311] hover:text-[#151311] dark:border-[#f0ece4]/15 dark:bg-[#1f1b17] dark:text-[#f0ece4] dark:hover:text-[#E54D26]"
                  whileHover={{ scale: 1.06, y: -4, rotate: 2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20, rotate: -10 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ 
                    delay: 0.8 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                >
                  <link.icon />
                </motion.a>
              ))}
              <motion.a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 border border-[#151311] bg-[#151311] px-6 py-3 text-sm font-semibold text-[#f0ece4] transition-colors hover:bg-[#E54D26] dark:border-[#f0ece4] dark:bg-[#f0ece4] dark:text-[#151311] dark:hover:bg-[#E54D26]"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span>View My Work</span>
                <HiArrowNarrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center border border-[#d8cfc3] bg-transparent px-6 py-3 text-sm font-semibold text-[#151311] transition-colors hover:border-[#151311] dark:border-[#f0ece4]/20 dark:text-[#f0ece4] dark:hover:text-[#E54D26]"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span>Get In Touch</span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-[29rem] self-end lg:ml-auto"
            variants={itemVariants}
          >
            <motion.div
              className="border-y border-[#d8cfc3] py-8 dark:border-[#f0ece4]/10"
              initial={{ opacity: 0, rotate: -2, y: 20 }}
              animate={{ opacity: 1, rotate: 0, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#81766b] dark:text-[#c9b99a]">
                00 / Selected Signals
              </div>

              <div className="mt-8 grid grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="border-r border-[#d8cfc3] pr-5 last:border-r-0 last:pr-0 dark:border-[#f0ece4]/10">
                    <div className="text-4xl font-black leading-none text-[#151311] dark:text-[#f0ece4]">{stat.value}</div>
                    <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#81766b] dark:text-[#c9b99a]">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-10 space-y-4 border-t border-[#d8cfc3] pt-6 text-sm leading-6 text-[#6f665e] dark:border-[#f0ece4]/10 dark:text-[#d8cfc3]">
                <p>
                  Building with React, Node, MongoDB, Supabase, PostgreSQL, and AI workflow tools.
                </p>
                <p>
                  Now learning Go, computer networking, and deeper backend fundamentals so I can understand the core systems behind the products I build.
                </p>
              </div>

            </motion.div>
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          aria-label="Scroll to about section"
          className="mx-auto mt-10 grid h-10 w-10 place-items-center text-[#81766b] dark:text-[#c9b99a]"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <HiArrowDown className="h-6 w-6" />
        </motion.a>
      </div>
    </section>
  );
}

export default HomePage;
