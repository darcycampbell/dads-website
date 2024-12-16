import React from "react";
import { Link } from "react-router";

const TextboxServices = ({ show, listItems}) => {
  const displaySetting = [{ display: "none" }, { display: "flex",   flexDirection: "column",
    justifyContent: "space-between" }];

  return (
    <div
      className="side textbox container"
      style={show ? displaySetting[1] : displaySetting[0]}
    >
      <p className="first component">With over 20 years' experience in the industry, I offer:</p>
      <ul className="second component">
        <li>Service 1</li>
        <li>Another service</li>
        <li><Link to="/services">Link to services</Link></li>
        <li>Another another service</li>
      </ul>
      <p className="third component">Explore the full range of services I provide.</p>
    </div>
  );
};

export default TextboxServices;
