'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const LockKey: React.FC<IconProps> = ({
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
      d='M19.5 7.125h-2.625V5.25a4.875 4.875 0 1 0-9.75 0v1.875H4.5A1.875 1.875 0 0 0 2.625 9v10.5A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875V9A1.875 1.875 0 0 0 19.5 7.125ZM9.375 5.25a2.625 2.625 0 0 1 5.25 0v1.875h-5.25V5.25Zm9.75 13.875H4.875v-9.75h14.25v9.75ZM12 10.5a3 3 0 0 0-1.125 5.78v.595a1.125 1.125 0 1 0 2.25 0v-.594A3 3 0 0 0 12 10.5Zm0 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z'
    />{' '}
  </svg>
);

export default LockKey;
