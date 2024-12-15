import React from "react";
import ContentsList from "./ContentsList";

const ContentsContainer = () => {
  return (
    <div className="contents container">
        <ContentsList condition={[1,2,3,4,5]} />
        <ContentsList condition={[6,7,8,9,10]} />
    </div>
  );
};

export default ContentsContainer;
