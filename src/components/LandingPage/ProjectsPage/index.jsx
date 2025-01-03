import React, { useEffect, useState } from "react";
import projects from "../../../content/projects";
import ProjectSection from "./ProjectSection";
import TableOfContents from "../../Misc/TableOfContents";
import useScrollIntoView from "../../../hooks/useScrollIntoView";
import useWordShaper from "../../../hooks/useWordShaper";

const ProjectsPage = () => {
  const [selectedSection, setSelectedSection] = useState("");
  const scroller = useScrollIntoView();
  const makeOneWord = useWordShaper("makeOneWord");
  var modifier = 0;
  const navItems = [
    { id: 1, name: "Renovations" },
    { id: 2, name: "New Residential" },
    { id: 3, name: "Commercial" },
    { id: 4, name: "Current Projects" },
  ];

  useEffect(() => {
    const element = document.getElementById(makeOneWord(selectedSection));
    if (element) {
      scroller(element);
    }
  }, [selectedSection, scroller, makeOneWord]);

  function createProjectCategories() {
    const array = [];
    navItems.forEach((item) => {
      const newItem = projects.filter((project) => {
        return project.category === item.name;
      });
      if (newItem.length !== 0) {
        array.push(newItem);
      }
    });
    return array;
  }

  return (
    <div className="projects-page container">
      <div className="nav-section container">
        <h2>Projects</h2>
        <TableOfContents
          contents={navItems}
          columnLength={1}
          selectorFunction={setSelectedSection}
        />
      </div>
      <div className="project-sections container">
        {createProjectCategories().map((category, index) => {
          modifier += category.length;
          return (
            <ProjectSection
              key={index}
              id={makeOneWord(category[0].category)}
              category={category}
              modifier={modifier - category.length}
            />
          );
        })}
      </div>
      <div class="recaptcha-notice">
        This site is protected by reCAPTCHA and the Google{" "}
        <a href="https://policies.google.com/privacy">Privacy Policy</a> and{" "}
        <a href="https://policies.google.com/terms">Terms of Service</a> apply.
      </div>
    </div>
  );
};

export default ProjectsPage;
