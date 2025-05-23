'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const NumberTwo: React.FC<IconProps> = ({
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
      d='M16.875 19.5a1.125 1.125 0 0 1-1.125 1.125h-7.5a1.125 1.125 0 0 1-.9-1.8l6.745-8.992a2.625 2.625 0 1 0-4.5-2.631A1.126 1.126 0 1 1 7.533 6.3a4.875 4.875 0 1 1 8.362 4.884L10.5 18.375h5.25a1.125 1.125 0 0 1 1.125 1.125Z'
    />{' '}
  </svg>
);

export default NumberTwo;
