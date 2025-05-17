import React from 'react';

interface LogoProps {
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ color = '#5f4e3d' }) => {
  return (
    <div className="flex items-center">
      <span className="font-heading text-2xl tracking-wider" style={{ color }}>
        HEER ATTIRE
      </span>
    </div>
  );
};

export default Logo;