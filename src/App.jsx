"use client";

import Home from "./views/Home";
import { ToastContainer } from "react-toastify";
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
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
