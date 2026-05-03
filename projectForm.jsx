import React, { useState } from "react";
import "./projectForm.css";

const ProjectForm = ({ onAddProject }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert("Please fill in both fields");
      return;
    }

    onAddProject({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="project-form">
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Project title"
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Project description"
            rows="3"
          />
        </div>

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ProjectForm;
