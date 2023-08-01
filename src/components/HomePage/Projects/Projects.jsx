import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projectData = [
    {
      title: "1-UP Store (Fictional eCommerce Site)",
      content:
        "A fictional ecommerce website hosting a collection a video-game-related products. Built with React, Firebase, Material UI, & Tailwind.",
      image:
        "https://game-store-api.web.app/static/media/1up.f21b0ca7ce0750a669cc.png",
    },
    {
      title: "Student Tracker",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet illo at amet vitae tempora quasi deserunt corrupti unde fugit laborum?",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    },
    {
      title: "Portfolio",
      content:
        "Portfolio website built from scratch using React, Material UI, & Tailwind.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    },
  ];

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
      {projectData.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
}
