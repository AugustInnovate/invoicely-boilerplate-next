import React from 'react';

const CardHeader = ({ children, className, ...props }:any) => {
  return (
    <div className={`p-4 border-b ${className || ''}`} {...props}>
      {children}
    </div>
  );
};

export default CardHeader;
