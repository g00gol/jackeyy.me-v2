export default function Nav() {
  const navItems = [
    ["projects", "/projects"],
    ["keyboards", "/keyboards"],
    ["resume", "/resume"],
    ["contact", "/contact"],
  ];

  return (
    <nav className="font-playfair inset-0 flex h-fit w-full items-center justify-between bg-background p-8 text-xl">
      <a className="text-2xl font-bold">jy</a>
      <span className="flex space-x-4">
        {navItems.map((item) => (
          <a key={item[1]} href={item[1]}>
            {item[0]}
          </a>
        ))}
      </span>
    </nav>
  );
}
