'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const HandPalm: React.FC<IconProps> = ({
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
      d='M17.625 7.875a3 3 0 0 0-.75.094V5.625a3 3 0 0 0-4.05-2.813 3 3 0 0 0-5.7 1.313v.094a3 3 0 0 0-3.75 2.906v7.125a8.625 8.625 0 1 0 17.25 0v-3.375a3 3 0 0 0-3-3Zm.75 6.375a6.375 6.375 0 1 1-12.75 0V7.125a.75.75 0 0 1 1.5 0v3.75a1.125 1.125 0 0 0 2.25 0v-6.75a.75.75 0 0 1 1.5 0v6a1.125 1.125 0 0 0 2.25 0v-4.5a.75.75 0 1 1 1.5 0v6.131a4.884 4.884 0 0 0-3.75 4.744 1.125 1.125 0 0 0 2.25 0 2.625 2.625 0 0 1 2.625-2.625 1.125 1.125 0 0 0 1.125-1.125v-1.875a.75.75 0 1 1 1.5 0v3.375Z'
    />{' '}
  </svg>
);

export default HandPalm;
