'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Export: React.FC<IconProps> = ({
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
      d='M20.625 10.5v9a1.875 1.875 0 0 1-1.875 1.875H5.25A1.875 1.875 0 0 1 3.375 19.5v-9A1.875 1.875 0 0 1 5.25 8.625h1.875a1.125 1.125 0 0 1 0 2.25h-1.5v8.25h12.75v-8.25h-1.5a1.125 1.125 0 0 1 0-2.25h1.875a1.875 1.875 0 0 1 1.875 1.875ZM9.045 6.796l1.83-1.827v7.781a1.125 1.125 0 0 0 2.25 0V4.969l1.83 1.83a1.126 1.126 0 0 0 1.923-.797 1.128 1.128 0 0 0-.33-.797l-3.75-3.75a1.125 1.125 0 0 0-1.594 0l-3.75 3.75a1.127 1.127 0 0 0 1.594 1.594l-.002-.003Z'
    />{' '}
  </svg>
);

export default Export;
