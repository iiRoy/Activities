'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const AlignBottomSimple: React.FC<IconProps> = ({
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
      d='M19.875 21.75a1.125 1.125 0 0 1-1.125 1.125H5.25a1.125 1.125 0 1 1 0-2.25h13.5a1.125 1.125 0 0 1 1.125 1.125Zm-12.75-4.5V3.75A1.875 1.875 0 0 1 9 1.875h6a1.875 1.875 0 0 1 1.875 1.875v13.5A1.875 1.875 0 0 1 15 19.125H9a1.875 1.875 0 0 1-1.875-1.875Zm2.25-.375h5.25V4.125h-5.25v12.75Z'
    />{' '}
  </svg>
);

export default AlignBottomSimple;
