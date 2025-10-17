const abilities = [
  {
    title: "Quality Focus",
    description:
      "I am committed to delivering high-quality work that meets and exceeds client expectations.",
    imgPath: "/images/featureCards/quality.png",
  },
  {
    title: "Effective Communication",
    description:
      "I prioritize clear and open communication to ensure that project goals are understood and met.",
    imgPath: "/images/featureCards/chat.png",
  },
  {
    title: "Problem-Solving Skills",
    description:
      "I excel at identifying challenges and finding innovative solutions to overcome them.",
    imgPath: "/images/featureCards/solution.png",
  },
  {
    title: "Adaptability",
    description:
      "I am flexible and adaptable, able to adjust to changing project requirements and environments.",
    imgPath: "/images/featureCards/adaptable.png",
  },
  {
    title: "Team Collaboration",
    description:
      "I work well in team settings, contributing to a positive and productive work environment.",
    imgPath: "/images/featureCards/team.png",
  },
  {
    title: "Time Management",
    description:
      "I effectively manage my time to meet deadlines and deliver projects on schedule.",
    imgPath: "/images/featureCards/time.png",
  },
];

const FeatureCards = () => {
  return (
    <section className="w-full max-w-7xl mx-auto">
      <div className="grid-cols-1 md:grid-cols-3 sm:grid-cols-2 grid gap-5 px-5 text-cyan-100">
        {abilities.map((ability, index) => (
          <div
            key={index}
            className="p-4 flex flex-col items-center bg-cyan-900/50 rounded-xl transition-all hover:animate-pulse"
          >
            <img
              src={ability.imgPath}
              alt={ability.title}
              className="sm:w-16 w-10 sm:h-16 h-10 mb-2"
            />
            <h3 className="text-xl font-semibold mb-2">{ability.title}</h3>
            <p className="">{ability.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
