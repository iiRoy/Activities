'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Users: React.FC<IconProps> = ({
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
      d='M11.736 14.713a6 6 0 1 0-7.722 0 9.397 9.397 0 0 0-3.702 3 1.125 1.125 0 0 0 1.814 1.331 7.124 7.124 0 0 1 11.498 0 1.126 1.126 0 0 0 1.815-1.33 9.405 9.405 0 0 0-3.703-3Zm-7.611-4.588a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Zm19.322 9.157a1.123 1.123 0 0 1-1.573-.241 7.154 7.154 0 0 0-5.749-2.916 1.125 1.125 0 1 1 0-2.25 3.75 3.75 0 1 0-.966-7.375 1.125 1.125 0 1 1-.577-2.174 6 6 0 0 1 5.404 10.387 9.396 9.396 0 0 1 3.702 3 1.125 1.125 0 0 1-.241 1.569Z'
    />{' '}
  </svg>
);

export default Users;
