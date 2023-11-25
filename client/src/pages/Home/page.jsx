import HomeLayout from "./layout";
import Hero from "../../components/Home/Hero";

export default function Home() {
  return (
    <HomeLayout>
      <Hero />
      <div className="h-screen"> hello </div>
    </HomeLayout>
  );
}
