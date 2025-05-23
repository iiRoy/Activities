'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Alien: React.FC<IconProps> = ({
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
      d='M12 1.125A9.385 9.385 0 0 0 2.625 10.5c0 2.33 1.206 5.325 3.226 8.01.77 1.024 3.49 4.365 6.149 4.365s5.378-3.341 6.15-4.365c2.02-2.685 3.225-5.68 3.225-8.01A9.385 9.385 0 0 0 12 1.125Zm4.35 16.031c-1.296 1.723-3.206 3.469-4.35 3.469-1.144 0-3.054-1.745-4.35-3.469-1.712-2.273-2.775-4.824-2.775-6.656a7.125 7.125 0 0 1 14.25 0c0 1.832-1.063 4.383-2.774 6.656Zm-6.6-3.281A3.375 3.375 0 0 1 6.375 10.5 1.125 1.125 0 0 1 7.5 9.375a3.375 3.375 0 0 1 3.375 3.375 1.125 1.125 0 0 1-1.125 1.125Zm7.875-3.375a3.375 3.375 0 0 1-3.375 3.375 1.125 1.125 0 0 1-1.125-1.125A3.375 3.375 0 0 1 16.5 9.375a1.125 1.125 0 0 1 1.125 1.125Zm-3.375 6.75a1.125 1.125 0 0 1-1.125 1.125h-2.25a1.125 1.125 0 1 1 0-2.25h2.25a1.125 1.125 0 0 1 1.125 1.125Z'
    />{' '}
  </svg>
);

export default Alien;
