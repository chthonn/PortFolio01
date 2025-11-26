import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { Link } from "react-scroll";
import '../assets/styles/Navbar.css';
import {
  HiHome,
  HiUser,
  HiCode,
  HiBriefcase,
  HiOfficeBuilding,
  HiMail,
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
    { to: "home", icon: HiHome, label: "Home" },
    { to: "about", icon: HiUser, label: "About" },
    { to: "skills", icon: HiCode, label: "Skills" },
    { to: "experience", icon: HiOfficeBuilding, label: "Experience" },
    { to: "projects", icon: HiBriefcase, label: "Projects" },
    { to: "contact", icon: HiMail, label: "Contact" },
  ];

  const handleResumeClick = () => {
    window.open("/SunilKumar1.pdf", "_blank");
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}
    >
      <div className="navbar-container">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="navbar-brand"
        >
          <Link to="home" smooth={true} duration={500} offset={-50}>
            <div className="brand-wrapper">
              <div className="brand-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="brand-svg"
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
              <span className="brand-text">
                <span className="brand-accent brand-bracket">&lt;</span>
                <span className="brand-name">SUNIL</span>
                <span className="brand-accent brand-bracket">/&gt;</span>
              </span>
              <div className="brand-dot"></div>
            </div>
          </Link>
        </motion.div>

        <div className="navbar-desktop">
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
                className="nav-link"
              >
                <item.icon className="nav-icon" />
                <span>{item.label}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="navbar-actions">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <HiSun className="theme-icon" />
            ) : (
              <HiMoon className="theme-icon" />
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleResumeClick}
            className="resume-btn"
          >
            <AiFillFilePdf className="resume-icon" />
            <span>Resume</span>
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-toggle"
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
            className="mobile-menu"
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
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon className="mobile-nav-icon" />
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
