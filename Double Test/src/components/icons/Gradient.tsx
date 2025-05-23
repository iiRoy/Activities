'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Gradient: React.FC<IconProps> = ({
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
      d='M1.875 10.125A1.125 1.125 0 0 1 3 9h7.125a1.125 1.125 0 0 1 0 2.25H3a1.125 1.125 0 0 1-1.125-1.125ZM21 9h-7.125a1.125 1.125 0 0 0 0 2.25H21A1.125 1.125 0 1 0 21 9ZM6.375 12.75H3A1.125 1.125 0 1 0 3 15h3.375a1.125 1.125 0 1 0 0-2.25Zm14.625 0h-3.375a1.125 1.125 0 1 0 0 2.25H21a1.125 1.125 0 1 0 0-2.25ZM9 13.875A1.125 1.125 0 0 0 10.125 15h3.75a1.125 1.125 0 1 0 0-2.25h-3.75A1.125 1.125 0 0 0 9 13.875ZM4.875 16.5H3a1.125 1.125 0 1 0 0 2.25h1.875a1.125 1.125 0 1 0 0-2.25Zm5.25 0h-1.5a1.125 1.125 0 1 0 0 2.25h1.5a1.125 1.125 0 1 0 0-2.25Zm5.25 0h-1.5a1.125 1.125 0 1 0 0 2.25h1.5a1.125 1.125 0 1 0 0-2.25Zm5.625 0h-1.875a1.125 1.125 0 1 0 0 2.25H21a1.125 1.125 0 1 0 0-2.25Zm-18-9h18a1.125 1.125 0 0 0 0-2.25H3A1.125 1.125 0 0 0 3 7.5Z'
    />{' '}
  </svg>
);

export default Gradient;
