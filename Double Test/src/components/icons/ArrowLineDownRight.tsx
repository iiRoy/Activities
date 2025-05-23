'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ArrowLineDownRight: React.FC<IconProps> = ({
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
      d='M21.375 3.75a1.125 1.125 0 0 1-1.125 1.125H3.75a1.125 1.125 0 0 1 0-2.25h16.5a1.125 1.125 0 0 1 1.125 1.125ZM18 8.625a1.125 1.125 0 0 0-1.125 1.125v6.281l-8.58-8.577a1.127 1.127 0 0 0-1.593 1.594l8.58 8.577H9a1.125 1.125 0 1 0 0 2.25h9a1.125 1.125 0 0 0 1.125-1.125v-9A1.125 1.125 0 0 0 18 8.625Z'
    />{' '}
  </svg>
);

export default ArrowLineDownRight;
