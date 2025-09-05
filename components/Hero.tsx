import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-ocean-blue text-white h-[80vh] min-h-[500px] flex items-center justify-center text-center">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('https://picsum.photos/1920/1080?nature&2')", opacity: 0.3 }}
      ></div>
      <div className="relative z-10 p-6 container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Practical AI for the Garden Route.
          <br />
          <span className="mt-2 block">Praktiese KI vir die Tuinroete.</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          High-impact AI consulting to grow your business, and accessible training to build your skills. Proudly based in Hessequa, serving our entire region.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#consulting"
            className="bg-sunrise-gold text-slate-grey font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
          >
            Explore AI Consulting
          </a>
          <a
            href="#academy"
            className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-ocean-blue transition-all duration-300"
          >
            Discover the AI Academy
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
