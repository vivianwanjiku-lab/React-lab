import React from "react";
import "./projectList.css";

const ProjectList = ({ projects }) => {
  if (projects.length === 0) {
    return <p>No projects found. Add a new project above!</p>;
  }

  return (
    <div className="project-list">
      {projects.map((project) => (
        <div key={project.id} className="project-item">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
