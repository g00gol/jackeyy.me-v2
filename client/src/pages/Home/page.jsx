import HomeLayout from "./layout";
import Hero from "../../components/Home/Hero";

export default function Home() {
  return (
    <HomeLayout>
      <Hero />
      <div className="flex h-screen flex-col items-center justify-center space-y-4 text-3xl">
        <div className="flex w-52 flex-col gap-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
        <h2>site under construction</h2>
      </div>
    </HomeLayout>
  );
}
