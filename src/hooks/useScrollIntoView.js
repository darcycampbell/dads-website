const useScrollIntoView = () => {
  return (element, commonClassName, styleClassName) => {
    if (element) {
      document.querySelectorAll(`.${commonClassName}`).forEach((e) => {
        e.classList.remove(styleClassName);
      });
      if (element.classList.contains("top")) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        element.classList.add(styleClassName);
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };
};

export default useScrollIntoView;
