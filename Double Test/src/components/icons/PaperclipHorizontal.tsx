'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const PaperclipHorizontal: React.FC<IconProps> = ({
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
      d='M23.625 12A5.632 5.632 0 0 1 18 17.625H4.125a3.75 3.75 0 0 1 0-7.5H17.25a1.125 1.125 0 1 1 0 2.25H4.125a1.5 1.5 0 1 0 0 3H18a3.375 3.375 0 0 0 0-6.75H7.5a1.125 1.125 0 0 1 0-2.25H18A5.632 5.632 0 0 1 23.625 12Z'
    />{' '}
  </svg>
);

export default PaperclipHorizontal;
