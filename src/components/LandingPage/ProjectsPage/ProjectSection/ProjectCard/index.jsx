import React, { useContext, useState } from "react";
import PopUpDisplay from "./PopUpDisplay" 
import { ProjectContext } from "../../ProjectSection";

const ProjectCard = () => {
  const [show, setShow] = useState(false);
  const project = useContext(ProjectContext);

  return (
    <div className="project-card container">
      <img src={project.image} alt={project.alt} onClick={() => {setShow(true)}} />
      <h4>{project.title}</h4>
      <PopUpDisplay show={show} setShow={setShow} />
    </div>
  );
};

export default ProjectCard;
