'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const BoxArrowDown: React.FC<IconProps> = ({
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
      d='m21.256 6.247-1.5-3a1.124 1.124 0 0 0-1.006-.622H5.25a1.125 1.125 0 0 0-1.006.622l-1.5 3a1.125 1.125 0 0 0-.119.503V19.5A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875V6.75a1.1 1.1 0 0 0-.12-.503Zm-3.202-1.372L18.617 6H5.383l.563-1.125h12.108ZM4.875 19.125V8.25h14.25v10.875H4.875Zm10.92-6.046a1.125 1.125 0 0 1 0 1.594l-3 3a1.125 1.125 0 0 1-1.593 0l-3-3a1.127 1.127 0 1 1 1.594-1.594l1.079 1.077V10.5a1.125 1.125 0 1 1 2.25 0v3.656l1.08-1.08a1.124 1.124 0 0 1 1.59.003Z'
    />{' '}
  </svg>
);

export default BoxArrowDown;
