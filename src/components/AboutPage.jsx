import { motion } from "framer-motion";
import { HiUser } from "react-icons/hi";

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
    <section className="aboutpage" id="about">
      <div className="aboutpage-container">
        <motion.div
          className="aboutpage-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-title">
            <HiUser className="section-icon" />
            <h2>About Me</h2>
          </div>
          <p className="section-subtitle">
            Get to know more about my journey and expertise
          </p>
        </motion.div>

        <motion.div 
          className="aboutpage-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="about-card"
            variants={itemVariants}
          >
            <div className="about-text">
              <p>
                I'm a self-taught <strong>Full Stack Developer</strong> from India with a strong
                foundation in JavaScript, React, and Node.js. I focus on building
                clean, scalable, and performant web applications.
              </p>
              <p>
                I enjoy working across the stack—designing intuitive UIs with
                React and managing data flow using tools like Node.js and MongoDB.
                I'm currently diving deeper into TypeScript, Next.js, and backend
                technologies like Golang to broaden my skill set.
              </p>
              <p>
                I'm passionate about open source and regularly share projects on
                GitHub, such as{" "}
                <a
                  href="https://github.com/0rigin-c0de/PiperChat01"
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PiperChat
                </a>{" "}
                (a Discord-like chat app) and{" "}
                <a
                  href="https://github.com/0rigin-c0de/PiedPiper01"
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PiedPiper
                </a>{" "}
                (a blogging platform).
              </p>
              <p className="about-highlight">
                Always learning, always improving—I'm excited to create meaningful
                web experiences and collaborate on impactful projects.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutPage;
