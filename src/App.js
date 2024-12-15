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
import ScrollToTopButton from "./components/Misc/ScrollToTopButton";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
