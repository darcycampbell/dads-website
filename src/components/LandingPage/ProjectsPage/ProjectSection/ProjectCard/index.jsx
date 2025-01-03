import React, { useContext, useState } from "react";
import OverlayWindow from "../../../../Misc/OverlayWindow/OverlayWindow";
import Slideshow from "../../../../Misc/Slideshow/Slideshow";
import { ProjectContext } from "../../ProjectSection";

const ProjectCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const project = useContext(ProjectContext);

  return (
    <div className="project-card container">
      <img
        src={project.image}
        alt={project.alt}
        onClick={() => {
          setIsOpen(true);
        }}
      />
      <h4>{project.title}</h4>
      <OverlayWindow isOpen={isOpen} setIsOpen={setIsOpen}>
        <Slideshow gallery={project.gallery} />
      </OverlayWindow>
    </div>
  );
};

export default ProjectCard;
