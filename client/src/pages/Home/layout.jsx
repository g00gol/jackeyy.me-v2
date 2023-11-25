import Nav from "../../components/Nav";

export default function HomeLayout({ children }) {
  return (
    <main className="flex h-screen flex-col">
      <Nav />
      <div className="h-fit flex-grow space-y-8 p-8 pt-0">{children}</div>
    </main>
  );
}
