'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const FolderSimpleMinus: React.FC<IconProps> = ({
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
      d='M20.25 6.375h-7.875L9.875 4.5a1.886 1.886 0 0 0-1.125-.375h-5A1.875 1.875 0 0 0 1.875 6v12.75a1.875 1.875 0 0 0 1.875 1.875h16.583a1.793 1.793 0 0 0 1.792-1.792V8.25a1.875 1.875 0 0 0-1.875-1.875Zm-.375 12H4.125v-12h4.5l2.7 2.025c.195.146.432.225.675.225h7.875v9.75Zm-10.125-6h4.5a1.125 1.125 0 1 1 0 2.25h-4.5a1.125 1.125 0 1 1 0-2.25Z'
    />{' '}
  </svg>
);

export default FolderSimpleMinus;
