'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const NumberFour: React.FC<IconProps> = ({
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
      d='M17.25 14.625h-1.125V4.5a1.125 1.125 0 0 0-2.003-.703l-9 11.25A1.125 1.125 0 0 0 6 16.875h7.875V19.5a1.125 1.125 0 1 0 2.25 0v-2.625h1.125a1.125 1.125 0 1 0 0-2.25Zm-3.375 0H8.344l5.531-6.918v6.918Z'
    />{' '}
  </svg>
);

export default NumberFour;
