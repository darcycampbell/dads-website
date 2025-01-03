import React, { useEffect, useState } from "react";
import services from "../../content/services";
import ServiceCard from "./ServiceCard";
import HomeButton from "../Misc/HomeButton";
import TableOfContents from "../Misc/TableOfContents";
import { useLocation } from "react-router";
import useWordShaper from "../../hooks/useWordShaper";
import useScrollIntoView from "../../hooks/useScrollIntoView";

const ServicesPage = () => {
  const [selectedSection, setSelectedSection] = useState("");
  const makeOneWord = useWordShaper("makeOneWord");
  const scroller = useScrollIntoView();
  const location = useLocation();

  useEffect(() => {
    console.log(services.length)
    if (location.state && location.state.data) {
        setSelectedSection(location.state.data);
        location.state.data = null;
    }
    scroller(
      document.getElementById(makeOneWord(selectedSection)),
      "service-card",
      "service-card-selected"
    );
  }, [selectedSection, location.state, scroller, makeOneWord]);

  return (
    <div className="services-page container top">
      <HomeButton />
      <h1>Services</h1>
      <TableOfContents contents={services} columnLength={5} selectorFunction={setSelectedSection} />
      <div className="service-cards container">
        {services.map((service) => {
          return (
            <ServiceCard
              key={service.id}
              id={makeOneWord(service.name)}
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
