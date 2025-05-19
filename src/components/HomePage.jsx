import "../assets/styles/HomePage.css";
import { Container, Row, Col } from "react-bootstrap";
import TypeWriter from "../components/TypeWriter";
import { AiFillGithub } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import '../App.css'
import '../index.css'
function HomePage() {
  const startAnimation = () => {
    const image = document.querySelector(".imagedeveloper");
    image.classList.add("animate-image");
  };

  const stopAnimation = () => {
    const image = document.querySelector(".imagedeveloper");
    image.classList.remove("animate-image");
  };
  return (
    <div className="homepagebackground">
      <Container>
        <Row>
          <Col md={7} className="homepage-my-info">
            <h2 className="headtext">
              Hello <span className="wave">👋 </span>
            </h2>
            <h2 className="nametext">I'm Sunil Kumar</h2>
            <span></span>
            <TypeWriter />
            <div className="social-btn-div">
              <button
                onClick={() => {
                  window.open("https://github.com/0rigin-c0de");
                }}
                className="socailmediabtn"
              >
                <AiFillGithub className="icon-github" />
              </button>
              <button
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/sunil-kumar-029697279/"
                  );
                }}
                className="socailmediabtn"
              >
                <FaLinkedinIn className="icon-linkedin" />
              </button>
              <button className="socailmediabtn">
                <a href="mailto:shunnu807@gmail.com">
                  <GrMail className="icon-mail" />
                </a>
              </button>
            </div>
          </Col>
          <Col md={5}>
            <div
              className="imagedeveloper img-blob"
              onMouseEnter={startAnimation}
              onMouseLeave={stopAnimation}
            ></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
