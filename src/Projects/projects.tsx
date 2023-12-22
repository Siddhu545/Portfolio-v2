// ... (your existing import statements)

import React, { useState } from "react";
import Header from "../Header/header.tsx";
import Footer from "../Footer/footer.tsx";
import "./projects.css";

function Projects() {
  const [hoveredProject, setHoveredProject] = useState<null | number>(null);

  const projectData = [
    {
      id: 1,
      title: "City Courier Challenge",
      description: "City Courier Challenge is a Unity and Visual Studio C# game where players become a Delivery Guy navigating a dynamic city to deliver packages on time. Dodge obstacles, manage various package types, upgrade skills, and compete on leaderboards for the ultimate delivery experience.",
      technologies: ["Unity", "C#", "Blender", "Visual Studio"],
      features: [
        "Dynamic City Environment",
        "Package Management",
        "Upgradeable Skills",
        "Leaderboards Competition",
      ],
      downloadLink: "https://example.com/city-courier-challenge",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description 2",
      technologies: ["Tech2"],
      features: ["Feature2"],
      downloadLink: "https://example.com/project-2",
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description 3",
      technologies: ["Tech3"],
      features: ["Feature3"],
      downloadLink: "https://example.com/project-3",
    },
    // Add more projects as needed
  ];

  return (
    <>
      <Header />
      <div className="projects">
        <div className="project-cards">
          {projectData.map((project) => (
            <div
              key={project.id}
              className={`project-card ${hoveredProject === project.id ? "expanded" : ""}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <h3>{project.title}</h3>
              {hoveredProject === project.id && (
                <div className="expanded-details">
                  <p>{project.description}</p>
                  <p className="description">
                    <strong>Technologies:</strong> {project.technologies.join(", ")}
                  </p>
                  <p className="description">
                    <strong>Features:</strong> {project.features.join(", ")}
                  </p>
                  {/* <p>
                    <strong>Download:</strong>{" "}
                    <a href={project.downloadLink} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  </p> */}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Projects;
