'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ArrowClockwise: React.FC<IconProps> = ({
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
      d='M22.875 5.25v4.5a1.125 1.125 0 0 1-1.125 1.125h-4.5a1.125 1.125 0 1 1 0-2.25h1.603l-1.781-1.63a7.125 7.125 0 1 0-5.166 12.13H12a7.08 7.08 0 0 0 4.89-1.942 1.125 1.125 0 1 1 1.545 1.636A9.323 9.323 0 0 1 12 21.375h-.128A9.375 9.375 0 1 1 18.61 5.349l2.015 1.844V5.25a1.125 1.125 0 1 1 2.25 0Z'
    />{' '}
  </svg>
);

export default ArrowClockwise;
