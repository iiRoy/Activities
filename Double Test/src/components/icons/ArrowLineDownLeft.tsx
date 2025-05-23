'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ArrowLineDownLeft: React.FC<IconProps> = ({
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
      d='M22.125 4.5A1.125 1.125 0 0 1 21 5.625H4.5a1.125 1.125 0 0 1 0-2.25H21A1.125 1.125 0 0 1 22.125 4.5Zm-5.67 3.704-8.58 8.577V10.5a1.125 1.125 0 1 0-2.25 0v9a1.125 1.125 0 0 0 1.125 1.125h9a1.125 1.125 0 1 0 0-2.25H9.469l8.58-8.58a1.127 1.127 0 1 0-1.594-1.593v.002Z'
    />{' '}
  </svg>
);

export default ArrowLineDownLeft;
