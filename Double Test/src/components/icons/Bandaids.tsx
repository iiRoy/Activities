'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Bandaids: React.FC<IconProps> = ({
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
      d='m17.834 12 2.333-2.333a4.125 4.125 0 1 0-5.834-5.834L12 6.166 9.667 3.833a4.125 4.125 0 1 0-5.834 5.834L6.166 12l-2.333 2.333a4.126 4.126 0 1 0 5.834 5.834L12 17.834l2.333 2.333a4.126 4.126 0 1 0 5.834-5.834L17.834 12Zm-1.91-6.576a1.874 1.874 0 0 1 3.224 1.32 1.875 1.875 0 0 1-.572 1.332l-2.334 2.33-2.648-2.648 2.33-2.334ZM14.651 12 12 14.651 9.349 12 12 9.349 14.651 12ZM5.424 8.076a1.875 1.875 0 1 1 2.652-2.652l2.33 2.334-2.648 2.648-2.334-2.33Zm2.652 10.5a1.875 1.875 0 1 1-2.652-2.652l2.334-2.33 2.648 2.648-2.33 2.334Zm10.5 0a1.875 1.875 0 0 1-2.652 0l-2.33-2.334 2.648-2.648 2.334 2.333a1.875 1.875 0 0 1 0 2.651v-.002Z'
    />{' '}
  </svg>
);

export default Bandaids;
