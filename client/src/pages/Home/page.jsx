import { Link } from "react-router-dom";

import HomeLayout from "./layout";
import edhtop16 from "../../assets/edhtop16.png";

export default function Home() {
  return (
    <HomeLayout>
      <div className="grid-auto-fit grid h-full w-full space-y-8 md:space-y-0">
        <span className="flex h-fit flex-col space-y-10 md:m-40 md:h-full">
          <h1>jackeyy.me</h1>
          <p>
            that's me, im jackey, nice to meet you!
            <br />
            im a software developer based in nyc,
            <br />
            studying cs at stevens tech
            <br />
            feel free to look around!
          </p>
          <Link
            className="font-playfair w-fit text-xl text-secondary underline"
            to="projects"
          >
            view projects
          </Link>
        </span>
        <span className="flex h-full items-center justify-center bg-primary">
          <img src={edhtop16} className="w-5/6" />
        </span>
      </div>
    </HomeLayout>
  );
}
