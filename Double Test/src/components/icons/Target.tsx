'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Target: React.FC<IconProps> = ({
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
      d='M21.493 8.475A10.125 10.125 0 0 1 4.84 19.163 10.125 10.125 0 0 1 18.32 4.09l1.884-1.885a1.126 1.126 0 0 1 1.924.797 1.128 1.128 0 0 1-.33.797l-9 9a1.125 1.125 0 0 1-1.924-.797 1.126 1.126 0 0 1 .33-.797l2.25-2.25a3.375 3.375 0 1 0 1.853 3.717 1.125 1.125 0 1 1 2.205.445A5.625 5.625 0 1 1 15.1 7.304l1.616-1.61a7.875 7.875 0 1 0 2.668 3.563 1.124 1.124 0 1 1 2.11-.783v.001Z'
    />{' '}
  </svg>
);

export default Target;
