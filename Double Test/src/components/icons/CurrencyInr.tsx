'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const CurrencyInr: React.FC<IconProps> = ({
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
      d='M19.875 7.5a1.125 1.125 0 0 1-1.125 1.125h-2.625a6.006 6.006 0 0 1-6 6h-.469l6.094 5.543a1.125 1.125 0 1 1-1.513 1.665l-8.25-7.5a1.125 1.125 0 0 1 .763-1.958h3.375a3.75 3.75 0 0 0 3.75-3.75H6.75a1.125 1.125 0 0 1 0-2.25h6.375a3.75 3.75 0 0 0-3-1.5H6.75a1.125 1.125 0 0 1 0-2.25h12a1.125 1.125 0 0 1 0 2.25h-3.946c.365.455.662.96.881 1.5h3.065A1.125 1.125 0 0 1 19.875 7.5Z'
    />{' '}
  </svg>
);

export default CurrencyInr;
