import React from "react";
import {
  Carousel,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import {
  BiLogoAlgolia,
  BiLogoFirebase,
  BiLogoReact,
  BiLogoStripe,
  BiLogoTailwindCss,
} from "react-icons/bi";

const ProjectsList = () => {
  const projects = [
    {
      id: "store",
      title: "1-UP Store (Fictional eCommerce Site)",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, nesciunt. Architecto aliquam tempora eligendi eum necessitatibus, delectus magni earum hic, recusandae placeat voluptate? Assumenda ipsam quidem repudiandae amet tempore eius earum odit. Voluptas et nam iste molestias quam nisi velit tempora odio, laudantium blanditiis rem sed deserunt, voluptatem ullam vitae!",
      image:
        "https://www.stylefactoryproductions.com/wp-content/uploads/2022/04/how-to-make-an-online-store-1024x576.png",
      github: "#",
      demo: "#",
      technologies: [
        <Tooltip content="React">
          <IconButton className="bg-blue-800">
            <BiLogoReact size={"2em"} />
          </IconButton>
        </Tooltip>,
        <Tooltip content="Firebase">
          <IconButton className="bg-blue-800">
            <BiLogoFirebase size={"2em"} />
          </IconButton>
        </Tooltip>,
        <Tooltip content="Tailwind CSS">
          <IconButton className="bg-blue-800">
            <BiLogoTailwindCss size={"2em"} />
          </IconButton>
        </Tooltip>,
        <Tooltip content="Algolia">
          <IconButton className="bg-blue-800">
            <BiLogoAlgolia size={"2em"} />
          </IconButton>
        </Tooltip>,
        <Tooltip content="Stripe">
          <IconButton className="bg-blue-800">
            <BiLogoStripe size={"2em"} />
          </IconButton>
        </Tooltip>,
      ],
    },
  ];
  return (
    <div className="mt-8 space-y-8">
      {projects.map((project) => (
        <div className="flex gap-4" id={project.id}>
          <div className="w-2/5">
            <img src={project.image} />
            <div className="flex justify-center mt-4 space-x-4">
              <Button className="w-full capitalize bg-gray-100 text-black shadow-black hover:shadow-black">
                Live Demo
              </Button>
              <Button className="w-full capitalize bg-gray-100 text-black shadow-black hover:shadow-black">
                Github
              </Button>
            </div>
          </div>
          <div className="w-3/5">
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
