import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiFillFileExclamation } from "react-icons/ai";
import { Link } from "react-scroll"; 
import "../assets/styles/Navbar.css";
import {
  FcBusinessman,
  FcHome,
  FcRating,
  FcDocument,
  FcContacts,
} from "react-icons/fc";

function Header() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const handleResumeClick = () => {
    window.open("/SunilKumar1.pdf", "_blank");
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Navbar.Brand className="logotext" as={Link} to="home" smooth={true} duration={500} offset={-70}>
        <div className="logo">
          <span className="logo-span">Sunil Kumar</span>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle
        className="navbar-toggler"
        aria-controls="responsive-navbar-nav"
        onClick={() => {
          updateExpanded(expand ? false : "expanded");
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav" className="responsive-navbar">
        <Nav className="ms-auto" defaultActiveKey="#home">
          <Nav.Item>
            <Nav.Link 
              as={Link} 
              to="home" 
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active-link"
              onClick={() => updateExpanded(false)}
            >
              <FcHome className="navbar-icons" /> Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active-link"
              onClick={() => updateExpanded(false)}
            >
              <FcBusinessman className="navbar-icons" />
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active-link"
              onClick={() => updateExpanded(false)}
            >
              <FcRating className="navbar-icons" />
              Skills
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              activeClass="active-link"
              offset={-70}
              onClick={() => updateExpanded(false)}
            >
              <FcDocument className="navbar-icons" />
              Experience
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="contact"
              spy={true}
              activeClass="active-link"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => updateExpanded(false)}
            >
              <FcContacts className="navbar-icons" />
              Contact
            </Nav.Link>
          </Nav.Item>
          <button onClick={handleResumeClick} className="resumebtn">
            <span className="resume-title">Resume</span>
            <AiFillFileExclamation className="resume-title" />
          </button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;