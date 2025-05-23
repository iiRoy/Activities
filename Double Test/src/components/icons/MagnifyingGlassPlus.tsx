'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const MagnifyingGlassPlus: React.FC<IconProps> = ({
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
      d='M14.625 10.5a1.125 1.125 0 0 1-1.125 1.125h-1.875V13.5a1.125 1.125 0 1 1-2.25 0v-1.875H7.5a1.125 1.125 0 1 1 0-2.25h1.875V7.5a1.125 1.125 0 0 1 2.25 0v1.875H13.5a1.125 1.125 0 0 1 1.125 1.125Zm7.17 11.296a1.125 1.125 0 0 1-1.593 0l-4.452-4.452a8.636 8.636 0 1 1 1.594-1.594l4.457 4.456a1.125 1.125 0 0 1-.005 1.59ZM10.5 16.875A6.375 6.375 0 1 0 4.125 10.5a6.383 6.383 0 0 0 6.375 6.375Z'
    />{' '}
  </svg>
);

export default MagnifyingGlassPlus;
