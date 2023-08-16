import { IconButton, Tooltip } from "@material-tailwind/react";
import {
  BiLogoAlgolia,
  BiLogoFirebase,
  BiLogoReact,
  BiLogoStripe,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { RiSupabaseFill } from "react-icons/ri";
import { TbBrandRadixUi } from "react-icons/tb";

import Spotify from "./images/Spotify Clone.png";

export const projects = [
  {
    id: "store",
    title: "1-UP Store (Fictional eCommerce Site)",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, nesciunt. Architecto aliquam tempora eligendi eum necessitatibus, delectus magni earum hic, recusandae placeat voluptate? Assumenda ipsam quidem repudiandae amet tempore eius earum odit. Voluptas et nam iste molestias quam nisi velit tempora odio, laudantium blanditiis rem sed deserunt, voluptatem ullam vitae!",
    image:
      "https://www.stylefactoryproductions.com/wp-content/uploads/2022/04/how-to-make-an-online-store-1024x576.png",
    github: "https://github.com/PedroG1018/game-store-client",
    demo: "https://game-store-api.web.app/",
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
  {
    id: "spotify",
    title: "Spotify Clone",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, nesciunt. Architecto aliquam tempora eligendi eum necessitatibus, delectus magni earum hic, recusandae placeat voluptate? Assumenda ipsam quidem repudiandae amet tempore eius earum odit. Voluptas et nam iste molestias quam nisi velit tempora odio, laudantium blanditiis rem sed deserunt, voluptatem ullam vitae!",
    image: { Spotify },
    github: "https://github.com/PedroG1018/spotify-clone",
    demo: "https://spotify-clone-3wosqy2x4-pedrog1018.vercel.app/",
    technologies: [
      <Tooltip content="React">
        <IconButton className="bg-blue-800">
          <BiLogoReact size={"2em"} />
        </IconButton>
      </Tooltip>,
      <Tooltip content="Typescript">
        <IconButton className="bg-blue-800">
          <BiLogoTypescript size={"2em"} />
        </IconButton>
      </Tooltip>,
      <Tooltip content="Supabase">
        <IconButton className="bg-blue-800">
          <RiSupabaseFill size={"2em"} />
        </IconButton>
      </Tooltip>,
      <Tooltip content="Tailwind CSS">
        <IconButton className="bg-blue-800">
          <BiLogoTailwindCss size={"2em"} />
        </IconButton>
      </Tooltip>,
      <Tooltip content="Radix UI">
        <IconButton className="bg-blue-800">
          <TbBrandRadixUi size={"2em"} />
        </IconButton>
      </Tooltip>,
      <Tooltip content="Stripe">
        <IconButton className="bg-blue-800">
          <BiLogoStripe size={"2em"} />
        </IconButton>
      </Tooltip>,
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, nesciunt. Architecto aliquam tempora eligendi eum necessitatibus, delectus magni earum hic, recusandae placeat voluptate? Assumenda ipsam quidem repudiandae amet tempore eius earum odit. Voluptas et nam iste molestias quam nisi velit tempora odio, laudantium blanditiis rem sed deserunt, voluptatem ullam vitae!",
    image: { Spotify },
    github: "https://github.com/PedroG1018/spotify-clone",
    demo: "https://spotify-clone-3wosqy2x4-pedrog1018.vercel.app/",
    technologies: [
      <Tooltip content="React">
        <IconButton className="bg-blue-800">
          <BiLogoReact size={"2em"} />
        </IconButton>
      </Tooltip>,
      <Tooltip content="Typescript">
        <IconButton className="bg-blue-800">
          <BiLogoTypescript size={"2em"} />
        </IconButton>
      </Tooltip>,
      <Tooltip content="Supabase">
        <IconButton className="bg-blue-800">
          <RiSupabaseFill size={"2em"} />
        </IconButton>
      </Tooltip>,
      <Tooltip content="Tailwind CSS">
        <IconButton className="bg-blue-800">
          <BiLogoTailwindCss size={"2em"} />
        </IconButton>
      </Tooltip>,
      <Tooltip content="Radix UI">
        <IconButton className="bg-blue-800">
          <TbBrandRadixUi size={"2em"} />
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
