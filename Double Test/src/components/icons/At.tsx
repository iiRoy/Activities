'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const At: React.FC<IconProps> = ({
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
      d='M12 1.875a10.125 10.125 0 0 0 0 20.25c2.088 0 4.283-.63 5.872-1.688a1.125 1.125 0 1 0-1.245-1.875c-1.22.81-2.99 1.313-4.627 1.313A7.875 7.875 0 1 1 19.875 12c0 .87-.157 1.601-.44 2.058-.247.397-.562.567-1.06.567s-.813-.17-1.06-.567c-.282-.457-.44-1.187-.44-2.058V8.25a1.125 1.125 0 0 0-2.202-.324 4.875 4.875 0 1 0 .83 7.46c.65.955 1.635 1.489 2.872 1.489 2.313 0 3.75-1.867 3.75-4.875A10.137 10.137 0 0 0 12 1.875Zm0 12.75a2.625 2.625 0 1 1 0-5.25 2.625 2.625 0 0 1 0 5.25Z'
    />{' '}
  </svg>
);

export default At;
