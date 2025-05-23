'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const BookmarksSimple: React.FC<IconProps> = ({
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
      d='M14.625 5.25h-9A1.875 1.875 0 0 0 3.75 7.125v14.25a1.124 1.124 0 0 0 1.781.915l4.594-3.281 4.594 3.281a1.124 1.124 0 0 0 1.781-.915V7.125a1.875 1.875 0 0 0-1.875-1.875Zm-.375 13.939-3.469-2.48a1.125 1.125 0 0 0-1.312 0L6 19.19V7.5h8.25v11.689Zm6-15.814v14.25a1.125 1.125 0 1 1-2.25 0V3.75H8.625a1.125 1.125 0 0 1 0-2.25h9.75a1.875 1.875 0 0 1 1.875 1.875Z'
    />{' '}
  </svg>
);

export default BookmarksSimple;
