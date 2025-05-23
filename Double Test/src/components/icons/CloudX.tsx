'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const CloudX: React.FC<IconProps> = ({
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
      d='M15 3.375a8.634 8.634 0 0 0-7.594 4.534 6.375 6.375 0 1 0-.656 12.716H15a8.625 8.625 0 1 0 0-17.25Zm0 15H6.75a4.126 4.126 0 0 1-.17-8.25A8.611 8.611 0 0 0 6.374 12a1.125 1.125 0 1 0 2.25 0A6.375 6.375 0 1 1 15 18.375Zm3.046-7.454-1.452 1.454 1.455 1.454a1.127 1.127 0 0 1-1.594 1.594L15 13.969l-1.454 1.455a1.124 1.124 0 0 1-1.594 0 1.124 1.124 0 0 1 0-1.594l1.454-1.455-1.455-1.454a1.127 1.127 0 1 1 1.594-1.594L15 10.781l1.454-1.455a1.127 1.127 0 1 1 1.594 1.594h-.002Z'
    />{' '}
  </svg>
);

export default CloudX;
