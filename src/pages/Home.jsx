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
      className="relative z-10 min-h-screen"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <Header />

      <Element name="home" className="relative">
        <motion.div variants={item}>
          <HomePage />
        </motion.div>
      </Element>

      <Element name="about" className="relative">
        <motion.div variants={item}>
          <AboutPage />
        </motion.div>
      </Element>

      <Element name="skills" className="relative">
        <motion.div variants={item}>
          <MySkills />
        </motion.div>
      </Element>

      <Element name="experience" className="relative">
        <motion.div variants={item}>
          <WorkExperience />
        </motion.div>
      </Element>

      <Element name="projects" className="relative">
        <motion.div variants={item}>
          <ProjectList />
        </motion.div>
      </Element>

      <Element name="contact" className="relative">
        <motion.div variants={item}>
          <ContactPage />
        </motion.div>
      </Element>

      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#151311]/15 bg-[#E54D26] shadow-[4px_4px_0_rgba(26,22,18,0.22)] transition-colors hover:bg-[#c43d1a] dark:border-[#f0ece4]/15 dark:shadow-[4px_4px_0_rgba(245,240,232,0.14)]"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={arrowImage} alt="Scroll to top" className="h-5 w-5 object-contain invert" />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Home;
