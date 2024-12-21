import React from "react";

const TextboxContact = ({ show, details }) => {
  const displaySetting = [
    { display: "none" },
    {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  ];

  return (
    <div
      className="side textbox container"
      style={show ? displaySetting[1] : displaySetting[0]}
    >
       
      <p className="first component">
        Arrange a <span className="bold-text">free consultation</span> to start
        your next project.
      </p>
      <ul className="middle component list">
        <li>Call Steve on ${details.phone}</li>
        <li>Email ${details.email}</li>
        <li>Find me at ${details.address}</li>
        <li>What is this?</li>
      </ul>
      <p className="final component">I look forward to working with you!</p>
    </div>
  );
};

export default TextboxContact;
