import React from "react";

const SlideImage = ({ showSlide, slide }) => {
  return (
    <div
      className="image container fade"
      style={
        showSlide === slide.id ? { display: "block" } : { display: "none" }
      }
    >
      <img src={slide.image} alt={slide.alt} />
    </div>
  );
};

export default SlideImage;
