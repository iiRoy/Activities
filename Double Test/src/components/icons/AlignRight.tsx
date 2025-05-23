'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const AlignRight: React.FC<IconProps> = ({
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
      d='M21.375 3.75v16.5a1.125 1.125 0 1 1-2.25 0V3.75a1.125 1.125 0 1 1 2.25 0ZM17.625 6v3.375a1.875 1.875 0 0 1-1.875 1.875H7.5a1.875 1.875 0 0 1-1.875-1.875V6A1.875 1.875 0 0 1 7.5 4.125h8.25A1.875 1.875 0 0 1 17.625 6Zm-2.25.375h-7.5V9h7.5V6.375Zm2.25 8.25V18a1.875 1.875 0 0 1-1.875 1.875h-12A1.875 1.875 0 0 1 1.875 18v-3.375A1.875 1.875 0 0 1 3.75 12.75h12a1.875 1.875 0 0 1 1.875 1.875Zm-2.25.375H4.125v2.625h11.25V15Z'
    />{' '}
  </svg>
);

export default AlignRight;
