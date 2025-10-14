import Hero from "../components/portfolio/Hero";
import PerspectiveText from "../components/portfolio/PerspectiveText";
import ThreeD from "../components/portfolio/ThreeD";

const Home = () => {
  return (
    <main className="bg-[url('/public/images/wave2.jpg')] bg-cover bg-center">
      <div className="flex items-center justify-center gap-10">
        <PerspectiveText />
        <ThreeD />
      </div>
      <Hero />
    </main>
  );
};

export default Home;
