import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/theme";
import { Link } from "react-scroll";
import {
  HiSun,
  HiMoon,
  HiMenu,
  HiX,
} from "react-icons/hi";
import { AiFillFilePdf } from "react-icons/ai";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "experience", label: "Experience" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  const handleResumeClick = () => {
    window.open("/SunilKumar1.pdf", "_blank");
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-[#d8cfc3] bg-[#f0ece4]/94 backdrop-blur-md dark:border-[#f0ece4]/10 dark:bg-[#151311]/94"
          : "border-[#81766b]/15 bg-[#f0ece4]/92 backdrop-blur-sm dark:border-[#f0ece4]/10 dark:bg-[#151311]/92"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <motion.div
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer"
        >
          <Link to="home" smooth={true} duration={500} offset={-50}>
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full border border-[#81766b]/25 bg-[#f8f4ec] text-[#b65b3a] dark:border-[#f0ece4]/15 dark:bg-[#1f1b17]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="flex flex-col leading-none">
                <span className="text-base font-bold tracking-tight text-[#151311] dark:text-[#f0ece4]">Sunil Kumar</span>
                <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-[#81766b] dark:text-[#c9b99a]">Full Stack Developer</span>
              </span>
            </div>
          </Link>
        </motion.div>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item, index) => (
            <motion.div
              key={item.to}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                activeClass="active"
                className="relative cursor-pointer py-2 text-sm font-medium text-[#6f665e] transition-colors hover:text-[#151311] dark:text-[#c9b99a] dark:hover:text-[#f0ece4] [&.active]:text-[#151311] dark:[&.active]:text-[#f0ece4] [&.active]:after:absolute [&.active]:after:bottom-0 [&.active]:after:left-0 [&.active]:after:h-px [&.active]:after:w-full [&.active]:after:bg-[#E54D26]"
              >
                <span>{item.label}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-[#81766b] xl:block dark:text-[#c9b99a]">
            India · IST
          </div>

          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="grid h-10 w-10 place-items-center border border-[#d8cfc3] bg-transparent text-[#6f665e] transition-colors hover:border-[#151311] hover:text-[#151311] dark:border-[#f0ece4]/15 dark:text-[#f0ece4]"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <HiSun className="h-5 w-5" />
            ) : (
              <HiMoon className="h-5 w-5" />
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleResumeClick}
            className="hidden items-center gap-2 border border-[#151311] bg-transparent px-5 py-2.5 text-sm font-semibold text-[#151311] transition-colors hover:bg-[#151311] hover:text-[#f0ece4] sm:flex dark:border-[#f0ece4] dark:text-[#f0ece4] dark:hover:bg-[#f0ece4] dark:hover:text-[#151311]"
          >
            <AiFillFilePdf className="h-4 w-4" />
            <span>Resume</span>
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="grid h-10 w-10 place-items-center border border-[#d8cfc3] bg-transparent text-xl text-[#151311] lg:hidden dark:border-[#f0ece4]/15 dark:text-[#f0ece4]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-[#d8cfc3] bg-[#f0ece4]/95 px-5 py-3 backdrop-blur-md lg:hidden dark:border-[#f0ece4]/10 dark:bg-[#151311]/95"
          >
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                activeClass="active"
                className="flex cursor-pointer border-b border-[#81766b]/15 py-3 font-mono text-xs uppercase tracking-[0.16em] text-[#6f665e] last:border-b-0 hover:text-[#b65b3a] dark:border-[#f0ece4]/10 dark:text-[#d8cfc3] dark:hover:text-[#d4622a]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>{item.label}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Header;
