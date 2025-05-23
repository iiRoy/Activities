'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ArrowDownLeft: React.FC<IconProps> = ({
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
      d='M18.796 6.795 8.719 16.875h7.031a1.125 1.125 0 0 1 0 2.25H6A1.125 1.125 0 0 1 4.875 18V8.25a1.125 1.125 0 0 1 2.25 0v7.031l10.08-10.077a1.126 1.126 0 0 1 1.923.797 1.128 1.128 0 0 1-.33.797l-.002-.003Z'
    />{' '}
  </svg>
);

export default ArrowDownLeft;
