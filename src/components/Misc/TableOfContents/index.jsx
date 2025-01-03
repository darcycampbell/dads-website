import React from "react";
import ColumnOfContents from "./ColumnOfContents";

const TableOfContents = ({ contents, columnLength, selectorFunction }) => {
  function createArray() {
    let mainArray = [];
    let number = 1;
    const numberOfColumns = Math.ceil(contents.length / columnLength);
    for (let a = 0; a < numberOfColumns; a++) {
      let subArray = [];
      for (let b = 0; b < columnLength; b++) {
        if (number <= contents.length) {
          subArray.push(number);
        }
        number++;
      }
      mainArray.push(subArray);
    }
    return mainArray;
  }

  return (
    <div className="table-of-contents container">
      {createArray().map((item) => {
        return <ColumnOfContents
          array={contents}
          condition={item}
          onClickEvent={selectorFunction}
        />;
      })}
    </div>
  );
};

export default TableOfContents;
