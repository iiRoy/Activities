'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ArrowFatLinesUp: React.FC<IconProps> = ({
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
      d='m21.796 10.454-9-9a1.125 1.125 0 0 0-1.594 0l-9 9A1.125 1.125 0 0 0 3 12.375h3.375v.375A1.125 1.125 0 0 0 7.5 13.875h9a1.125 1.125 0 0 0 1.125-1.125v-.375H21a1.125 1.125 0 0 0 .796-1.92Zm-5.296-.329a1.125 1.125 0 0 0-1.125 1.125v.375h-6.75v-.375A1.125 1.125 0 0 0 7.5 10.125H5.719L12 3.844l6.281 6.281H16.5Zm1.125 10.125a1.125 1.125 0 0 1-1.125 1.125h-9a1.125 1.125 0 1 1 0-2.25h9a1.125 1.125 0 0 1 1.125 1.125Zm0-3.75a1.125 1.125 0 0 1-1.125 1.125h-9a1.125 1.125 0 1 1 0-2.25h9a1.125 1.125 0 0 1 1.125 1.125Z'
    />{' '}
  </svg>
);

export default ArrowFatLinesUp;
