'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Sticker: React.FC<IconProps> = ({
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
      d='M15.75 2.625h-7.5A5.632 5.632 0 0 0 2.625 8.25v7.5a5.632 5.632 0 0 0 5.625 5.625h4.5c.12 0 .24-.02.355-.058 2.59-.864 7.348-5.625 8.212-8.212.038-.114.058-.234.058-.355v-4.5a5.631 5.631 0 0 0-5.625-5.625ZM4.875 15.75v-7.5A3.375 3.375 0 0 1 8.25 4.875h7.5a3.375 3.375 0 0 1 3.375 3.375v3.375H17.25a5.632 5.632 0 0 0-5.625 5.625v1.875H8.25a3.375 3.375 0 0 1-3.375-3.375Zm9 2.59v-1.09a3.375 3.375 0 0 1 3.375-3.375h1.09c-1.09 1.51-2.955 3.375-4.465 4.465Z'
    />{' '}
  </svg>
);

export default Sticker;
