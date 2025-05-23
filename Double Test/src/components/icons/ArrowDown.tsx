'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ArrowDown: React.FC<IconProps> = ({
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
      d='m19.546 14.296-6.75 6.75a1.125 1.125 0 0 1-1.594 0l-6.75-6.75a1.127 1.127 0 1 1 1.594-1.594l4.829 4.83V3.75a1.125 1.125 0 1 1 2.25 0v13.781l4.83-4.83a1.127 1.127 0 1 1 1.593 1.594h-.002Z'
    />{' '}
  </svg>
);

export default ArrowDown;
