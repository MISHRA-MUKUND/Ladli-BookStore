import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.jsx";
import { ThemeProvider } from "./context/ThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <ThemeProvider>
        <div className=" dark:bg-slate-900 dark:text-white">
          <App />
        </div>
      </ThemeProvider>
    </AuthProvider>
  </BrowserRouter>
);
