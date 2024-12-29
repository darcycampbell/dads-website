import React from "react";
import { Link } from "react-router";

const TextboxServices = ({ show }) => {
  const displaySetting = [{ display: "none" }, { display: "flex",   flexDirection: "column",
    justifyContent: "space-between" }];
  const listItems = ["Farming", "Healthcare", "Be creative with names"];

  return (
    <div
      className="side textbox container"
      style={show ? displaySetting[1] : displaySetting[0]}
    >
      <p className="first component">With over 20 years' experience in the industry, I offer:</p>
      <ul className="component">
        <li><Link to="/services" state={{data: listItems[0]}}>{listItems[0]}</Link></li>
        <li><Link to="/services" state={{data: listItems[1]}}>{listItems[1]}</Link></li>
        <li><Link to="/services" state={{data: listItems[2]}}>{listItems[2]}</Link></li>
      </ul>
      <p className="final component">Explore <Link to="/services" state={{data: "top"}}>the full range</Link> of services I provide.</p>
    </div>
  );
};

export default TextboxServices;
