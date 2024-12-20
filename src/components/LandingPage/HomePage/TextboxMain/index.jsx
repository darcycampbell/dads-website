import React from "react";
import { Link } from "react-router";

const TextboxMain = ({ clickedServices, clickedContact, isReady }) => {
  const paragraphText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamu iaculis purus at facilisis malesuada. Donec sagittis arcu mi, vitae euismod diam placerat quis. Fusce vestibulum eleifend lectus, sed cursus nulla cursus in. Ut ac mi feugiat, tincidunt metus at, ultricies tellus. Nunc varius justo sed libero faucibus gravida. ";

  return (
    <div className="main textbox container">
      <h1>Steve Campbell</h1>
      <p>
        {paragraphText}
        <Link to="/about">Read more...</Link>
      </p>
      <div className="button container">
        <button onClick={clickedServices}>Services</button>
        <button onClick={clickedContact} disabled={!isReady}>Contact</button>
      </div>
    </div>
  );
};

export default TextboxMain;
