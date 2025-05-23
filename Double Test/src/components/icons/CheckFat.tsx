'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const CheckFat: React.FC<IconProps> = ({
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
      d='m23.077 6.137-.007-.008-2.243-2.206a1.875 1.875 0 0 0-2.647-.004l-8.438 8.328-3.174-3.08a1.875 1.875 0 0 0-2.645.007l-2.25 2.25a1.875 1.875 0 0 0 0 2.65l6.715 6.75a1.875 1.875 0 0 0 2.652 0L23.077 8.788a1.875 1.875 0 0 0 0-2.651ZM9.713 18.968 3.53 12.75l1.721-1.724 3.717 3.599a1.125 1.125 0 0 0 1.573-.008l8.96-8.841 1.718 1.687L9.713 18.968Z'
    />{' '}
  </svg>
);

export default CheckFat;
