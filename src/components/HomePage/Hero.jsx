import { Typography } from "@material-tailwind/react";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-10 space-y-6 mb-10">
      <div className="lg:w-1/2 w-72">
        <img
          src="https://reactfolio.tharindu.dev/homepage.jpg"
          alt="portrait"
          className="rounded-xl object-contain"
        />
      </div>
      <div className="w-4/5">
        <div className="">
          <img
            src="https://avatars.githubusercontent.com/u/49994182?v=4"
            alt="icon"
            className="w-24 rounded-full border-black border-double"
          />
        </div>
        <Typography variant="h3" className="mt-2 font-normal">
          <strong>Pedro Gutierrez</strong>
          <br />
          Full-stack web and mobile app developer
        </Typography>
        <Typography className="mt-4">
          I am a backend developer with expertise in Node.js. I have experience
          in building scalable, secure and reliable web applications using
          various frameworks and technologies. I enjoy solving complex problems
          and learning new skills. I am passionate about creating high-quality
          code that follows best practices and industry standards. I am always
          looking for new challenges and opportunities to grow as a developer.
        </Typography>
        <div className="flex space-x-2 mt-4">
          <Link to={{ pathname: "https://github.com" }} target="_blank">
            <AiFillGithub size={"2em"} />
          </Link>
          <AiFillLinkedin size={"2em"} />
          <AiFillMail size={"2em"} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
