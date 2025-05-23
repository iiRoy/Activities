'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const CirclesThree: React.FC<IconProps> = ({
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
      d='M16.5 7.125a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0ZM12 9.375a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Zm5.625 2.25a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 6.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Zm-11.25-6.75a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 6.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z'
    />{' '}
  </svg>
);

export default CirclesThree;
