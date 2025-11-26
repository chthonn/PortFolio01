import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Navbar";
import HomePage from "../components/HomePage";
import AboutPage from "../components/AboutPage";
import MySkills from "../components/MySkills";
import ProjectList from "../components/ProjectList";
import WorkExperience from "../components/WorkExperience";
import ContactPage from "../components/ContactPage";
import { Element } from "react-scroll";
import arrowImage from "../assets/images/arrow.png";
import "../assets/styles/Navbar.css";
import "../assets/styles/HomePage.css";
import "../assets/styles/AboutPage.css";
import "../assets/styles/MySkills.css";
import "../assets/styles/ProjectCard.css";
import "../assets/styles/ContactPage.css";
import "./Home.css";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const Home = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      className="home-wrapper"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <Header />

      <Element name="home" className="element">
        <motion.div variants={item}>
          <HomePage />
        </motion.div>
      </Element>

      <Element name="about" className="element">
        <motion.div variants={item}>
          <AboutPage />
        </motion.div>
      </Element>

      <Element name="skills" className="element">
        <motion.div variants={item}>
          <MySkills />
        </motion.div>
      </Element>

      <Element name="experience" className="element">
        <motion.div variants={item}>
          <WorkExperience />
        </motion.div>
      </Element>

      <Element name="projects" className="element">
        <motion.div variants={item}>
          <ProjectList />
        </motion.div>
      </Element>

      <Element name="contact" className="element">
        <motion.div variants={item}>
          <ContactPage />
        </motion.div>
      </Element>

      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            className="scroll-to-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={arrowImage} alt="Scroll to top" className="scroll-icon" />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Home;
