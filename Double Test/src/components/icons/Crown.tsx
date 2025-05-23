'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Crown: React.FC<IconProps> = ({
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
      d='M23.625 7.5A3 3 0 1 0 18 8.948l-1.956 2.406-1.905-4.379a3 3 0 1 0-4.278 0l-1.904 4.38L6 8.947a3 3 0 1 0-3.281 1.48l1.312 7.88a1.87 1.87 0 0 0 1.855 1.567h12.228a1.87 1.87 0 0 0 1.855-1.567l1.312-7.88A3.005 3.005 0 0 0 23.625 7.5Zm-3-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 4.125a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM3.375 6.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm14.422 10.875H6.203l-1.02-6.114 2.194 2.699a1.126 1.126 0 0 0 1.904-.26l2.642-6.075h.154l2.642 6.074a1.126 1.126 0 0 0 1.904.26l2.194-2.698-1.02 6.114Z'
    />{' '}
  </svg>
);

export default Crown;
