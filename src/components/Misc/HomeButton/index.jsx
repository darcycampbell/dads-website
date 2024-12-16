import React from "react";
import { Link } from "react-router";

const HomeButton = () => {
  return (
    <Link to={"/"}>
      <button id="goToHomeButton">Home</button>
    </Link>
  );
};

export default HomeButton;
