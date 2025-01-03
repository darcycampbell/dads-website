import React, { useState } from "react";
import SlideImage from "./SlideImage/SlideImage";
import SlideButton from "./SlideButton/SlideButton";

const Slideshow = ({ gallery }) => {
  const [showSlide, setSlide] = useState(1);
  const [showText, setText] = useState(false);
  const displaySetting = [{ display: "block" }, { display: "none" }];

  function updateShow(n) {
    const limit = gallery.images.length;
    if (n < 1) {
      setSlide(limit);
    } else if (n > limit) {
      setSlide(1);
    } else {
      setSlide(n);
    }
  }

  function handleOnMouseEnter() {
    setText(true);
  }

  function handleOnMouseLeave() {
    setText(false);
  }

  return (
    <div className="slideshow container">
      <div className="content container">
        {gallery.images.map((image) => {
          return <SlideImage key={image.id} slide={image} showSlide={showSlide} />;
        })}
        <span
          style={showText ? displaySetting[1] : displaySetting[0]}
          onMouseEnter={handleOnMouseEnter}
        >
          &#11205;
        </span>
        <p
          style={showText ? displaySetting[0] : displaySetting[1]}
          onMouseLeave={handleOnMouseLeave}
        >
          {gallery.text}
        </p>
      </div>
      <SlideButton
        className="prev"
        updateShow={updateShow}
        showSlide={showSlide}
        symbol="&#10094;"
      />
      <SlideButton
        className="next"
        updateShow={updateShow}
        showSlide={showSlide}
        symbol="&#10095;"
      />
    </div>
  );
};

export default Slideshow;
