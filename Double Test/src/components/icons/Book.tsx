'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Book: React.FC<IconProps> = ({
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
      d='M19.5 1.875H6.75A3.375 3.375 0 0 0 3.375 5.25V21A1.125 1.125 0 0 0 4.5 22.125H18a1.125 1.125 0 1 0 0-2.25H5.625V19.5a1.125 1.125 0 0 1 1.125-1.125H19.5a1.125 1.125 0 0 0 1.125-1.125V3A1.125 1.125 0 0 0 19.5 1.875Zm-1.125 14.25H6.75c-.383 0-.764.065-1.125.193V5.25A1.125 1.125 0 0 1 6.75 4.125h11.625v12Z'
    />{' '}
  </svg>
);

export default Book;
