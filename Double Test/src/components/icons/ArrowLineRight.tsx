'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ArrowLineRight: React.FC<IconProps> = ({
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
      d='M17.296 11.204a1.125 1.125 0 0 1 0 1.594l-6.75 6.75a1.127 1.127 0 1 1-1.594-1.594l4.83-4.829H3a1.125 1.125 0 1 1 0-2.25h10.781l-4.827-4.83a1.127 1.127 0 0 1 1.594-1.593l6.748 6.752Zm2.954-8.579a1.125 1.125 0 0 0-1.125 1.125v16.5a1.125 1.125 0 1 0 2.25 0V3.75a1.125 1.125 0 0 0-1.125-1.125Z'
    />{' '}
  </svg>
);

export default ArrowLineRight;
