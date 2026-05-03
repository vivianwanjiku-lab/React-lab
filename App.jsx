import React, { useState } from "react";
import "./App.css";
import ProjectList from "./projectList.jsx";
import ProjectForm from "./projectForm.jsx";
import SearchBar from "./searchbar.jsx";

const App = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A responsive landing page built with React and modern design.",
    },
    {
      id: 2,
      title: "Task Tracker",
      description: "A simple task manager app with search and dynamic updates.",
    },
    {
      id: 3,
      title: "Design System",
      description: "A modular project showcase using reusable components.",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const addProject = (newProject) => {
    setProjects([...projects, { ...newProject, id: Date.now() }]);
  };

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="app">
      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Landing page</p>
          <h1>Share your projects in a clean, responsive showcase</h1>
          <p className="hero-text">
            Add new projects, search instantly, and explore a design inspired by
            your mock-up.
          </p>
        </div>
      </header>

      <main className="content">
        <div className="controls">
          <ProjectForm onAddProject={addProject} />
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <ProjectList projects={filteredProjects} />
      </main>
    </div>
  );
};

export default App;
