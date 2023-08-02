import { Typography } from "@material-tailwind/react";
import React from "react";
import ProjectsList from "../components/ProjectsPage/ProjectsList";

const Projects = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <div className="flex space-x-4 mb-10">
        <div className="w-3/5">
          <Typography variant="h1">My projects</Typography>
          <Typography className="mt-4 max-w-lg">
            I've worked on a variety of projects over the years and I'm proud of
            the progress I've made. Many of these projects are open-source and
            available for others to explore and contribute to. If you're
            interested in any of the projects I've worked on, please feel free
            to check out the code and suggest any improvements or enhancements
            you might have in mind. Collaborating with others is a great way to
            learn and grow, and I'm always open to new ideas and feedback.
          </Typography>
        </div>
        <div className="w-2/5 my-auto">
          <img
            src="https://media.istockphoto.com/id/1470350238/vector/software-developer-working-with-computers.jpg?s=612x612&w=0&k=20&c=_NHyCVL47u6silIPxYoZJiq5XeqnzrtkKEcDaR-3C7Y="
            alt=" w-full"
            className=" object-contain"
          />
        </div>
      </div>
      <ProjectsList />
    </div>
  );
};

export default Projects;
