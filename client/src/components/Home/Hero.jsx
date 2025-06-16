import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";

import Nav from "../../components/Nav";
import Image from "./Image";
import useWindowScroll from "../../hooks/useWindowScroll";

import { edhtop16, edhtop16_mobile } from "../../assets";

const SOCIAL_LINKS = [
  {
    icon: <FaGithub />,
    link: "https://github.com/g00gol",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/jackeyy",
  },
  {
    icon: <SiDevpost />,
    link: "https://devpost.com/g00gol",
  },
];

export default function Hero() {
  const scrollY = useWindowScroll();
  const [imageFixed, setImageFixed] = useState(false);
  const imageRef = useRef(null);

  const maxScroll = 200;
  const imageYPos = scrollY < maxScroll ? scrollY * 0.5 : maxScroll * 0.5;

  useEffect(() => {
    setImageFixed(scrollY >= maxScroll);
  }, [scrollY]);

  return (
    <div className="flex h-screen flex-col">
      <Nav />
      <section className="grid-auto-fit grid w-full flex-grow gap-8 p-8 pt-0">
        <HeroText />
        <HeroImage
          imageYPos={imageYPos}
          imageFixed={imageFixed}
          imageRef={imageRef}
        />
      </section>
    </div>
  );
}

const HeroText = () => {
  return (
    <span className="flex md:h-full lg:items-center lg:justify-center">
      <div className="flex h-fit w-full flex-col space-y-10 lg:w-auto">
        <h1>jackeyy.me</h1>
        <p className="text-lg md:text-xl">
          that's me, im jackey, nice to meet you!
          <br />
          im a software developer based in nyc,
          <br />
          studying cs at stevens tech
          <br />
          feel free to look around!
        </p>
        <a
          className="w-fit font-playfair text-xl text-secondary underline"
          href="#projects"
        >
          view projects
        </a>

        <div className="divider">
          <span className="flex space-x-4 text-xl text-secondary">
            {SOCIAL_LINKS.map(({ icon, link }) => (
              <a key={link} href={link} target="_blank" rel="noreferrer">
                {icon}
              </a>
            ))}
          </span>
        </div>
      </div>
    </span>
  );
};

const HeroImage = ({ imageYPos, imageFixed, imageRef }) => {
  return (
    <span className="flex h-full items-center justify-center bg-primary">
      <Image
        ref={imageRef}
        className="w-full"
        style={{
          transform: `translateY(${imageYPos}px)`,
          position: imageFixed ? "fixed" : "relative",
        }}
        src={edhtop16}
        mobileSrc={edhtop16_mobile}
        alt="edhtop16"
      />
    </span>
  );
};
