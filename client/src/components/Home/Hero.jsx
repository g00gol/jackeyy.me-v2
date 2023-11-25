import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";

import edhtop16 from "../../assets/edhtop16.png";

export default function Hero() {
  return (
    <section className="grid-auto-fit grid h-full w-full gap-8 md:space-y-0">
      <span className="flex items-center justify-center md:h-full">
        <div className="flex h-fit flex-col space-y-10">
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
          <Link
            className="w-fit font-playfair text-xl text-secondary underline"
            to="projects"
          >
            view projects
          </Link>

          <div className="divider">
            <span className="flex space-x-4 text-xl text-secondary">
              <FaGithub />
              <FaLinkedin />
              <SiDevpost />
            </span>
          </div>
        </div>
      </span>
      <span className="flex h-full items-center justify-center bg-primary">
        <img className="w-full" src={edhtop16} alt="edh top 16" />
      </span>
    </section>
  );
}
