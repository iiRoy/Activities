'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ArrowBendDownRight: React.FC<IconProps> = ({
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
      d='m21.796 15.046-4.5 4.5a1.127 1.127 0 1 1-1.594-1.594l2.58-2.577H12A10.137 10.137 0 0 1 1.875 5.25a1.125 1.125 0 0 1 2.25 0A7.883 7.883 0 0 0 12 13.125h6.281l-2.58-2.58a1.127 1.127 0 1 1 1.594-1.593l4.5 4.5a1.126 1.126 0 0 1 0 1.594Z'
    />{' '}
  </svg>
);

export default ArrowBendDownRight;
