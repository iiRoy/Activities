'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Ghost: React.FC<IconProps> = ({
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
      d='M10.875 10.875a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.75-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm6.75 1.875v9a1.125 1.125 0 0 1-1.837.87L17.5 19.454l-2.038 1.668a1.125 1.125 0 0 1-1.425 0L12 19.453l-2.037 1.668a1.125 1.125 0 0 1-1.425 0L6.5 19.453l-2.037 1.668a1.125 1.125 0 0 1-1.838-.871v-9a9.375 9.375 0 0 1 18.75 0Zm-2.25 0a7.125 7.125 0 0 0-14.25 0v6.626l.912-.75a1.124 1.124 0 0 1 1.425 0l2.038 1.67 2.037-1.667a1.125 1.125 0 0 1 1.425 0l2.038 1.668 2.038-1.668a1.125 1.125 0 0 1 1.425 0l.912.75V11.25Z'
    />{' '}
  </svg>
);

export default Ghost;
