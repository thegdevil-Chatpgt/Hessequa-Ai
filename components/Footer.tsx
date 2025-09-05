import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ocean-blue text-sandstone-beige/80 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="md:col-span-1">
            <h4 className="font-bold text-lg mb-2 text-white">Hessequa AI</h4>
            <p className="text-sm">
              Empowering the Garden Route economy with practical, high-impact AI.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2 text-white">Contact</h4>
            <p className="text-sm">info@hessequa.ai</p>
            <p className="text-sm">Heidelberg, Western Cape</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2 text-white">Legal</h4>
            <ul className="text-sm space-y-1">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Website Terms</a></li>
              <li><a href="#" className="hover:text-white">Student Enrolment Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-sandstone-beige/30 mt-8 pt-6 text-center text-sm">
          <p>Hessequa AI (Pty) Ltd | Reg No: [TBC]</p>
          <p>© 2025 Hessequa AI. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;