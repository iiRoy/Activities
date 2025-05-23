'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Cigarette: React.FC<IconProps> = ({
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
      d='M21 11.625H3A1.875 1.875 0 0 0 1.125 13.5v3A1.875 1.875 0 0 0 3 18.375h18a1.875 1.875 0 0 0 1.875-1.875v-3A1.875 1.875 0 0 0 21 11.625Zm-17.625 2.25h3.75v2.25h-3.75v-2.25Zm17.25 2.25H9.375v-2.25h11.25v2.25ZM18.907 5.24c.706-1.192.667-1.84.475-1.978a1.125 1.125 0 0 1 .93-2.043 2.429 2.429 0 0 1 1.295 1.48c.337 1.024.08 2.266-.764 3.692-.706 1.19-.667 1.84-.475 1.978a1.125 1.125 0 0 1-.93 2.048 2.439 2.439 0 0 1-1.295-1.48c-.337-1.03-.08-2.272.764-3.697Zm-4.5 0c.706-1.192.667-1.84.475-1.978a1.125 1.125 0 0 1 .93-2.043 2.429 2.429 0 0 1 1.295 1.48c.337 1.024.08 2.266-.764 3.692-.706 1.19-.667 1.84-.475 1.978a1.125 1.125 0 0 1-.93 2.048 2.439 2.439 0 0 1-1.295-1.48c-.337-1.03-.08-2.272.764-3.697Z'
    />{' '}
  </svg>
);

export default Cigarette;
