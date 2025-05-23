'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ArrowFatLineDown: React.FC<IconProps> = ({
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
      d='M22.04 12.32a1.125 1.125 0 0 0-1.04-.695h-3.375V7.5A1.125 1.125 0 0 0 16.5 6.375h-9A1.125 1.125 0 0 0 6.375 7.5v4.125H3a1.125 1.125 0 0 0-.795 1.92l9 9a1.124 1.124 0 0 0 1.594 0l9-9a1.124 1.124 0 0 0 .24-1.225ZM12 20.156l-6.281-6.281H7.5a1.125 1.125 0 0 0 1.125-1.125V8.625h6.75v4.125a1.125 1.125 0 0 0 1.125 1.125h1.781L12 20.156ZM6.375 3.75A1.125 1.125 0 0 1 7.5 2.625h9a1.125 1.125 0 0 1 0 2.25h-9A1.125 1.125 0 0 1 6.375 3.75Z'
    />{' '}
  </svg>
);

export default ArrowFatLineDown;
