import "./App.css";
import "./css/buttons.css";
import "./css/containers.css";
import "./css/images.css";
import "./css/popup.css";
import "./css/slideshow.css";
import "./css/text.css";
import LandingPage from "./components/LandingPage";
import ServicesPage from "./components/ServicesPage";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/services" element={<ServicesPage />} />
    </Routes>
  );
}

export default App;
