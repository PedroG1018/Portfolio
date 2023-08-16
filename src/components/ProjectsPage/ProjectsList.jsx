import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { projects } from "../../data";
import { useNavigate } from "react-router-dom";

const ProjectsList = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-8">
      {projects.map((project) => (
        <div
          className="flex lg:flex-row flex-col gap-6 mx-auto justify-center items-center mt-8"
          id={project.id}
        >
          <div className="lg:w-2/5 w-96">
            <img src={project.image} alt="project" />
            <div className="flex justify-center mt-4 space-x-4">
              <Button
                className="w-full capitalize bg-gray-100 text-black shadow-black hover:shadow-black"
                onClick={() => window.open(project.demo)}
              >
                Live Demo
              </Button>
              <Button
                className="w-full capitalize bg-gray-100 text-black shadow-black hover:shadow-black"
                onClick={() => window.open(project.github)}
              >
                Github
              </Button>
            </div>
          </div>
          <div className="lg:w-3/5 max-w-lg">
            <Typography variant="h5">{project.title}</Typography>
            <Typography>{project.desc}</Typography>
            <Typography variant="h5" className="mt-2">
              Technologies Used
            </Typography>
            <div className="flex space-x-2 mt-2">
              {project.technologies.map((technology) => technology)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;
