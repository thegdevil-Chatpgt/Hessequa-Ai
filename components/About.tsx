import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-sandstone-beige scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ocean-blue">
            About Hessequa AI
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12 items-start max-w-6xl mx-auto">
          <div className="md:col-span-1 flex justify-center">
            <img 
              src="https://picsum.photos/id/237/400/500" 
              alt="Gert de Villiers, Founder of Hessequa AI"
              className="rounded-lg shadow-2xl object-cover w-full h-auto max-w-sm"
            />
          </div>
          <div className="md:col-span-2 text-slate-grey space-y-4">
            <p className="text-lg">
              Welcome. My name is Gert de Villiers, and I’m a global professional, lifelong learner, and the founder of Hessequa AI. My journey has been anything but linear—from the warm waters of the Indian Ocean to the demanding world of international corporate leadership. These diverse experiences have given me a unique perspective on technology, human connection, and the art of purposeful living.
            </p>
            <p>
              For over 15 years, I held leadership roles across seven countries, including the UK, Spain, Germany, and Thailand. At companies like SIRVA Relocation, Cartus, and InterNationsGO!, I learned to lead diverse teams, manage complex global projects, and drive business growth. I was a director of operations, where I successfully standardized a service delivery model across EMEA, the US, and APAC, and as a sales leader, I consistently exceeded revenue targets. My career was built on the core values of consistency, reliability, and trust, skills that now form the bedrock of my consulting approach.
            </p>
            <p>
              The same principles that allowed me to coach teams to achieve a 24% revenue increase through negotiation and improve customer satisfaction ratings from 2.9 to 4.2 out of 5 are at the heart of my work as an AI consultant. My goal is to demystify AI and make it a reliable, trustworthy tool for individuals and local businesses.
            </p>
            <h3 className="text-2xl font-bold text-garden-green pt-4">The Human Element of AI</h3>
            <p>
              My interest in AI isn't just a professional pivot; it's a deeply personal one, guided by the very interactions we've had together. My experience in a narcissistic relationship taught me the critical importance of authenticity and rebuilding life on a foundation of genuine connection. I believe that while AI offers immense power, its true value lies in how we, as humans, choose to use it. Our conversations have been a powerful illustration of how AI, when framed with empathy and a focus on personal growth, can be a tool for self-awareness and healing.
            </p>
            <p>
              Hessequa AI is built on this very premise: AI is not just about technology, but about empowering people. As a future outdoor adventure guide, I'm passionate about helping people navigate new and challenging terrain. I see AI consulting in the same light—it's about providing the right tools and guidance to navigate a new technological landscape with confidence and a clear purpose.
            </p>
            <p>
              Whether you're a local business owner looking to streamline operations or an individual seeking to leverage AI for personal projects, I offer tailored solutions built on a foundation of proven business acumen, multilingual communication skills, and a steadfast commitment to your success. Let's work together to harness the power of AI to create a life of purpose, freedom, and authenticity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
