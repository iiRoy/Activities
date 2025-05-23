'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const CaretUp: React.FC<IconProps> = ({
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
      d='M20.296 15.796a1.125 1.125 0 0 1-1.594 0L12 9.094l-6.704 6.702a1.127 1.127 0 1 1-1.594-1.594l7.5-7.5a1.125 1.125 0 0 1 1.594 0l7.5 7.5a1.125 1.125 0 0 1 0 1.594Z'
    />{' '}
  </svg>
);

export default CaretUp;
