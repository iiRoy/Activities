'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Nut: React.FC<IconProps> = ({
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
      d='M7.125 12a4.875 4.875 0 1 0 9.75 0 4.875 4.875 0 0 0-9.75 0Zm7.5 0a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Zm6.525-6.128L12.9 1.357a1.867 1.867 0 0 0-1.8 0L2.85 5.872a1.875 1.875 0 0 0-.975 1.646v8.964a1.875 1.875 0 0 0 .975 1.646l8.25 4.515a1.865 1.865 0 0 0 1.8 0l8.25-4.515a1.874 1.874 0 0 0 .975-1.646V7.518a1.874 1.874 0 0 0-.975-1.646ZM19.875 16.26 12 20.573 4.125 16.26V7.74L12 3.427l7.875 4.313v8.52Z'
    />{' '}
  </svg>
);

export default Nut;
