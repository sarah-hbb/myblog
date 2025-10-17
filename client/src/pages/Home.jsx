import Hero from "../components/portfolio/Hero";
import PerspectiveText from "../components/portfolio/PerspectiveText";
import ThreeD from "../components/portfolio/ThreeD";
import FeatureCards from "../components/portfolio/sections/FeatureCards";

const Home = () => {
  return (
    <main className="bg-[url('/public/images/wave2.jpg')] bg-cover bg-center">
      <div className="w-full flex flex-wrap md:flex-row flex-col items-center justify-center gap-10 mx-auto w-max-7xl ">
        <PerspectiveText />
        <figure className="">
          <ThreeD />
        </figure>
      </div>
      <Hero />
      <FeatureCards />
    </main>
  );
};

export default Home;
