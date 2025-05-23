'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const TelegramLogo: React.FC<IconProps> = ({
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
      d='M21.702 2.171a1.219 1.219 0 0 0-1.24-.212l-19 7.436a1.708 1.708 0 0 0 .293 3.268l4.62.906v5.181A1.875 1.875 0 0 0 9.6 20.051l2.125-2.204 3.495 3.06a1.875 1.875 0 0 0 3.066-.989l3.808-16.551a1.22 1.22 0 0 0-.392-1.196ZM13.07 7.268l-5.83 4.178-3.228-.633 9.058-3.545Zm-4.445 10.55v-2.691l1.406 1.232-1.406 1.46Zm7.609.986-6.927-6.072 9.967-7.142-3.04 13.214Z'
    />{' '}
  </svg>
);

export default TelegramLogo;
