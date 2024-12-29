import React from "react";
import ContentsList from "./ContentsList";

const ContentsContainer = ({select}) => {
  return (
    <div className="contents container">
        <ContentsList condition={[1,2,3,4,5]} select={select} />
        <ContentsList condition={[6,7,8,9,10]} select={select} />
    </div>
  );
};

export default ContentsContainer;
