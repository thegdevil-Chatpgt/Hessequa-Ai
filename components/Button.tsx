import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  size?: 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button', href, size = 'md' }) => {
  const baseClasses = "bg-sunrise-gold text-slate-grey font-bold rounded-lg shadow-md hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 inline-block";
  const sizeClasses = size === 'lg' ? "py-3 px-8 text-lg" : "py-2 px-6";

  const className = `${baseClasses} ${sizeClasses}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
