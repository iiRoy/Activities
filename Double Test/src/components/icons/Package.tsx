'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Package: React.FC<IconProps> = ({
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
      d='M21.15 5.872 12.9 1.357a1.867 1.867 0 0 0-1.8 0L2.85 5.872a1.875 1.875 0 0 0-.975 1.646v8.964a1.875 1.875 0 0 0 .975 1.646l8.25 4.515a1.865 1.865 0 0 0 1.8 0l8.25-4.515a1.874 1.874 0 0 0 .975-1.646V7.518a1.874 1.874 0 0 0-.975-1.646ZM12 3.428l6.75 3.697-2.01 1.1-6.75-3.696 2.01-1.1Zm0 7.39L5.25 7.126l2.396-1.313 6.75 3.695L12 10.82ZM4.125 9.075l6.75 3.694v7.188l-6.75-3.696V9.074Zm9 10.882v-7.188l2.25-1.231v2.713a1.125 1.125 0 1 0 2.25 0v-3.945l2.25-1.231v7.186l-6.75 3.696Z'
    />{' '}
  </svg>
);

export default Package;
