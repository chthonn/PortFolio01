import "../index.css";
import "../App.css";
import "../pages/Home.css";
import "../assets/styles/Navbar.css";
import "../assets/styles/HomePage.css";
import "../assets/styles/AboutPage.css";
import "../assets/styles/MySkills.css";
import "../assets/styles/ProjectCard.css";
import "../assets/styles/ContactPage.css";
import "../assets/styles/WorkExperience.css";
import "../assets/styles/ProjectList.css";
import "../components/AnimatedBackground.css";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Sunil Kumar Portfolio",
  description: "Portfolio website for Sunil Kumar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
