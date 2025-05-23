'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const XLogo: React.FC<IconProps> = ({
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
      d='m20.449 19.646-5.719-8.981 5.599-6.158a1.124 1.124 0 0 0-1.665-1.514l-5.182 5.704-3.533-5.55A1.125 1.125 0 0 0 9 2.624H4.5a1.125 1.125 0 0 0-.949 1.729l5.719 8.981-5.603 6.158a1.125 1.125 0 1 0 1.665 1.514l5.186-5.704 3.533 5.55a1.126 1.126 0 0 0 .949.522h4.5a1.125 1.125 0 0 0 .949-1.729Zm-4.831-.521L6.549 4.875h1.833l9.069 14.25h-1.833Z'
    />{' '}
  </svg>
);

export default XLogo;
