import { useState, useEffect } from "react";
import { Triangle } from "react-loader-spinner";
import Header from "../components/Navbar";
import HomePage from "../components/HomePage";
import AboutPage from "../components/AboutPage";
import MySkills from "../components/MySkills";
import ProjectList from "../components/ProjectList";
import ContactPage from "../components/ContactPage";
import arrow from "../assets/images/arrow.png";
import { Element } from "react-scroll"; 

const Home = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loaderCss">
          <Triangle
            height="120"
            width="120"
            color="#5E81AC"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      ) : (
        <>
          <Header />
          
          <Element name="home" className="element">
            <HomePage />
          </Element>
          
          <Element name="about" className="element">
            <AboutPage />
          </Element>
          
          <Element name="skills" className="element">
            <MySkills />
          </Element>
          
          <Element name="projects" className="element">
            <ProjectList />
          </Element>
          
          <Element name="contact" className="element">
            <ContactPage />
          </Element>
          
          {showScrollButton && (
            <div onClick={scrollToTop} className="scroll-to-top">
              <img src={arrow} alt="Scroll to top" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;