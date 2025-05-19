import "../assets/styles/AboutPage.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaUser } from "react-icons/fa";

function AboutPage() {
  return (
    <div className="aboutpagebackground">
      <Container>
        <Row className="textbackground">
          <Col md={7}>
            <h3 className="aboutmetext">
              <FaUser className="about-user" /> <span>About Me</span>
            </h3>
            <p className="aboutdetails">
              I'm a self-taught Full Stack Developer from India with a strong
              foundation in JavaScript, React, and Node.js. I focus on building
              clean, scalable, and performant web applications.
              <br />
              <br />
              I enjoy working across the stack—designing intuitive UIs with
              React and managing data flow using tools like Node.js and MongoDB.
              I'm currently diving deeper into TypeScript, Next.js, and backend
              technologies like Golang to broaden my skill set.
              <br />
              <br />
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
              <br />
              <br />
              Always learning, always improving—I'm excited to create meaningful
              web experiences and collaborate on impactful projects.
            </p>
          </Col>
          <Col md={5}>
            <div className="webimage">
              <lottie-player
                src="https://assets7.lottiefiles.com/packages/lf20_jtbfg2nb.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutPage;
