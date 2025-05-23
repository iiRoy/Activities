'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ArrowUDownLeft: React.FC<IconProps> = ({
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
      d='M22.125 10.5a6.381 6.381 0 0 1-6.375 6.375H5.719l2.58 2.58a1.126 1.126 0 0 1-1.228 1.837 1.125 1.125 0 0 1-.366-.244l-4.5-4.5a1.125 1.125 0 0 1 0-1.594l4.5-4.5a1.125 1.125 0 0 1 1.924.797 1.127 1.127 0 0 1-.33.797l-2.58 2.577H15.75a4.125 4.125 0 0 0 0-8.25H7.5a1.125 1.125 0 0 1 0-2.25h8.25a6.382 6.382 0 0 1 6.375 6.375Z'
    />{' '}
  </svg>
);

export default ArrowUDownLeft;
