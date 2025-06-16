import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="sm:footer-horizontal footer mt-12 items-center p-4 text-neutral-content">
      <aside className="grid-flow-col items-center">
        <img src="/favicon.ico" alt="favicon" />
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a>
          <FaLinkedin />
        </a>
        <a>
          <SiDevpost />
        </a>
        <a>
          <FaGithub />
        </a>
      </nav>
    </footer>
  );
}
