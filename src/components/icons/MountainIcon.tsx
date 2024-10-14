import React from 'react';

const MountainIcon = ({ className, size = 24, color = 'currentColor' }:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={color}
    className={className}
    width={size}
    height={size}
  >
    <path d="M12 2l10 18H2L12 2zm0 3.27L4.47 18h15.06L12 5.27zM12 8l3 5H9l3-5z" />
  </svg>
);

export default MountainIcon;
