import React from 'react';
import Button from './Button';

const Academy: React.FC = () => {
  return (
    <section id="academy" className="py-20 md:py-28 bg-white/70 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ocean-blue mb-4">
            Build Your Skills. Future-Proof Your Business.
          </h2>
          <p className="text-xl text-slate-grey mb-6 max-w-3xl mx-auto">
            Jargon-free AI training for our Garden Route community.
          </p>
          <p className="max-w-3xl mx-auto">
            Whether you're a business owner looking to empower your team, a professional seeking a competitive edge, or a resident curious about AI, we have a practical course for you. All our training is hands-on, accessible, and designed for real-world results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-16">
          <div className="bg-sandstone-beige border-2 border-garden-green rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-garden-green mb-4">Professional Track - For Business Growth</h3>
            <p className="mb-4">Go beyond the basics with deep-dive courses like AI for Guest House Marketing.</p>
            <div className="bg-sunrise-gold/30 p-4 rounded-md border border-sunrise-gold text-slate-grey">
              <h4 className="font-bold">THE FOUNDER'S CIRCLE:</h4>
              <p>Be one of the first 10 students to enroll in our AI for Business Fundamentals course and pay only R1,999 (Save 20%)!</p>
            </div>
          </div>
          <div className="bg-sandstone-beige border-2 border-garden-green rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-garden-green mb-4">Community Track - For Personal Growth</h3>
            <p>Join our affordable Community AI Essentials workshop to master AI for everyday life and work. Perfect for individuals, students, and remote workers looking to stay current and get ahead.</p>
          </div>
        </div>

        <div className="text-center">
            <h3 className="text-3xl font-bold text-garden-green mb-10">Our Learning Pathway: A Glimpse Inside</h3>
            <div className="max-w-4xl mx-auto text-left space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold text-ocean-blue">Level 1: AI Essentials (Community Track)</h4>
                    <p><b>Focus:</b> Start your journey here. We demystify AI and build your confidence with practical, everyday skills.</p>
                    <p className="mt-2 text-sm"><b>Modules include:</b> Understanding AI & Safety, Mastering the Art of the Prompt, Your AI Productivity Assistant (for emails, summaries, and planning), and Income & Opportunity (CVs, marketing basics).</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold text-ocean-blue">Level 2: AI for Business (Professional Track)</h4>
                    <p><b>Focus:</b> Go deeper. Learn to turn AI into a powerful business tool that saves time and money.</p>
                    <p className="mt-2 text-sm"><b>Modules include:</b> AI for Deep Research & Data Analysis, Advanced Prompting for Strategy, Automating Your Workflows, and Building Your Own Custom AI Assistants.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold text-ocean-blue">Level 3: AI Leadership (Advanced / Bespoke Training)</h4>
                    <p><b>Focus:</b> Become a leader in your field. Learn to use AI for high-level strategic planning and innovation.</p>
                    <p className="mt-2 text-sm"><b>Modules include:</b> Strategic Tool Selection (choosing the right AI for the job), Advanced Visual & Content AI, AI for Civic & Community Use, and Developing an AI-Driven Business Strategy.</p>
                </div>
            </div>
        </div>

        <div className="text-center mt-16">
          <Button href="#" size="lg">
            View Full Curriculum & Workshop Dates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Academy;
