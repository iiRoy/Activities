'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const AlignTopSimple: React.FC<IconProps> = ({
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
      d='M19.875 3a1.125 1.125 0 0 1-1.125 1.125H5.25a1.125 1.125 0 0 1 0-2.25h13.5A1.125 1.125 0 0 1 19.875 3Zm-3 4.5V21A1.875 1.875 0 0 1 15 22.875H9A1.875 1.875 0 0 1 7.125 21V7.5A1.875 1.875 0 0 1 9 5.625h6A1.875 1.875 0 0 1 16.875 7.5Zm-2.25.375h-5.25v12.75h5.25V7.875Z'
    />{' '}
  </svg>
);

export default AlignTopSimple;
