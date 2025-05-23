'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const AlignCenterHorizontal: React.FC<IconProps> = ({
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
      d='M19.5 12.75h-6.375v-1.5h4.125a1.875 1.875 0 0 0 1.875-1.875v-3.75A1.875 1.875 0 0 0 17.25 3.75h-4.125V3a1.125 1.125 0 1 0-2.25 0v.75H6.75a1.875 1.875 0 0 0-1.875 1.875v3.75A1.875 1.875 0 0 0 6.75 11.25h4.125v1.5H4.5a1.875 1.875 0 0 0-1.875 1.875v3.75A1.875 1.875 0 0 0 4.5 20.25h6.375V21a1.125 1.125 0 1 0 2.25 0v-.75H19.5a1.875 1.875 0 0 0 1.875-1.875v-3.75A1.875 1.875 0 0 0 19.5 12.75ZM7.125 6h9.75v3h-9.75V6Zm12 12H4.875v-3h14.25v3Z'
    />{' '}
  </svg>
);

export default AlignCenterHorizontal;
