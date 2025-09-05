import React from 'react';
import Button from './Button';
import BriefcaseIcon from './icons/BriefcaseIcon';
import ChecklistIcon from './icons/ChecklistIcon';
import RocketIcon from './icons/RocketIcon';

const Consulting: React.FC = () => {
  return (
    <section id="consulting" className="py-20 md:py-28 bg-sandstone-beige scroll-mt-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-ocean-blue mb-4">
          Unlock Growth. Save Time. Lead with Confidence.
        </h2>
        <p className="text-xl text-slate-grey mb-8 max-w-3xl mx-auto">
          Practical AI Consulting for Garden Route Businesses.
        </p>
        <p className="mb-12 max-w-3xl mx-auto">
          Are you spending too much time on repetitive admin? Worried about off-season slumps in your guesthouse? Struggling to respond to every client inquiry in under 5 minutes? We help established businesses in Hospitality, Real Estate, and Financial Services solve these exact problems with practical, high-impact AI solutions.
        </p>

        <h3 className="text-3xl font-bold text-garden-green mb-10">Our Simple 3-Step Path to ROI</h3>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto text-left">
          <div className="bg-white/50 p-8 rounded-lg shadow-md border border-gray-300">
            <div className="flex items-center mb-4">
              <BriefcaseIcon className="h-10 w-10 text-ocean-blue mr-4" />
              <h4 className="text-xl font-bold text-ocean-blue">1. Free Assessment</h4>
            </div>
            <p className="text-slate-grey">It starts with a no-obligation 30-minute chat where we listen to your unique challenges and see if we're a good fit to help you.</p>
          </div>
          <div className="bg-white/50 p-8 rounded-lg shadow-md border border-gray-300">
             <div className="flex items-center mb-4">
              <ChecklistIcon className="h-10 w-10 text-ocean-blue mr-4" />
              <h4 className="text-xl font-bold text-ocean-blue">2. The AI Opportunity Audit</h4>
            </div>
            <p className="text-slate-grey">Our signature R7,500 service. We deliver a concrete, actionable AI roadmap for your business. This is a standalone, high-value product that gives you a clear plan, whether you continue with us or not.</p>
          </div>
          <div className="bg-white/50 p-8 rounded-lg shadow-md border border-gray-300">
            <div className="flex items-center mb-4">
              <RocketIcon className="h-10 w-10 text-ocean-blue mr-4" />
              <h4 className="text-xl font-bold text-ocean-blue">3. Pilot Project</h4>
            </div>
            <p className="text-slate-grey">A fixed-scope implementation designed to deliver a quick, measurable win—like automating your client onboarding or boosting direct bookings—and prove a tangible return on your investment.</p>
          </div>
        </div>
        <div className="mt-16">
          <Button href="#contact" size="lg">
            Book Your Free 30-Min Assessment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Consulting;
