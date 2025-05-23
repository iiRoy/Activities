'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const AlignLeftSimple: React.FC<IconProps> = ({
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
      d='M4.125 5.25v13.5a1.125 1.125 0 0 1-2.25 0V5.25a1.125 1.125 0 0 1 2.25 0ZM22.875 9v6A1.875 1.875 0 0 1 21 16.875H7.5A1.875 1.875 0 0 1 5.625 15V9A1.875 1.875 0 0 1 7.5 7.125H21A1.875 1.875 0 0 1 22.875 9Zm-2.25.375H7.875v5.25h12.75v-5.25Z'
    />{' '}
  </svg>
);

export default AlignLeftSimple;
