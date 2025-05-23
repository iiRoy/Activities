'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Pause: React.FC<IconProps> = ({
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
      d='M18.75 2.625H15A1.875 1.875 0 0 0 13.125 4.5v15A1.875 1.875 0 0 0 15 21.375h3.75a1.875 1.875 0 0 0 1.875-1.875v-15a1.875 1.875 0 0 0-1.875-1.875Zm-.375 16.5h-3V4.875h3v14.25ZM9 2.625H5.25A1.875 1.875 0 0 0 3.375 4.5v15a1.875 1.875 0 0 0 1.875 1.875H9a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 9 2.625Zm-.375 16.5h-3V4.875h3v14.25Z'
    />{' '}
  </svg>
);

export default Pause;
