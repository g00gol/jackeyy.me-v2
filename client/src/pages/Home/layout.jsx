import Nav from "../../components/Nav";

export default function HomeLayout({ children }) {
  return (
    <main className="flex h-screen flex-col">
      <Nav />
      <section className="h-fit space-y-8 p-8 pt-0 md:flex-grow">
        {children}
      </section>
    </main>
  );
}
