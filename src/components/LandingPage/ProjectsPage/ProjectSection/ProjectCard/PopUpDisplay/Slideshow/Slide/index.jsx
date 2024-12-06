import React from "react";

const Slide = ({ showSlide, slide }) => {
  return (
    <div
      className="fade"
      style={
        showSlide === slide.id ? { display: "block" } : { display: "none" }
      }
    >
      <img src={slide.image} alt={slide.alt} />
    </div>
  );
};

export default Slide;
