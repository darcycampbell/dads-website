import "./App.css";
import "./css/buttons.css";
import "./css/containers.css";
import "./css/images.css";
import "./css/newClasses.css";
import "./css/popup.css";
import "./css/slideshow.css";
import "./css/text.css";
import LandingPage from "./components/LandingPage";
import ServicesPage from "./components/ServicesPage";
import AboutPage from "./components/AboutPage";
import ScrollToTopButton from "./components/Misc/ScrollToTopButton";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <ScrollToTopButton />
    </BrowserRouter>
  );
}

export default App;
