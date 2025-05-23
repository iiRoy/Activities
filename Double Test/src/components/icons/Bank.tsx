'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Bank: React.FC<IconProps> = ({
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
      d='M2.25 10.125h1.875v4.5H3a1.125 1.125 0 1 0 0 2.25h18a1.125 1.125 0 1 0 0-2.25h-1.125v-4.5h1.875a1.125 1.125 0 0 0 .59-2.083l-9.75-6a1.125 1.125 0 0 0-1.18 0l-9.75 6a1.125 1.125 0 0 0 .59 2.083Zm4.125 0h2.25v4.5h-2.25v-4.5Zm6.75 0v4.5h-2.25v-4.5h2.25Zm4.5 4.5h-2.25v-4.5h2.25v4.5ZM12 4.321l5.775 3.554H6.225L12 4.321ZM23.625 19.5a1.125 1.125 0 0 1-1.125 1.125h-21a1.125 1.125 0 1 1 0-2.25h21a1.125 1.125 0 0 1 1.125 1.125Z'
    />{' '}
  </svg>
);

export default Bank;
