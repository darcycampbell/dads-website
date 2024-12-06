import React from "react";
import Cross from "./Cross";

const CloseButton = ({ setShow }) => {
  return (
    <div onClick={() => {setShow(false)}}>
      <Cross  />
    </div>
  );
};

export default CloseButton;
