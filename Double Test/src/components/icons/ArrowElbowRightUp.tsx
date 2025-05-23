'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ArrowElbowRightUp: React.FC<IconProps> = ({
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
      d='M21.046 9.796a1.125 1.125 0 0 1-1.594 0l-2.577-2.577V18a1.125 1.125 0 0 1-1.125 1.125H2.25a1.125 1.125 0 1 1 0-2.25h12.375V7.219l-2.58 2.58a1.125 1.125 0 0 1-1.593 0 1.126 1.126 0 0 1 0-1.594l4.5-4.5a1.125 1.125 0 0 1 1.594 0l4.5 4.5a1.125 1.125 0 0 1 0 1.59Z'
    />{' '}
  </svg>
);

export default ArrowElbowRightUp;
