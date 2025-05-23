'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const AnchorSimple: React.FC<IconProps> = ({
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
      d='M21 10.125h-2.25a1.125 1.125 0 1 0 0 2.25h1.045a7.894 7.894 0 0 1-6.67 6.67V9.181a3.375 3.375 0 1 0-2.25 0v9.862a7.895 7.895 0 0 1-6.67-6.669H5.25a1.125 1.125 0 1 0 0-2.25H3a1.125 1.125 0 0 0-1.125 1.125 10.125 10.125 0 0 0 20.25 0A1.125 1.125 0 0 0 21 10.125Zm-9-5.25a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25Z'
    />{' '}
  </svg>
);

export default AnchorSimple;
