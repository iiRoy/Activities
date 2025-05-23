'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const AlignRightSimple: React.FC<IconProps> = ({
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
      d='M22.125 5.25v13.5a1.125 1.125 0 1 1-2.25 0V5.25a1.125 1.125 0 1 1 2.25 0ZM18.375 9v6a1.875 1.875 0 0 1-1.875 1.875H3A1.875 1.875 0 0 1 1.125 15V9A1.875 1.875 0 0 1 3 7.125h13.5A1.875 1.875 0 0 1 18.375 9Zm-2.25.375H3.375v5.25h12.75v-5.25Z'
    />{' '}
  </svg>
);

export default AlignRightSimple;
