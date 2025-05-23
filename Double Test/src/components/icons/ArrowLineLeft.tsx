'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ArrowLineLeft: React.FC<IconProps> = ({
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
      d='M22.125 12A1.125 1.125 0 0 1 21 13.125H10.219l4.83 4.83a1.127 1.127 0 1 1-1.594 1.593l-6.75-6.75a1.125 1.125 0 0 1 0-1.594l6.75-6.75a1.127 1.127 0 1 1 1.594 1.594l-4.83 4.827H21A1.125 1.125 0 0 1 22.125 12ZM3.75 2.625A1.125 1.125 0 0 0 2.625 3.75v16.5a1.125 1.125 0 0 0 2.25 0V3.75A1.125 1.125 0 0 0 3.75 2.625Z'
    />{' '}
  </svg>
);

export default ArrowLineLeft;
