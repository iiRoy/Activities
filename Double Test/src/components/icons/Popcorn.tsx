'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Popcorn: React.FC<IconProps> = ({
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
      d='M21.776 6.686a1.125 1.125 0 0 0-.656-.304 4.5 4.5 0 0 0-5.174-2.907 4.5 4.5 0 0 0-7.898 0 4.5 4.5 0 0 0-5.174 2.907 1.125 1.125 0 0 0-.969 1.376l2.864 12.171a1.867 1.867 0 0 0 1.825 1.446h10.812a1.868 1.868 0 0 0 1.825-1.446l2.864-12.171a1.125 1.125 0 0 0-.319-1.072ZM7.125 5.625a2.22 2.22 0 0 1 1.053.262 1.125 1.125 0 0 0 1.626-.75 2.25 2.25 0 0 1 4.392 0 1.125 1.125 0 0 0 1.626.75 2.25 2.25 0 0 1 3.095 1.039l-3.106.886-3.114-1.245a1.865 1.865 0 0 0-1.394 0L8.19 7.812l-3.106-.887a2.25 2.25 0 0 1 2.042-1.3Zm2.356 4.094L12 8.711l2.52 1.008-1.255 9.406h-2.532L9.481 9.719Zm-4.947-.61 2.698.77 1.233 9.246H6.89L4.534 9.109Zm12.575 10.016h-1.574l1.233-9.246 2.698-.77-2.357 10.016Z'
    />{' '}
  </svg>
);

export default Popcorn;
