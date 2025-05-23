'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ArrowArcLeft: React.FC<IconProps> = ({
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
      d='M22.125 17.25a1.125 1.125 0 1 1-2.25 0 7.875 7.875 0 0 0-13.444-5.569L4.98 13.125h3.27a1.125 1.125 0 1 1 0 2.25h-6a1.125 1.125 0 0 1-1.125-1.125v-6a1.125 1.125 0 0 1 2.25 0v3.296l1.468-1.458a10.125 10.125 0 0 1 17.282 7.162Z'
    />{' '}
  </svg>
);

export default ArrowArcLeft;
