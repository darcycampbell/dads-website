import React from "react";
import services from "../../../../content/services";

const ContentsList = ({ condition }) => {
  function selectServiceCard(id) {
    const elements = document.querySelectorAll(".service-card");
    elements.forEach((e) => {
      e.classList.remove("service-card-selected");
    });
    const element = document.getElementById(id);
    element.classList.add("service-card-selected");
  }

  return (
    <ul>
      {services.map((service) => {
        if (condition.includes(service.id)) {
          return (
            <li key={service.id}>
              <a
                onClick={() => {
                  selectServiceCard(service.name);
                }}
                href={`#${service.name}`}
              >
                {service.name}
              </a>
            </li>
          );
        } else {
          return null;
        }
      })}
    </ul>
  );
};

export default ContentsList;
