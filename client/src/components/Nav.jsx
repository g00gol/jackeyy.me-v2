import { RxHamburgerMenu } from "react-icons/rx";

export default function Nav() {
  const navItems = [
    ["projects", "/projects"],
    ["keyboards", "/keyboards"],
    ["resume", "/resume"],
    ["contact", "/contact"],
  ];

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <nav className="navbar bg-base-100 w-full p-8">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <RxHamburgerMenu />
            </label>
          </div>
          <div className="mx-2 flex-1 px-2">Navbar Title</div>
          <div className="hidden flex-none space-x-4 lg:block">
            <NavItems items={navItems} />
          </div>
        </nav>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu bg-base-200 min-h-full w-80 p-4">
          <NavItems items={navItems} />
        </div>
      </div>
    </div>
  );
}

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
