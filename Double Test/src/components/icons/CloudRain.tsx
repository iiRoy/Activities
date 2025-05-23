'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const CloudRain: React.FC<IconProps> = ({
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
      d='M14.625 1.125a7.52 7.52 0 0 0-6.9 4.534 5.25 5.25 0 1 0-.6 10.466h2.773l-1.835 2.75a1.126 1.126 0 0 0 1.874 1.25l2.665-4h2.023a7.5 7.5 0 0 0 0-15Zm0 12.75h-7.5a3 3 0 0 1 0-6h.026c-.01.103-.018.206-.024.31a1.127 1.127 0 0 0 2.25.13 5.256 5.256 0 1 1 5.248 5.56Zm.06 5.5-2.5 3.75a1.125 1.125 0 1 1-1.874-1.25l2.499-3.75a1.127 1.127 0 0 1 1.875 1.25Z'
    />{' '}
  </svg>
);

export default CloudRain;
