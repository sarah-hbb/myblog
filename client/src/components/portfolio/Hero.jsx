const words = ["ideas", "designs", "concepts", "dreams"];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden flex mx-auto max-w-5xl p-8 
        w-full"
    >
      <div className="p-5 text-cyan-200 [&_h1]:text-3xl font-extralight ">
        <h1 className="mb-2 text-amber-300 font-bold italic">
          I am Sarah Habibi
        </h1>
        <h1 className="mb-2">
          a passionate front-end developer, based in the Netherlands
        </h1>
        <div className="flex gap-2 items-start overflow-hidden ">
          <h1>who is turning</h1>
          {/* wrapper */}
          <span className=" h-9 animate-wordSlide uppercase ">
            {words.map((word, index) => (
              <h1
                className="text-transparent bg-clip-text bg-gradient-to-r 
              from-yellow-500 to-pink-500 text-nowrap font-bold"
                key={index}
              >
                {word}
              </h1>
            ))}
          </span>
        </div>

        <h1>into real projects</h1>
        <h1>which are intuitive and perform reliably.</h1>
      </div>
    </section>
  );
};

export default Hero;
