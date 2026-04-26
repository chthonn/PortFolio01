import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { HiBriefcase } from "react-icons/hi";
import Project1 from "../assets/images/projct1.png";
import Project2 from "../assets/images/Project1.png";
import Project3 from "../assets/images/Project2.png";
import Project4 from "../assets/images/Project3.png";
import Project5 from "../assets/images/Project4.png";
import Project6 from "../assets/images/Project5.png";
import Project7 from "../assets/images/Project6.png";

const projects = [
  {
    imgPath: Project1,
    title: "PiperChat",
    description:
      "Utilized the MERN (MongoDB, Express, React, Node.js) stack to build DISCORD CLONE from scratch. Developed features like Create Servers, Create Channels, and giving users the ability to create and manage their own chat servers.",
    Demo: "https://www.youtube.com/watch?v=eX9f0HHp65k",
    Code: "https://github.com/0rigin-c0de/PiperChat01",
  },
  {
    imgPath: Project2,
    title: "InfoSphere Blog Website",
    description:
      "InfoSphere is a simple blog web application built with ReactJs and Firebase. It allows users to create, read, and comment on posts. The posts and images are stored in Firebase, making it easy to scale and manage the app.",
    Demo: "https://youtu.be/4VW-_Q6lwnM",
    Code: "https://github.com/0rigin-c0de/PiedPiper01",
  },
  {
    imgPath: Project3,
    title: "Foodie Restaurant Website Template",
    description:
      "Foodie is a responsive and visually appealing restaurant website template built with React. It provides an interactive interface for showcasing delicious food items, ordering food, and learning more about the restaurant's services.",
    Demo: "https://foodie01.netlify.app/",
    Code: "https://github.com/0rigin-c0de/Foodie",
  },
  {
    imgPath: Project4,
    title: "MERN Auth App",
    description:
      "This MERN app is a secure and user-friendly system for authentication, registration, and profile management. It features a backend API built with Express and MongoDB, with protected routes and JWT authentication stored in HTTP-only cookies.",
    Demo: "https://github.com/0rigin-c0de/mern-auth",
    Code: "https://github.com/0rigin-c0de/mern-auth",
  },
  {
    imgPath: Project5,
    title: "Wiki Viewer",
    description:
      "Wiki Viewer is a web app that allows users to search for and view Wikipedia articles. The app uses the Wikipedia API to fetch article data, and it is built with HTML, CSS, and JavaScript. The app also has a random wiki generated button.",
    Demo: "https://wikiviewer01.netlify.app/",
    Code: "https://github.com/0rigin-c0de/wiki-veiwer",
  },
  {
    imgPath: Project6,
    title: "Snake-Game Java",
    description:
      "The Snake Game is a classic arcade-style game built in Java. It features a snake controlled by the player, moving within a grid to eat apples. The objective is to avoid collisions with the boundaries or the snake's body.",
    Demo: "https://github.com/0rigin-c0de/snake-Game",
    Code: "https://github.com/0rigin-c0de/snake-Game",
  },
  {
    imgPath: Project7,
    title: "Note-Taking App",
    description:
      "The Notes App is a React JS and Firebase web application that allows users to create, edit, and manage notes. It features a markdown editor for formatting and previewing notes. The sidebar displays a list of notes, and users can create, delete, and sign out.",
    Demo: "https://github.com/0rigin-c0de/Markdown-App-",
    Code: "https://github.com/0rigin-c0de/Markdown-App-",
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
    <section className="project-section" id="projects">
      <div className="project-container">
        <motion.div
          className="project-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-title">
            <HiBriefcase className="section-icon" />
            <h2>My Projects</h2>
          </div>
          <p className="section-subtitle">
            A collection of my recent work and side projects
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              imgPath={project.imgPath}
              title={project.title}
              description={project.description}
              Demo={project.Demo}
              Code={project.Code}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectList;
