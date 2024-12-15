import React, { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [style, setStyle] = useState({ display: "none" });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        setStyle({ display: "block" });
      } else {
        setStyle({ display: "none" });
      }
    });
  });

  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <button
      onClick={scrollToTop}
      id="goToTopButton"
      style={style}
    >
      Top
    </button>
  );
};

export default ScrollToTopButton;
