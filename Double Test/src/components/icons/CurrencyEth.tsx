'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const CurrencyEth: React.FC<IconProps> = ({
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
      d='m21.135 11.305-8.25-10.5a1.125 1.125 0 0 0-1.77 0l-8.25 10.5a1.125 1.125 0 0 0 0 1.39l.056.071a.356.356 0 0 0 .042.053l8.156 10.376a1.124 1.124 0 0 0 1.77 0l8.25-10.5a1.125 1.125 0 0 0-.004-1.39Zm-8.01-6.552 5.355 6.816-5.355 2.437V4.753Zm-2.25 9.25L5.52 11.564l5.355-6.812v9.25Zm0 2.472v2.772l-3.39-4.313 3.39 1.54Zm2.25 0 3.39-1.54-3.39 4.312v-2.772Z'
    />{' '}
  </svg>
);

export default CurrencyEth;
