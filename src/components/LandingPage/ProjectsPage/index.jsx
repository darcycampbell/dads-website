import React from "react";
import projects from "../../../content/projects";
import ProjectSection from "./ProjectSection";

const ProjectsPage = () => {
  var modifier = 0;

  const navItems = [
    "Renovations",
    "New Residential",
    "Commercial",
    "Current Projects",
  ];

  function createProjectCategories() {
    const array = [];
    navItems.forEach((item) => {
      const newItem = projects.filter((project) => {
        return project.category === item.toLowerCase().replace(" ", "");
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
        <div>
          {navItems.map((item, index) => {
            return (
              <div>
                <a key={index} href={`#${item.toLowerCase().replace(" ", "")}`}>
                  {item}
                </a>
                <br />
              </div>
            );
          })}
        </div>
      </div>
      <div className="project-sections container">
        {createProjectCategories().map((category, index) => {
          modifier += category.length;
          return (
            <div key={index} id={category[0].category}>
              <ProjectSection
                category={category}
                modifier={modifier - category.length}
              />
            </div>
          );
        })}
      </div>
      <div class="recaptcha-notice">
        This site is protected by reCAPTCHA and the Google {" "} 
        <a href="https://policies.google.com/privacy">Privacy Policy</a> and {" "}
        <a href="https://policies.google.com/terms">Terms of Service</a> apply.
      </div>
    </div>
  );
};

export default ProjectsPage;
