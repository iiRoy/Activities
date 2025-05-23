'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Bookmarks: React.FC<IconProps> = ({
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
      d='M18 1.875H9A1.875 1.875 0 0 0 7.125 3.75v1.875H6A1.875 1.875 0 0 0 4.125 7.5V21a1.125 1.125 0 0 0 1.811.892l4.189-3.223 4.19 3.223a1.125 1.125 0 0 0 1.81-.892v-4.35l1.939 1.492a1.127 1.127 0 0 0 1.811-.892V3.75A1.875 1.875 0 0 0 18 1.875Zm-4.125 16.84-3.065-2.357a1.125 1.125 0 0 0-1.371 0l-3.064 2.357V7.875h7.5v10.84Zm3.75-3.75-1.5-1.153V7.5a1.875 1.875 0 0 0-1.875-1.875H9.375v-1.5h8.25v10.84Z'
    />{' '}
  </svg>
);

export default Bookmarks;
