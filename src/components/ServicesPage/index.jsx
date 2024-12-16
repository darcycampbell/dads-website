import React from "react";
import services from "../../content/services";
import ServiceCard from "./ServiceCard";
import ContentsContainer from "./ContentsContainer";
import HomeButton from "../Misc/HomeButton";

const ServicesPage = () => {
  return (
    <div className="services-page container">
      <HomeButton />
      <h1>Services</h1>
      <ContentsContainer />
      <div className="service-cards container">
        {services.map((service) => {
          return (
            <ServiceCard
              key={service.id}
              id={service.name}
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
