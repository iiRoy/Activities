'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Pi: React.FC<IconProps> = ({
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
      d='M22.125 16.125a3.75 3.75 0 0 1-7.5 0v-9h-5.25V18.75a1.125 1.125 0 0 1-2.25 0V7.125H6.75A3.375 3.375 0 0 0 3.375 10.5a1.125 1.125 0 0 1-2.25 0A5.632 5.632 0 0 1 6.75 4.875H21a1.125 1.125 0 0 1 0 2.25h-4.125v9a1.5 1.5 0 1 0 3 0 1.125 1.125 0 1 1 2.25 0Z'
    />{' '}
  </svg>
);

export default Pi;
