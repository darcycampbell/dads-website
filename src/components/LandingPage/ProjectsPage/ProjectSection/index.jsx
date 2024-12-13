import React, { createContext, useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const ProjectContext = createContext();

const ProjectSection = ({ category, modifier }) => {
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
    <div>
      {category.map((project) => {
        return (
          <ProjectContext.Provider value={project}>
            {project.id <= show ? <ProjectCard key={project.id} /> : null}
          </ProjectContext.Provider>
        );
      })}

      <div>
        <button onClick={handleClick}>Show {pressed ? "less" : "more"}</button>
      </div>
    </div>
  );
};

export { ProjectContext };
export default ProjectSection;
