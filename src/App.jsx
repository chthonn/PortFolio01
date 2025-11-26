import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import AnimatedBackground from "./components/AnimatedBackground";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
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
          className="toast-container"
        />
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;