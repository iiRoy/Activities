'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const NumberNine: React.FC<IconProps> = ({
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
      d='M17.625 9a5.625 5.625 0 1 0-4.893 5.575l-2.463 4.373a1.126 1.126 0 1 0 1.962 1.104l4.644-8.25A5.584 5.584 0 0 0 17.625 9Zm-9 0a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0Z'
    />{' '}
  </svg>
);

export default NumberNine;
