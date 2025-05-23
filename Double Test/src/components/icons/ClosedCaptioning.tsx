'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ClosedCaptioning: React.FC<IconProps> = ({
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
      d='M21 4.125H3A1.875 1.875 0 0 0 1.125 6v12A1.875 1.875 0 0 0 3 19.875h18A1.875 1.875 0 0 0 22.875 18V6A1.875 1.875 0 0 0 21 4.125Zm-.375 13.5H3.375V6.375h17.25v11.25ZM4.875 12a4.125 4.125 0 0 1 6.188-3.573 1.125 1.125 0 0 1-1.126 1.948 1.876 1.876 0 1 0 0 3.25 1.125 1.125 0 1 1 1.126 1.947A4.125 4.125 0 0 1 4.875 12Zm7.5 0a4.125 4.125 0 0 1 6.188-3.573 1.125 1.125 0 0 1-1.125 1.948 1.876 1.876 0 1 0 0 3.25 1.125 1.125 0 1 1 1.125 1.947A4.125 4.125 0 0 1 12.375 12Z'
    />{' '}
  </svg>
);

export default ClosedCaptioning;
