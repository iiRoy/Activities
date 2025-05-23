'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const AlignTop: React.FC<IconProps> = ({
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
      d='M21.375 3.75a1.125 1.125 0 0 1-1.125 1.125H3.75a1.125 1.125 0 0 1 0-2.25h16.5a1.125 1.125 0 0 1 1.125 1.125Zm-1.5 4.5v8.25A1.875 1.875 0 0 1 18 18.375h-3.375A1.875 1.875 0 0 1 12.75 16.5V8.25a1.875 1.875 0 0 1 1.875-1.875H18a1.875 1.875 0 0 1 1.875 1.875Zm-2.25.375H15v7.5h2.625v-7.5ZM11.25 8.25v12a1.875 1.875 0 0 1-1.875 1.875H6a1.875 1.875 0 0 1-1.875-1.875v-12A1.875 1.875 0 0 1 6 6.375h3.375A1.875 1.875 0 0 1 11.25 8.25ZM9 8.625H6.375v11.25H9V8.625Z'
    />{' '}
  </svg>
);

export default AlignTop;
