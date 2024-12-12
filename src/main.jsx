import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TMDBProvider from "./context/TMDBProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TMDBProvider>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </TMDBProvider>
  </StrictMode>
);
