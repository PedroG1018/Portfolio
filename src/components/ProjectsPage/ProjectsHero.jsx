import React from "react";
import { Typography } from "@material-tailwind/react";

const ProjectsHero = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse mb-10 gap-4 items-center">
      <div className="lg:w-3/5">
        <Typography variant="h2">My projects</Typography>
        <Typography className="mt-2 sm:max-w-lg w-full">
          I've worked on a variety of projects over the years and I'm proud of
          the progress I've made. Many of these projects are open-source and
          available for others to explore and contribute to. If you're
          interested in any of the projects I've worked on, please feel free to
          check out the code and suggest any improvements or enhancements you
          might have in mind. Collaborating with others is a great way to learn
          and grow, and I'm always open to new ideas and feedback.
        </Typography>
      </div>
      <div className="my-auto">
        <img
          src="https://media.istockphoto.com/id/1470350238/vector/software-developer-working-with-computers.jpg?s=612x612&w=0&k=20&c=_NHyCVL47u6silIPxYoZJiq5XeqnzrtkKEcDaR-3C7Y="
          alt=" w-full"
          className="w-72"
        />
      </div>
    </div>
  );
};

export default ProjectsHero;
