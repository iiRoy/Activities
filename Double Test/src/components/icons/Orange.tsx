'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Orange: React.FC<IconProps> = ({
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
      d='M16.313 6.784A6.375 6.375 0 0 0 19.125 1.5 1.125 1.125 0 0 0 18 .375h-.75A6.375 6.375 0 0 0 12 3.14 6.376 6.376 0 0 0 6.75.375H6a1.125 1.125 0 1 0 0 2.25h.75a4.132 4.132 0 0 1 3.994 3.094 8.63 8.63 0 1 0 5.569 1.065Zm.395-4.125a4.138 4.138 0 0 1-3.418 2.929 4.138 4.138 0 0 1 3.42-2.927l-.002-.002ZM12 20.625a6.375 6.375 0 1 1 6.375-6.375A6.381 6.381 0 0 1 12 20.625Zm4.652-4.912a4.875 4.875 0 0 1-3.188 3.187 1.125 1.125 0 1 1-.675-2.147 2.625 2.625 0 0 0 1.718-1.717 1.125 1.125 0 1 1 2.147.675l-.002.002Z'
    />{' '}
  </svg>
);

export default Orange;
