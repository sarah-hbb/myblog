import GlowCard from "../../ui/GlowCard";
import TitleHeader from "../../ui/TitleHeader";

const FeatureCards = () => {
  return (
    <section className="w-full max-w-7xl mx-auto">
      <TitleHeader
        title="Core Abilities"
        sub={"What I bring to your project?"}
      />
      <GlowCard />
    </section>
  );
};

export default FeatureCards;
