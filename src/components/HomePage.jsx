import { motion } from "framer-motion";
import TypeWriter from "./TypeWriter";
import { 
  AiFillGithub, 
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { HiArrowDown } from "react-icons/hi";
import heroImage from "../assets/images/img.png";

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
    <section className="homepage" id="home">
      <div className="homepage-container">
        <motion.div
          className="homepage-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="homepage-text" variants={itemVariants}>
            <motion.div
              className="greeting"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="greeting-text">Hello, I'm</span>
            </motion.div>

            <motion.h1
              className="name-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="name-gradient">Sunil Kumar</span>
            </motion.h1>

            <motion.div
              className="typewriter-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <TypeWriter />
            </motion.div>

            <motion.p
              className="homepage-description"
              variants={itemVariants}
            >
              Crafting exceptional digital experiences with modern technologies.
              Passionate about building performant, and user-centric
              applications.
            </motion.p>

            <motion.div
              className="social-links"
              variants={itemVariants}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.15, y: -8, rotate: 5 }}
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
                  <link.icon className="social-icon" />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              className="cta-buttons"
              variants={itemVariants}
            >
              <motion.a
                href="#projects"
                className="btn-primary"
                whileHover={{ scale: 1.05, y: -3, boxShadow: "0 12px 40px var(--glow-color)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span>View My Work</span>
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-secondary"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span>Get In Touch</span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="homepage-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div
              className="hero-image-container"
              animate={{
                y: [0, -25, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: [0.4, 0, 0.6, 1],
              }}
            >
              <div className="hero-image-wrapper">
                <div className="hero-image-blob">
                  <img src={heroImage} alt="Sunil Kumar" className="hero-image" />
                </div>
                <div className="hero-image-glow"></div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <HiArrowDown className="scroll-icon" />
        </motion.div>
      </div>
    </section>
  );
}

export default HomePage;
