'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const UserSound: React.FC<IconProps> = ({
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
      d='M14.297 15.425a6.75 6.75 0 1 0-8.344 0 11.632 11.632 0 0 0-4.565 3.351 1.125 1.125 0 1 0 1.724 1.448c1.283-1.528 3.544-3.349 7.013-3.349s5.73 1.82 7.013 3.349a1.125 1.125 0 0 0 1.724-1.448 11.626 11.626 0 0 0-4.565-3.351Zm-8.672-5.3a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm18 0a13.416 13.416 0 0 1-1.088 5.318 1.125 1.125 0 1 1-2.063-.886 11.295 11.295 0 0 0 0-8.864 1.124 1.124 0 1 1 2.063-.886 13.417 13.417 0 0 1 1.088 5.318Zm-4.219-4.054a10.149 10.149 0 0 1 0 8.108 1.125 1.125 0 1 1-2.062-.902 7.909 7.909 0 0 0 0-6.304 1.126 1.126 0 1 1 2.062-.902Z'
    />{' '}
  </svg>
);

export default UserSound;
