import React, { useContext, useEffect, useRef, useState } from "react";
import Slide from "./Slide";
import SlideButton from "./SlideButton";
import { ProjectContext } from "../../..";

const Slideshow = () => {
  const [showSlide, setSlide] = useState(1);
  const [showText, setText] = useState(false);
  const project = useContext(ProjectContext)
  const displaySetting = [{ display: "block" }, { display: "none" }];

  function updateShow(n) {
    const limit = project.gallery.length;
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
      <div className="slideshow content">
        {project.gallery.map((slide) => {
          return (
            <Slide
              key={slide.id}
              slide={slide}
              showSlide={showSlide}
            />
          );
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
          {project.galleryText}
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
