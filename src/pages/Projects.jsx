import React from "react";
import ProjectsList from "../components/ProjectsPage/ProjectsList";
import ProjectsHero from "../components/ProjectsPage/ProjectsHero";

const Projects = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <ProjectsHero />
      <ProjectsList />
    </div>
  );
};

export default Projects;
