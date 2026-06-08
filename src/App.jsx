import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import AnimatedBackground from "./components/AnimatedBackground";

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden bg-[#f0ece4] text-[#151311] transition-colors duration-300 dark:bg-[#151311] dark:text-[#f0ece4]">
        <AnimatedBackground />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          className="!z-[9999]"
        />
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
