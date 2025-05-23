'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ArrowFatLinesLeft: React.FC<IconProps> = ({
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
      d='M12.75 6.375h-.375V3a1.125 1.125 0 0 0-1.92-.796l-9 9a1.125 1.125 0 0 0 0 1.594l9 9a1.125 1.125 0 0 0 1.92-.798v-3.375h.375a1.125 1.125 0 0 0 1.125-1.125v-9a1.125 1.125 0 0 0-1.125-1.125Zm-1.125 9h-.375a1.125 1.125 0 0 0-1.125 1.125v1.781L3.844 12l6.281-6.281V7.5a1.125 1.125 0 0 0 1.125 1.125h.375v6.75Zm9.75-7.875v9a1.125 1.125 0 1 1-2.25 0v-9a1.125 1.125 0 1 1 2.25 0Zm-3.75 0v9a1.125 1.125 0 1 1-2.25 0v-9a1.125 1.125 0 1 1 2.25 0Z'
    />{' '}
  </svg>
);

export default ArrowFatLinesLeft;
