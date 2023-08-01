import { Typography } from "@material-tailwind/react";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Projects from "../components/HomePage/Projects/Projects";
import Hero from "../components/HomePage/Hero";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-8">
      <Hero />
      <Projects />
    </div>
  );
};

export default Home;
