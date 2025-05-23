'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Archive: React.FC<IconProps> = ({
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
      d='M21 4.125H3A1.875 1.875 0 0 0 1.125 6v2.25a1.875 1.875 0 0 0 1.5 1.838V18A1.875 1.875 0 0 0 4.5 19.875h15A1.875 1.875 0 0 0 21.375 18v-7.912a1.875 1.875 0 0 0 1.5-1.838V6A1.875 1.875 0 0 0 21 4.125ZM3.375 6.375h17.25v1.5H3.375v-1.5Zm1.5 11.25v-7.5h14.25v7.5H4.875Zm10.5-4.875a1.125 1.125 0 0 1-1.125 1.125h-4.5a1.125 1.125 0 1 1 0-2.25h4.5a1.125 1.125 0 0 1 1.125 1.125Z'
    />{' '}
  </svg>
);

export default Archive;
