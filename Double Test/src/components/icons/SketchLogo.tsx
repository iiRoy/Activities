'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const SketchLogo: React.FC<IconProps> = ({
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
      d='m23.344 9.01-5.25-6a1.126 1.126 0 0 0-.844-.385H6.75a1.125 1.125 0 0 0-.844.384l-5.25 6a1.125 1.125 0 0 0 .025 1.509l10.5 11.25a1.125 1.125 0 0 0 1.644 0l10.5-11.25a1.125 1.125 0 0 0 .019-1.509Zm-3.324-.385h-2.957l-2.813-3.75h2.49l3.28 3.75Zm-13.28 2.25 1.986 4.969-4.637-4.969h2.65Zm8.1 0L12 17.971l-2.839-7.096h5.678Zm-5.09-2.25 2.25-3 2.25 3h-4.5Zm7.511 2.25h2.65l-4.636 4.969 1.986-4.969Zm-10-6H9.75l-2.813 3.75H3.98l3.28-3.75Z'
    />{' '}
  </svg>
);

export default SketchLogo;
