import React from "react";

const TextboxSide = ({ show, listItems }) => {
  const displaySetting = [{display: "none"}, {display: "block"}];

  return (
    <div className="side textbox container" style={show ? displaySetting[1] : displaySetting[0]}>
       <ul>
        {listItems.map((item, index) => {
          return (
            <li key={index}>
                {item}
            </li>)
        } )}
      </ul>
    </div>
  );
};

export default TextboxSide;
