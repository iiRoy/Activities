'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ArrowElbowLeft: React.FC<IconProps> = ({
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
      d='m22.546 9.796-9 9a1.125 1.125 0 0 1-1.594 0l-8.577-8.577v4.031a1.125 1.125 0 0 1-2.25 0V7.5A1.125 1.125 0 0 1 2.25 6.375H9a1.125 1.125 0 0 1 0 2.25H4.969l7.781 7.781 8.204-8.205a1.127 1.127 0 1 1 1.594 1.594h-.002Z'
    />{' '}
  </svg>
);

export default ArrowElbowLeft;
