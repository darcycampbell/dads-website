import React from "react";
import services from "../../../../content/services";

const ContentsList = ({ condition, select }) => {
  return (
    <ul>
      {services.map((service) => {
        if (condition.includes(service.id)) {
          return (
            <li
              key={service.id}
              onClick={() => {
                select(service.name);
              }}
            >
              {service.name}
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
