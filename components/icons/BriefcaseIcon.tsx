import React from 'react';

const BriefcaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 2a2 2 0 00-2 2v1h4V4a2 2 0 00-2-2zM5 7a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-4v1a1 1 0 01-1 1H9a1 1 0 01-1-1V7H5z"
    />
  </svg>
);

export default BriefcaseIcon;