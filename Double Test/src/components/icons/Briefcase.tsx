'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Briefcase: React.FC<IconProps> = ({
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
      d='M9.375 9.375A1.125 1.125 0 0 1 10.5 8.25h3a1.125 1.125 0 0 1 0 2.25h-3a1.125 1.125 0 0 1-1.125-1.125Zm12.75-3v12a1.875 1.875 0 0 1-1.875 1.875H3.75a1.875 1.875 0 0 1-1.875-1.875v-12A1.875 1.875 0 0 1 3.75 4.5h3.375v-.75A2.625 2.625 0 0 1 9.75 1.125h4.5a2.625 2.625 0 0 1 2.625 2.625v.75h3.375a1.875 1.875 0 0 1 1.875 1.875ZM9.375 4.5h5.25v-.75a.375.375 0 0 0-.375-.375h-4.5a.375.375 0 0 0-.375.375v.75Zm-5.25 2.25v3.303A16.88 16.88 0 0 0 12 12c2.744 0 5.448-.668 7.875-1.948V6.75H4.125ZM19.875 18v-5.443a19.15 19.15 0 0 1-15.75 0V18h15.75Z'
    />{' '}
  </svg>
);

export default Briefcase;
