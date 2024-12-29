import React, { useEffect, useState } from "react";
import services from "../../content/services";
import ServiceCard from "./ServiceCard";
import ContentsContainer from "./ContentsContainer";
import HomeButton from "../Misc/HomeButton";
import { useLocation } from "react-router";
import useWordShaper from "../../hooks/useWordShaper";

const ServicesPage = () => {
  const [highlightedSection, setHighlightedSection] = useState("");
  const wordShaper = useWordShaper("makeOneWordString");
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      if (location.state.data) {
        setHighlightedSection(location.state.data);
        location.state.data = null;
      }
    }
    const element = document.getElementById(wordShaper(highlightedSection));
    if (element) {
      document.querySelectorAll(".service-card").forEach((e) => {
        e.classList.remove("service-card-selected");
      });
      if (element.id === "top") {
        element.scrollIntoView({ behavior: "smooth" });

      } else {
        element.classList.add("service-card-selected");
        element.scrollIntoView({ behavior: "smooth", block: "center" });

      }
    }
  }, [highlightedSection]);

  return (
    <div className="services-page container" id="top">
      <HomeButton />
      <h1>Services</h1>
      <ContentsContainer select={setHighlightedSection} />
      <div className="service-cards container">
        {services.map((service) => {
          return (
            <ServiceCard
              key={service.id}
              id={wordShaper(service.name)}
              name={service.name}
              description={service.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ServicesPage;
