import "../assets/styles/MySkills.css";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGithubSquare,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiMarkdown,
  SiMongodb,
  SiExpress,
  SiNetlify,
  SiGit,
  SiTailwindcss,
  SiFirebase,
  SiTypescript,
  SiVite,
  SiNextdotjs,
} from "react-icons/si";

function MySkills() {
  return (
    <div className="skills-background">
      <div className="skills-container">
        <div className="skills-row">
          {/* SKILLS SECTION */}
          <div className="skills-column">
            <div className="skills-title">My Skills</div>
            <div className="skills-icons-container">
              <div className="skills-card">
                <div className="skills-icon">
                  <FaHtml5 className="html-icon" />
                </div>
                <div className="skills-name">HTML5</div>
              </div>
              <div className="skills-card">
                <div className="skills-icon">
                  <FaCss3Alt className="css-icon" />
                </div>
                <div className="skills-name">CSS3</div>
              </div>
              <div className="skills-card">
                <div className="skills-icon">
                  <FaJsSquare className="js-icon" />
                </div>
                <div className="skills-name">JavaScript</div>
              </div>
              <div className="skills-card">
                <div className="skills-icon">
                  <SiTypescript className="typescript-icon" />
                </div>
                <div className="skills-name">TypeScript</div>
              </div>
              <div className="skills-card">
                <div className="skills-icon">
                  <FaBootstrap className="bootstrap-icon" />
                </div>
                <div className="skills-name">Bootstrap</div>
              </div>
              <div className="skills-card">
                <div className="skills-icon">
                  <SiTailwindcss className="tailwind-icon" />
                </div>
                <div className="skills-name">TailwindCSS</div>
              </div>
              <div className="skills-card">
                <div className="skills-icon">
                  <FaReact className="react-icon" />
                </div>
                <div className="skills-name">React.js</div>
              </div>
              <div className="skills-card">
                <div className="skills-icon">
                  <SiNextdotjs className="nextjs-icon" />
                </div>
                <div className="skills-name">Next.js</div>
              </div>
              <div className="skills-card">
                <div className="skills-icon">
                  <SiVite className="vite-icon" />
                </div>
                <div className="skills-name">Vite</div>
              </div>
              <div className="skills-card">
                <div className="skills-icon">
                  <SiMarkdown className="markdwn-icon" />
                </div>
                <div className="skills-name">Markdown</div>
              </div>
              <div className="skills-card">
                <div className="skills-icon">
                  <SiMongodb className="mongodb-icon" />
                </div>
                <div className="skills-name">MongoDB</div>
              </div>
              <div className="skills-card">
                <div className="skills-icon">
                  <SiFirebase className="firebase-icon" />
                </div>
                <div className="skills-name">Firebase</div>
              </div>
              <div className="skills-card">
                <div className="skills-icon">
                  <SiExpress className="express-icon" />
                </div>
                <div className="skills-name">Express.js</div>
              </div>
              <div className="skills-card">
                <div className="skills-icon">
                  <FaNodeJs className="node-icon" />
                </div>
                <div className="skills-name">Node.js</div>
              </div>
              <div className="skills-card">
                <div className="skills-icon">
                  <FaGithubSquare className="github-icon" />
                </div>
                <div className="skills-name">GitHub</div>
              </div>
              <div className="skills-card">
                <div className="skills-icon">
                  <SiNetlify className="netlify-icon" />
                </div>
                <div className="skills-name">Netlify</div>
              </div>
              <div className="skills-card">
                <div className="skills-icon">
                  <SiGit className="git-icon" />
                </div>
                <div className="skills-name">Git</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySkills;
