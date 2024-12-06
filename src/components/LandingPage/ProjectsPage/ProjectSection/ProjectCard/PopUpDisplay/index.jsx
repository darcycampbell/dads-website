import React from "react";
import CloseButton from "./CloseButton";
import Slideshow from "./Slideshow";

const PopUpDisplay = ({ show, setShow }) => {
  const displaySetting = [
    { display: "none" },
    { display: "flex" },
  ];

  function handleClick(event) {
    if (event.target === event.currentTarget) {
      setShow(false);
    }
  }

  return (
    <div
    className="popup window"
      style={show ? displaySetting[1] : displaySetting[0]}
      onClick={handleClick}
    >
      <div className="popup content">
        {/* <CloseButton setShow={setShow} /> */}
        <Slideshow />
      </div>
    </div>
  );
};

export default PopUpDisplay;
