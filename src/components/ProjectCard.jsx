import { motion } from "framer-motion";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function HighlightedDescription({ text, highlights }) {
  if (!highlights?.length) {
    return text;
  }

  const pattern = new RegExp(`(${highlights.map(escapeRegExp).join("|")})`, "gi");

  return text.split(pattern).map((part, index) => {
    const isHighlighted = highlights.some(
      (highlight) => highlight.toLowerCase() === part.toLowerCase()
    );

    return isHighlighted ? (
      <strong key={`${part}-${index}`} className="font-bold text-[#b65b3a] dark:text-[#d4622a]">
        {part}
      </strong>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    );
  });
}

function ProjectCard({ index, title, description, Demo, Code, technologies = [], highlights = [] }) {
  return (
    <motion.div
      className="group grid gap-6 py-8 transition-colors md:grid-cols-[80px_1fr_0.55fr] md:py-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ x: 4 }}
    >
      <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#81766b] dark:text-[#c9b99a]">
        {String(index).padStart(2, "0")}
      </div>

      <div>
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <h3 className="text-3xl font-black leading-tight tracking-[-0.03em] text-[#151311] transition-colors group-hover:text-[#b65b3a] sm:text-4xl dark:text-[#f0ece4] dark:group-hover:text-[#d4622a]">
            {title}
          </h3>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#81766b] dark:text-[#c9b99a]">
            Project
          </span>
        </div>
        <p className="mt-4 max-w-3xl text-base leading-7 text-[#6f665e] dark:text-[#d8cfc3]">
          <HighlightedDescription text={description} highlights={highlights} />
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="border border-[#d8cfc3] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#6f665e] dark:border-[#f0ece4]/15 dark:text-[#c9b99a]"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-start gap-3 md:justify-end">
        {Demo && (
          <a
            href={Demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#151311] px-3 py-2 text-sm font-semibold text-[#151311] transition-colors hover:bg-[#151311] hover:text-[#f0ece4] dark:border-[#f0ece4] dark:text-[#f0ece4] dark:hover:bg-[#f0ece4] dark:hover:text-[#151311]"
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
            className="inline-flex items-center gap-2 border border-[#d8cfc3] px-3 py-2 text-sm font-semibold text-[#6f665e] transition-colors hover:border-[#151311] hover:text-[#151311] dark:border-[#f0ece4]/15 dark:text-[#c9b99a] dark:hover:text-[#f0ece4]"
          >
            <FaCode />
            Code
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
