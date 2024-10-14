import React from 'react';

const TrafficConeIcon = ({ className, size = 24, color = 'currentColor' }:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={color}
    className={className}
    width={size}
    height={size}
  >
    <path d="M12 2l1.71 5H18v2h-2.59l1.71 5H20v2h-2.59L19 20h-2l-1.71-5H9.71L8 20H6l1.59-4H4v-2h2.88L5.29 9H4V7h4.29L12 2zm1.29 9l-1.29-4l-1.29 4H7.71l2.58 7h3.42l2.58-7H13.29z" />
  </svg>
);

export default TrafficConeIcon;
