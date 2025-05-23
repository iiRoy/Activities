'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ArrowUp: React.FC<IconProps> = ({
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
      d='M19.546 11.296a1.125 1.125 0 0 1-1.594 0l-4.827-4.827V20.25a1.125 1.125 0 1 1-2.25 0V6.469l-4.83 4.827a1.127 1.127 0 1 1-1.593-1.594l6.75-6.75a1.125 1.125 0 0 1 1.594 0l6.75 6.75a1.125 1.125 0 0 1 0 1.594Z'
    />{' '}
  </svg>
);

export default ArrowUp;
