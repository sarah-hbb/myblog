import TitleHeader from "../ui/TitleHeader";

const HomeSection = ({ title, sub, children, className }) => {
  return (
    <section className={`w-full max-w-7xl mx-auto mb-14 ${className}`}>
      <TitleHeader title={title} sub={sub} />
      {children}
    </section>
  );
};

export default HomeSection;
