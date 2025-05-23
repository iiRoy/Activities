'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const CigaretteSlash: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  strokeColor = 'currentColor',
  fillColor = 'none',
  strokeWidth = 1,
}) => (
  <svg
    width={width}
    height={height}
    stroke={strokeColor}
    fill={fillColor}
    strokeWidth={strokeWidth}
    vectorEffect='non-scaling-stroke'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
  >
    {' '}
    <path
      stroke={strokeColor}
      fill={fillColor}
      strokeWidth={strokeWidth}
      vectorEffect='non-scaling-stroke'
      d='M18.907 5.24c.706-1.192.667-1.84.475-1.978a1.125 1.125 0 0 1 .93-2.043 2.429 2.429 0 0 1 1.295 1.48c.337 1.024.08 2.266-.764 3.692-.706 1.19-.667 1.84-.475 1.978a1.125 1.125 0 0 1-.93 2.048 2.438 2.438 0 0 1-1.295-1.48c-.337-1.03-.08-2.272.764-3.697Zm-5.264 3.692a2.439 2.439 0 0 0 1.294 1.48 1.125 1.125 0 0 0 .931-2.048c-.187-.137-.23-.787.475-1.978.844-1.426 1.101-2.668.764-3.692a2.428 2.428 0 0 0-1.294-1.475 1.125 1.125 0 0 0-.931 2.047c.187.138.23.787-.475 1.978-.844 1.42-1.101 2.663-.764 3.688Zm6.69 10.561a1.126 1.126 0 1 1-1.665 1.514l-2.393-2.632H3A1.875 1.875 0 0 1 1.125 16.5v-3A1.875 1.875 0 0 1 3 11.625h7.14L3.67 4.507a1.125 1.125 0 1 1 1.662-1.514l15 16.5ZM3.375 16.125h3.75v-2.25h-3.75v2.25Zm10.854 0-2.041-2.25H9.374v2.25h4.854Zm6.771-4.5h-3.25a1.125 1.125 0 1 0 0 2.25h2.875v3.276a1.125 1.125 0 1 0 2.25 0V13.5A1.875 1.875 0 0 0 21 11.625Z'
    />{' '}
  </svg>
);

export default CigaretteSlash;
