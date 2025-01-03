import React from "react";

const ColumnOfContents = ({ array, condition, onClickEvent }) => {
  return (
    <ul>
      {array.map((item) => {
        if (item.id && item.name) {
          if (condition.includes(item.id)) {
            return (
              <li
                key={item.id}
                onClick={() => {
                  onClickEvent(item.name);
                }}
              >
                {item.name}
              </li>
            );
          } else {
            return null;
          }
        }
      })}
    </ul>
  );
};

export default ColumnOfContents;
