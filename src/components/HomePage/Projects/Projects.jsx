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
        "A fictional ecommerce website hosting a collection a video-game-related products. Built with React, Firebase, Stripe, Material UI, & Tailwind.",
      image:
        "https://game-store-api.web.app/static/media/1up.f21b0ca7ce0750a669cc.png",
    },
    {
      title: "Spotify Clone",
      content:
        "A Spotify clone where users can upload songs and listen to them. Built with React, Supabase, Stripe, Radix UI, & Tailwind.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
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
        "https://media.istockphoto.com/id/947664372/vector/programmers-coding-and-correct-errors-in-project.jpg?s=612x612&w=0&k=20&c=lvgDzgFhupp5njuDlKjwUPawaB_O29m9ju7IPwvn3VY=",
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
