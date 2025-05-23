'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Barcode: React.FC<IconProps> = ({
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
      d='M21.75 4.875v3.75a1.125 1.125 0 1 1-2.25 0V6h-2.625a1.125 1.125 0 0 1 0-2.25h3.75a1.125 1.125 0 0 1 1.125 1.125ZM7.125 18H4.5v-2.625a1.125 1.125 0 0 0-2.25 0v3.75a1.125 1.125 0 0 0 1.125 1.125h3.75a1.125 1.125 0 1 0 0-2.25Zm13.5-3.75a1.125 1.125 0 0 0-1.125 1.125V18h-2.625a1.125 1.125 0 1 0 0 2.25h3.75a1.125 1.125 0 0 0 1.125-1.125v-3.75a1.125 1.125 0 0 0-1.125-1.125Zm-17.25-4.5A1.125 1.125 0 0 0 4.5 8.625V6h2.625a1.125 1.125 0 0 0 0-2.25h-3.75A1.125 1.125 0 0 0 2.25 4.875v3.75A1.125 1.125 0 0 0 3.375 9.75ZM8.25 7.5a1.125 1.125 0 0 0-1.125 1.125v6.75a1.125 1.125 0 0 0 2.25 0v-6.75A1.125 1.125 0 0 0 8.25 7.5Zm8.625 7.875v-6.75a1.125 1.125 0 1 0-2.25 0v6.75a1.125 1.125 0 1 0 2.25 0ZM12 7.5a1.125 1.125 0 0 0-1.125 1.125v6.75a1.125 1.125 0 1 0 2.25 0v-6.75A1.125 1.125 0 0 0 12 7.5Z'
    />{' '}
  </svg>
);

export default Barcode;
