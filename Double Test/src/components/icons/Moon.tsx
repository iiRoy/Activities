'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Moon: React.FC<IconProps> = ({
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
      d='M22.16 13.069a1.125 1.125 0 0 0-1.125-.282 7.883 7.883 0 0 1-9.822-9.825 1.126 1.126 0 0 0-1.407-1.407 10.206 10.206 0 0 0-5.148 3.608 10.125 10.125 0 0 0 8.092 16.212 10.04 10.04 0 0 0 6.087-2.033 10.206 10.206 0 0 0 3.604-5.151 1.125 1.125 0 0 0-.281-1.122Zm-4.677 4.475A7.876 7.876 0 0 1 6.456 6.517a7.962 7.962 0 0 1 2.194-1.99A10.136 10.136 0 0 0 19.472 15.35a7.95 7.95 0 0 1-1.989 2.194Z'
    />{' '}
  </svg>
);

export default Moon;
