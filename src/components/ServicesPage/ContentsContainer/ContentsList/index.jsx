import React from "react";
import services from "../../../../content/services";
import useWordShaper from "../../../../hooks/useWordShaper";

const ContentsList = ({ condition, select }) => {
  return (
    <ul>
      {services.map((service) => {
        if (condition.includes(service.id)) {
          return (
            <li key={service.id}>
              <a
                onClick={() => {
                  select(service.name);
                }}
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
