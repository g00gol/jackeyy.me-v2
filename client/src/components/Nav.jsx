import { RxHamburgerMenu } from "react-icons/rx";

import useWindowScroll from "../hooks/useWindowScroll";

const navItems = [
  ["projects", "/projects"],
  ["keyboards", "/keyboards"],
  ["resume", "/resume"],
  ["contact", "/contact"],
];

export default function Nav() {
  const scrollY = useWindowScroll();

  function getNavClass() {
    const baseClass =
      "fixed navbar w-full bg-base-100 p-8 transition-[top] duration-300";
    const positionClass =
      scrollY >= 100 ? "left-0 right-0 top-0 z-20" : "invisible -top-32";
    return `${baseClass} ${positionClass}`;
  }

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <nav className="navbar relative w-full bg-base-100 p-8">
          <NavContent />
        </nav>

        <nav className={getNavClass()}>
          <NavContent />
        </nav>
      </div>

      <nav className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu min-h-full w-3/4 space-y-8 bg-base-100 p-12 text-xl text-secondary">
          <NavItems items={navItems} />
        </div>
      </nav>
    </div>
  );
}

const NavContent = () => {
  return (
    <>
      <div className="flex-1 font-playfair text-xl font-bold">jy</div>
      <div className="flex-none lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="text-xl"
        >
          <RxHamburgerMenu />
        </label>
      </div>
      <div className="text-lg hidden flex-none space-x-4 lg:block">
        <NavItems items={navItems} />
      </div>
    </>
  );
};

const NavItems = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <a key={item[1]} href={item[1]}>
          {item[0]}
        </a>
      ))}
    </>
  );
};
