'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const CircleNotch: React.FC<IconProps> = ({
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
      d='M22.125 12a10.125 10.125 0 1 1-20.25 0c0-3.986 2.318-7.626 5.906-9.272a1.125 1.125 0 1 1 .938 2.045C5.929 6.053 4.125 8.89 4.125 12a7.875 7.875 0 0 0 15.75 0c0-3.11-1.804-5.947-4.594-7.227a1.125 1.125 0 1 1 .938-2.045c3.588 1.646 5.906 5.286 5.906 9.272Z'
    />{' '}
  </svg>
);

export default CircleNotch;
