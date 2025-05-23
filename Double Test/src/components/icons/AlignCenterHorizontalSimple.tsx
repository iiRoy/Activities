'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const AlignCenterHorizontalSimple: React.FC<IconProps> = ({
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
      d='M19.5 7.125h-6.375V4.5a1.125 1.125 0 1 0-2.25 0v2.625H4.5A1.875 1.875 0 0 0 2.625 9v6A1.875 1.875 0 0 0 4.5 16.875h6.375V19.5a1.125 1.125 0 1 0 2.25 0v-2.625H19.5A1.875 1.875 0 0 0 21.375 15V9A1.875 1.875 0 0 0 19.5 7.125Zm-.375 7.5H4.875v-5.25h14.25v5.25Z'
    />{' '}
  </svg>
);

export default AlignCenterHorizontalSimple;
