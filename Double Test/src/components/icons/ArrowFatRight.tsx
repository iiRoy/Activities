'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ArrowFatRight: React.FC<IconProps> = ({
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
      d='m22.546 11.204-9-9A1.125 1.125 0 0 0 11.625 3v3.375H4.5A1.875 1.875 0 0 0 2.625 8.25v7.5A1.875 1.875 0 0 0 4.5 17.625h7.125V21a1.125 1.125 0 0 0 1.92.796l9-9a1.123 1.123 0 0 0 0-1.592Zm-8.671 7.077V16.5a1.125 1.125 0 0 0-1.125-1.125H4.875v-6.75h7.875A1.125 1.125 0 0 0 13.875 7.5V5.719L20.156 12l-6.281 6.281Z'
    />{' '}
  </svg>
);

export default ArrowFatRight;
