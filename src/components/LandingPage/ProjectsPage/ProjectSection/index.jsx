import React, { createContext, useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const ProjectContext = createContext();

const ProjectSection = ({ id, category, modifier }) => {
  const newModifier = 2 + modifier;
  const [show, setShow] = useState(newModifier);
  const [pressed, setPressed] = useState(false);

  function handleClick() {
    setPressed(!pressed);
  }

  useEffect(() => {
    if (pressed) {
      setShow(100);
    } else {
      setShow(newModifier);
    }
  }, [pressed, newModifier]);

  return (
    <div className="project-category container" id={id}>
      <h3>{category[0].category}</h3>
      <div className="project-grid container">
        {category.map((project) => {
          return (
            <ProjectContext.Provider value={project}>
              {project.id <= show ? <ProjectCard key={project.id} /> : null}
            </ProjectContext.Provider>
          );
        })}
      </div>
      <p onClick={handleClick}>{pressed ? <span>&uarr;</span> : "Show"}</p>
    </div>
  );
};

export { ProjectContext };
export default ProjectSection;
