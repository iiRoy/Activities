'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const User: React.FC<IconProps> = ({
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
      d='M21.973 19.688a11.564 11.564 0 0 0-5.698-4.99 7.126 7.126 0 1 0-8.55 0 11.565 11.565 0 0 0-5.698 4.99 1.125 1.125 0 1 0 1.947 1.125c1.699-2.937 4.699-4.688 8.026-4.688s6.327 1.752 8.026 4.688a1.125 1.125 0 0 0 1.947-1.125ZM7.125 9a4.875 4.875 0 1 1 9.75 0 4.875 4.875 0 0 1-9.75 0Z'
    />{' '}
  </svg>
);

export default User;
