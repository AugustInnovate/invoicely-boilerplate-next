import React from 'react';

const CardContent = ({ children, className, ...props }:any) => {
  return (
    <div className={`p-4 ${className || ''}`} {...props}>
      {children}
    </div>
  );
};

export default CardContent;
