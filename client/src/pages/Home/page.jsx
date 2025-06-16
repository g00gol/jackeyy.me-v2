import HomeLayout from "./layout";
import Hero from "../../components/Home/Hero";
import Project from "../../components/Home/Project";

import {
  edhtop16_project,
  nycheatrecovery,
  shima,
  kessoku,
} from "../../assets";

export default function Home() {
  return (
    <HomeLayout>
      <Hero />

      <section id="projects" className="mt-20 space-y-8">
        <div className="mx-8 flex justify-between">
          <Project
            project={{
              title: "EDHTop16",
              image: edhtop16_project,
              description:
                "EDHTop16 is a web app with 100,000 monthly users that provides a leaderboard for the top 16 players in cEDH tournament, aggregating their decks and scores. Built using React, TailwindCSS and MongoDB.",
              link: "https://edhtop16.com",
            }}
          />
          <Project
            project={{
              title: "Shima",
              image: shima,
              description:
                "First place at HackNJIT 2022! Shima is a bread-crumb style navigation app that implements anticyclical navigation to help users navigate hike trails or camping terrain. Built using Flutter.",
              link: "https://devpost.com/software/shima",
            }}
          />
          <Project
            project={{
              title: "Kessoku",
              image: kessoku,
              description:
                "Kessoku is an augmented reality music player that lets users visualize their music in a 3D space. Built using React, Three.js and WebXR.",
              link: "https://devpost.com/software/kessoku",
            }}
          />
          <Project
            project={{
              title: "NYC Theatre Recovery",
              image: nycheatrecovery,
              description:
                "[Deprecated] NYC Heat Recovery aims to build heat transfer pipes from subways to reduce carbon emissions in homes and save energy. The web app estimates cost and energy savings.",
              link: "https://decarbonizing-et1z1mqgk-g00gol.vercel.app/map",
            }}
          />
        </div>
      </section>
    </HomeLayout>
  );
}
