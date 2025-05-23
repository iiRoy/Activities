'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const MoonStars: React.FC<IconProps> = ({
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
      d='M22.875 9a1.125 1.125 0 0 1-1.125 1.125h-1.125v1.125a1.125 1.125 0 1 1-2.25 0v-1.125H17.25a1.125 1.125 0 1 1 0-2.25h1.125V6.75a1.125 1.125 0 1 1 2.25 0v1.125h1.125A1.125 1.125 0 0 1 22.875 9ZM13.5 5.625h.375V6a1.125 1.125 0 1 0 2.25 0v-.375h.375a1.125 1.125 0 0 0 0-2.25h-.375V3a1.125 1.125 0 1 0-2.25 0v.375H13.5a1.125 1.125 0 0 0 0 2.25Zm7.107 8.473a1.126 1.126 0 0 1 .206 1.118A9.375 9.375 0 1 1 8.784 3.188a1.125 1.125 0 0 1 1.49 1.275 7.883 7.883 0 0 0 9.26 9.263 1.125 1.125 0 0 1 1.073.372Zm-2.794 2.027a10.137 10.137 0 0 1-9.938-9.938 7.125 7.125 0 1 0 9.938 9.938Z'
    />{' '}
  </svg>
);

export default MoonStars;
