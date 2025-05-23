'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ArrowsClockwise: React.FC<IconProps> = ({
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
      d='M21.375 4.5V9a1.125 1.125 0 0 1-1.125 1.125h-4.5a1.125 1.125 0 1 1 0-2.25h1.781l-.731-.731a7.083 7.083 0 0 0-4.999-2.087h-.04a7.077 7.077 0 0 0-4.974 2.028 1.125 1.125 0 0 1-1.574-1.61 9.317 9.317 0 0 1 6.55-2.668h.05a9.32 9.32 0 0 1 6.58 2.746l.732.728V4.5a1.125 1.125 0 1 1 2.25 0Zm-4.162 12.415a7.077 7.077 0 0 1-4.977 2.028h-.04a7.083 7.083 0 0 1-4.999-2.087l-.728-.731H8.25a1.125 1.125 0 1 0 0-2.25h-4.5A1.125 1.125 0 0 0 2.625 15v4.5a1.125 1.125 0 0 0 2.25 0v-1.781l.731.731a9.32 9.32 0 0 0 6.582 2.743h.052a9.317 9.317 0 0 0 6.55-2.669 1.126 1.126 0 0 0-1.573-1.609h-.004Z'
    />{' '}
  </svg>
);

export default ArrowsClockwise;
