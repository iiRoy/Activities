'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const CurrencyDollar: React.FC<IconProps> = ({
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
      d='M14.25 10.875h-1.125v-5.25h.375a2.625 2.625 0 0 1 2.625 2.625 1.125 1.125 0 1 0 2.25 0A4.88 4.88 0 0 0 13.5 3.375h-.375V2.25a1.125 1.125 0 1 0-2.25 0v1.125H10.5a4.875 4.875 0 1 0 0 9.75h.375v5.25H9.75a2.625 2.625 0 0 1-2.625-2.625 1.125 1.125 0 0 0-2.25 0 4.88 4.88 0 0 0 4.875 4.875h1.125v1.125a1.125 1.125 0 1 0 2.25 0v-1.125h1.125a4.875 4.875 0 1 0 0-9.75Zm-3.75 0a2.625 2.625 0 0 1 0-5.25h.375v5.25H10.5Zm3.75 7.5h-1.125v-5.25h1.125a2.625 2.625 0 0 1 0 5.25Z'
    />{' '}
  </svg>
);

export default CurrencyDollar;
