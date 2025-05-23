'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Drop: React.FC<IconProps> = ({
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
      d='M12.645.578a1.125 1.125 0 0 0-1.29 0 24.28 24.28 0 0 0-3.954 3.657c-2.634 3.024-4.026 6.23-4.026 9.265a8.625 8.625 0 1 0 17.25 0c0-7.252-7.654-12.694-7.98-12.922ZM12 19.875A6.381 6.381 0 0 1 5.625 13.5c0-3.123 1.875-5.94 3.44-7.754A23.38 23.38 0 0 1 12 2.916a23.381 23.381 0 0 1 2.934 2.83c1.566 1.813 3.441 4.631 3.441 7.754A6.381 6.381 0 0 1 12 19.875Zm4.652-4.912a4.875 4.875 0 0 1-3.188 3.187 1.126 1.126 0 1 1-.675-2.147 2.625 2.625 0 0 0 1.718-1.717 1.125 1.125 0 1 1 2.147.675l-.002.002Z'
    />{' '}
  </svg>
);

export default Drop;
