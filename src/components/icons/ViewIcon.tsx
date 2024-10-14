import React from 'react';

const ViewIcon = ({ className, size = 24, color = 'currentColor' }:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={color}
    className={className}
    width={size}
    height={size}
  >
    <path d="M12 4c4.97 0 9.16 3.34 10.39 8A11.984 11.984 0 0112 20c-4.97 0-9.16-3.34-10.39-8A11.984 11.984 0 0112 4zm0 2C8.31 6 4.89 8.68 3.7 12c1.2 3.32 4.62 6 8.3 6s7.1-2.68 8.3-6c-1.2-3.32-4.62-6-8.3-6zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm0 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
  </svg>
);

export default ViewIcon;
