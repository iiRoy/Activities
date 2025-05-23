'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ArrowFatLinesRight: React.FC<IconProps> = ({
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
      d='m22.546 11.204-9-9A1.125 1.125 0 0 0 11.625 3v3.375h-.375A1.125 1.125 0 0 0 10.125 7.5v9a1.125 1.125 0 0 0 1.125 1.125h.375V21a1.125 1.125 0 0 0 1.92.796l9-9a1.123 1.123 0 0 0 0-1.592Zm-8.671 7.077V16.5a1.125 1.125 0 0 0-1.125-1.125h-.375v-6.75h.375A1.125 1.125 0 0 0 13.875 7.5V5.719L20.156 12l-6.281 6.281Zm-9-10.781v9a1.125 1.125 0 0 1-2.25 0v-9a1.125 1.125 0 0 1 2.25 0Zm3.75 0v9a1.125 1.125 0 0 1-2.25 0v-9a1.125 1.125 0 0 1 2.25 0Z'
    />{' '}
  </svg>
);

export default ArrowFatLinesRight;
