'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ArrowUUpRight: React.FC<IconProps> = ({
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
      d='m15.704 11.954 2.577-2.579H8.25a4.125 4.125 0 1 0 0 8.25h8.25a1.125 1.125 0 1 1 0 2.25H8.25a6.375 6.375 0 0 1 0-12.75h10.031l-2.577-2.58a1.126 1.126 0 1 1 1.594-1.593l4.5 4.5a1.125 1.125 0 0 1 0 1.594l-4.5 4.5a1.127 1.127 0 1 1-1.594-1.594v.002Z'
    />{' '}
  </svg>
);

export default ArrowUUpRight;
