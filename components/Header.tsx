import React from 'react';
import Button from './Button';

const Header: React.FC = () => {
  const menuLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Consulting', href: '#consulting' },
    { name: 'Academy', href: '#academy' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-sandstone-beige/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-ocean-blue">
          Hessequa AI
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {menuLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-grey hover:text-garden-green transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button href="#contact">
            Book a Free Assessment
          </Button>
        </div>
        <div className="md:hidden">
          {/* Mobile menu button can be added here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
