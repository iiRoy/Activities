'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const CurrencyGbp: React.FC<IconProps> = ({
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
      d='M18.375 19.5a1.125 1.125 0 0 1-1.125 1.125h-12a1.125 1.125 0 1 1 0-2.25h.375a2.25 2.25 0 0 0 2.25-2.25v-3H5.25a1.125 1.125 0 1 1 0-2.25h2.625v-3a5.25 5.25 0 0 1 8.59-4.05 1.125 1.125 0 1 1-1.432 1.734 3 3 0 0 0-4.908 2.316v3h2.625a1.125 1.125 0 1 1 0 2.25h-2.625v3a4.48 4.48 0 0 1-.604 2.25h7.729a1.125 1.125 0 0 1 1.125 1.125Z'
    />{' '}
  </svg>
);

export default CurrencyGbp;
