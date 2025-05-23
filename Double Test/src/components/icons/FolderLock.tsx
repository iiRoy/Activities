'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const FolderLock: React.FC<IconProps> = ({
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
      d='M21 14.25h-.375v-.375a3 3 0 0 0-6 0v.375h-.375a1.125 1.125 0 0 0-1.125 1.125V19.5a1.125 1.125 0 0 0 1.125 1.125H21a1.125 1.125 0 0 0 1.125-1.125v-4.125A1.125 1.125 0 0 0 21 14.25Zm-4.125-.375a.75.75 0 1 1 1.5 0v.375h-1.5v-.375Zm3 4.5h-4.5V16.5h4.5v1.875Zm.375-12h-7.745l-2.437-2.746A1.875 1.875 0 0 0 8.662 3H3.75a1.875 1.875 0 0 0-1.875 1.875v13.933a1.82 1.82 0 0 0 1.817 1.817h6.11a1.125 1.125 0 1 0 0-2.25H4.126v-9.75h15.75a1.125 1.125 0 1 0 2.25 0V8.25a1.875 1.875 0 0 0-1.875-1.875Zm-16.125 0V5.25h4.37l1 1.125h-5.37Z'
    />{' '}
  </svg>
);

export default FolderLock;
