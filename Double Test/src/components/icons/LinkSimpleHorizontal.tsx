'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const LinkSimpleHorizontal: React.FC<IconProps> = ({
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
      d='M7.5 10.875h9a1.125 1.125 0 1 1 0 2.25h-9a1.125 1.125 0 1 1 0-2.25Zm2.25 4.5H6a3.375 3.375 0 0 1 0-6.75h3.75a1.125 1.125 0 0 0 0-2.25H6a5.625 5.625 0 0 0 0 11.25h3.75a1.125 1.125 0 1 0 0-2.25Zm8.25-9h-3.75a1.125 1.125 0 0 0 0 2.25H18a3.375 3.375 0 0 1 0 6.75h-3.75a1.125 1.125 0 1 0 0 2.25H18a5.625 5.625 0 1 0 0-11.25Z'
    />{' '}
  </svg>
);

export default LinkSimpleHorizontal;
