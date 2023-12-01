import React, { useEffect } from "react";
import Header from "../Header/header.tsx";
import Footer from "../Footer/footer.tsx";
import "./projects.css";

function Projects() {
  const projectData = [
    { id: 1, title: "Project 1", description: "Description 1" },
    { id: 2, title: "Project 2", description: "Description 2" },
    { id: 3, title: "Project 3", description: "Description 3" },
    { id: 1, title: "Project 1", description: "Description 1" },
    { id: 2, title: "Project 2", description: "Description 2" },
    { id: 3, title: "Project 3", description: "Description 3" },
  ];

  return (
    <>
      <Header />
      <div className="projects">
        <div className="project-cards">
          {projectData.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Projects;
