'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const CurrencyDollarSimple: React.FC<IconProps> = ({
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
      d='M19.125 15.75a4.88 4.88 0 0 1-4.875 4.875h-1.125v1.125a1.125 1.125 0 1 1-2.25 0v-1.125H9.75a4.88 4.88 0 0 1-4.875-4.875 1.125 1.125 0 0 1 2.25 0 2.625 2.625 0 0 0 2.625 2.625h4.5a2.625 2.625 0 0 0 0-5.25H10.5a4.875 4.875 0 1 1 0-9.75h.375V2.25a1.125 1.125 0 1 1 2.25 0v1.125h.375a4.88 4.88 0 0 1 4.875 4.875 1.125 1.125 0 1 1-2.25 0A2.625 2.625 0 0 0 13.5 5.625h-3a2.625 2.625 0 0 0 0 5.25h3.75a4.88 4.88 0 0 1 4.875 4.875Z'
    />{' '}
  </svg>
);

export default CurrencyDollarSimple;
