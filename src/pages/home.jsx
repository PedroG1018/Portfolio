import { Typography } from "@material-tailwind/react";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col lg:flex-row max-w-5xl mx-auto px-8 justify-center items-center space-x-10 space-y-6">
      <div className="w-1/2">
        <img
          src="https://reactfolio.tharindu.dev/homepage.jpg"
          className="w-96"
        />
      </div>
      <div className="w-4/5">
        <div className="">
          <img
            src="https://reactfolio.tharindu.dev/logo.png"
            className="w-10"
          />
        </div>
        <Typography variant="h2">
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
          <AiFillGithub
            size={"2em"}
            onClick={() => (window.location.href = "github.com")}
          />
          <AiFillLinkedin size={"2em"} />
          <AiFillMail size={"2em"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
