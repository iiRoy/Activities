'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const NumberThree: React.FC<IconProps> = ({
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
      d='M16.875 15A5.624 5.624 0 0 1 7.5 19.192 1.125 1.125 0 1 1 9 17.517a3.374 3.374 0 0 0 5.6-2.917 3.376 3.376 0 0 0-3.35-2.974 1.125 1.125 0 0 1-.9-1.8l3.15-4.2H8.25a1.125 1.125 0 0 1 0-2.25h7.5a1.125 1.125 0 0 1 .9 1.8l-3.42 4.56A5.635 5.635 0 0 1 16.875 15Z'
    />{' '}
  </svg>
);

export default NumberThree;
