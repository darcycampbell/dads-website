import React from "react";
import { Link } from "react-router";

const TextboxMain = ({ clickedServices, clickedContact, isReady }) => {
  const paragraphText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamu iaculis purus at facilisis malesuada. Donec sagittis arcu mi, vitae euismod diam placerat quis.  ";

  return (
    <div className="main textbox container" id="main-textbox">
      <h1>Steve Campbell</h1>
      <p>
        {paragraphText}
        <Link to="/about">Read more...</Link>
      </p>
      <div className="button container">
        <button className="services" onClick={clickedServices}>Services</button>
        <button onClick={clickedContact} disabled={!isReady}>
          Contact
        </button>
      </div>
    </div>
  );
};

export default TextboxMain;
