import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MoviesProvider from "./context/MoviesProvider.jsx";
import TvSeriesProvider from "./context/TvSeriesProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MoviesProvider>
      <TvSeriesProvider>
        <Router>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </Router>
      </TvSeriesProvider>
    </MoviesProvider>
  </StrictMode>
);
