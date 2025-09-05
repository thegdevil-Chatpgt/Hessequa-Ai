import React, { useState } from 'react';
import Button from './Button';
import WhatsappIcon from './icons/WhatsappIcon';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: '',
        consent: false,
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
             const checkbox = e.target as HTMLInputElement;
             setFormData(prev => ({ ...prev, [name]: checkbox.checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.consent) {
            console.log('Form submitted:', formData);
            setSubmitted(true);
        } else {
            alert('Please consent to the data policy.');
        }
    };


  return (
    <section id="contact" className="py-20 md:py-28 bg-white/70 scroll-mt-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-ocean-blue mb-8">
          Ready to Start? Let's Talk.
        </h2>
        <div className="max-w-2xl mx-auto">
            {submitted ? (
                <div className="bg-garden-green/20 text-garden-green p-6 rounded-lg">
                    <h3 className="text-2xl font-bold">Thank You!</h3>
                    <p>Your message has been sent successfully. We will be in touch shortly.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                    <div>
                        <label htmlFor="name" className="block text-slate-grey font-semibold mb-2">Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-sunrise-gold outline-none" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-slate-grey font-semibold mb-2">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-sunrise-gold outline-none" />
                    </div>
                    <div>
                        <label htmlFor="service" className="block text-slate-grey font-semibold mb-2">Service of Interest</label>
                        <select id="service" name="service" value={formData.service} onChange={handleChange} required className="w-full p-3 rounded-md border border-gray-300 bg-white focus:ring-2 focus:ring-sunrise-gold outline-none">
                            <option value="">Select a service...</option>
                            <option value="consulting">AI Consulting</option>
                            <option value="academy">AI Academy</option>
                            <option value="general">General Inquiry</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-slate-grey font-semibold mb-2">Message</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} required className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-sunrise-gold outline-none"></textarea>
                    </div>
                    <div className="flex items-start">
                        <input type="checkbox" id="consent" name="consent" checked={formData.consent} onChange={handleChange} required className="h-5 w-5 mt-1 rounded border-gray-300 text-garden-green focus:ring-garden-green" />
                        <label htmlFor="consent" className="ml-3 text-sm text-slate-grey">
                            I consent to Hessequa AI collecting my data from this form and contacting me regarding my inquiry.
                        </label>
                    </div>
                    <div className="text-center">
                        <Button type="submit" size="lg">Send Message</Button>
                    </div>
                </form>
            )}
             <div className="mt-12">
                <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-garden-green text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300">
                    <WhatsappIcon className="h-6 w-6" />
                    Chat on WhatsApp
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
