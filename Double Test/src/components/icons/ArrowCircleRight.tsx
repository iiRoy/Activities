'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ArrowCircleRight: React.FC<IconProps> = ({
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
      d='M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875Zm0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875Zm4.546-8.67a1.125 1.125 0 0 1 0 1.593l-3 3a1.124 1.124 0 0 1-1.594 0 1.125 1.125 0 0 1 0-1.594l1.08-1.079H8.25a1.125 1.125 0 1 1 0-2.25h4.781l-1.08-1.08a1.126 1.126 0 0 1 1.228-1.837c.137.057.261.14.366.244l3 3.002Z'
    />{' '}
  </svg>
);

export default ArrowCircleRight;
