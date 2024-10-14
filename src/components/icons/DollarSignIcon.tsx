import React from 'react';

const DollarSignIcon = ({ className, size = 24, color = 'currentColor' }:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={color}
    className={className}
    width={size}
    height={size}
  >
    <path d="M12 2c-1.1 0-2 .9-2 2v2H8c-.55 0-1 .45-1 1s.45 1 1 1h2v6H8c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 1.1.9 2 2 2s2-.9 2-2v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-2v-6h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V4c0-1.1-.9-2-2-2zM11 8h2v8h-2V8z" />
  </svg>
);

export default DollarSignIcon;
