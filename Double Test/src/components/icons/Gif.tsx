'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Gif: React.FC<IconProps> = ({
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
      d='M13.875 6.75v10.5a1.125 1.125 0 1 1-2.25 0V6.75a1.125 1.125 0 1 1 2.25 0Zm7.875 1.125a1.125 1.125 0 0 0 0-2.25H16.5a1.125 1.125 0 0 0-1.125 1.125v10.5a1.125 1.125 0 1 0 2.25 0v-4.125H21a1.125 1.125 0 1 0 0-2.25h-3.375v-3h4.125Zm-12.75 3H6.75a1.125 1.125 0 1 0 0 2.25h1.125v1.125a1.875 1.875 0 1 1-3.75 0v-4.5A1.875 1.875 0 0 1 6 7.875c.883 0 1.704.605 1.91 1.406a1.125 1.125 0 0 0 2.18-.562C9.627 6.926 7.907 5.625 6 5.625A4.13 4.13 0 0 0 1.875 9.75v4.5a4.125 4.125 0 0 0 8.25 0V12A1.125 1.125 0 0 0 9 10.875Z'
    />{' '}
  </svg>
);

export default Gif;
