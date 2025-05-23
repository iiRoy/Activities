'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ArrowURightDown: React.FC<IconProps> = ({
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
      d='m21.046 17.296-4.5 4.5a1.125 1.125 0 0 1-1.594 0l-4.5-4.5a1.124 1.124 0 0 1 0-1.594 1.125 1.125 0 0 1 1.594 0l2.579 2.58V8.25a4.125 4.125 0 0 0-8.25 0v8.25a1.125 1.125 0 0 1-2.25 0V8.25a6.375 6.375 0 0 1 12.75 0v10.031l2.58-2.58a1.124 1.124 0 0 1 1.593 0 1.124 1.124 0 0 1 0 1.594h-.002Z'
    />{' '}
  </svg>
);

export default ArrowURightDown;
