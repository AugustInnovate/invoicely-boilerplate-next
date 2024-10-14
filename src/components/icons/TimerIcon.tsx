import React from 'react';

const TimerIcon = ({ className, size = 24, color = 'currentColor' }:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={color}
    className={className}
    width={size}
    height={size}
  >
    <path d="M15 1H9v2h6V1zm-4.38 15.38l-1.41-1.41L11.17 13H4v-2h7.17l-1.95-1.95l1.41-1.41L15 12l-4.38 4.38zM19.03 11.22l1.43-1.42c.36-.36.95-.39 1.35-.1a1 1 0 01.18 1.44c-1.77 1.77-4.45 1.95-6.44.14l1.42-1.42c.45.27.97.37 1.49.36c.61-.02 1.2-.26 1.57-.84zm-2.03-6.22c-.18-.59-.54-1.13-1.05-1.58A4.96 4.96 0 0016 3h-2c0 .9.31 1.74.88 2.42c.64.75 1.52 1.19 2.44 1.31c.69.09 1.41.04 2.06-.36c-.22-.14-.43-.29-.63-.44z" />
  </svg>
);

export default TimerIcon;
