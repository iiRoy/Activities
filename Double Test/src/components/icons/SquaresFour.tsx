'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const SquaresFour: React.FC<IconProps> = ({
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
      d='M9.375 3.375H5.25A1.875 1.875 0 0 0 3.375 5.25v4.125A1.875 1.875 0 0 0 5.25 11.25h4.125a1.875 1.875 0 0 0 1.875-1.875V5.25a1.875 1.875 0 0 0-1.875-1.875ZM9 9H5.625V5.625H9V9Zm9.75-5.625h-4.125A1.875 1.875 0 0 0 12.75 5.25v4.125a1.875 1.875 0 0 0 1.875 1.875h4.125a1.875 1.875 0 0 0 1.875-1.875V5.25a1.875 1.875 0 0 0-1.875-1.875ZM18.375 9H15V5.625h3.375V9Zm-9 3.75H5.25a1.875 1.875 0 0 0-1.875 1.875v4.125a1.875 1.875 0 0 0 1.875 1.875h4.125a1.875 1.875 0 0 0 1.875-1.875v-4.125a1.875 1.875 0 0 0-1.875-1.875ZM9 18.375H5.625V15H9v3.375Zm9.75-5.625h-4.125a1.875 1.875 0 0 0-1.875 1.875v4.125a1.875 1.875 0 0 0 1.875 1.875h4.125a1.875 1.875 0 0 0 1.875-1.875v-4.125a1.875 1.875 0 0 0-1.875-1.875Zm-.375 5.625H15V15h3.375v3.375Z'
    />{' '}
  </svg>
);

export default SquaresFour;
