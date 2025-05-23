'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const AlignLeft: React.FC<IconProps> = ({
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
      d='M4.875 3.75v16.5a1.125 1.125 0 0 1-2.25 0V3.75a1.125 1.125 0 0 1 2.25 0Zm1.5 5.625V6A1.875 1.875 0 0 1 8.25 4.125h8.25A1.875 1.875 0 0 1 18.375 6v3.375A1.875 1.875 0 0 1 16.5 11.25H8.25a1.875 1.875 0 0 1-1.875-1.875ZM8.625 9h7.5V6.375h-7.5V9Zm13.5 5.625V18a1.875 1.875 0 0 1-1.875 1.875h-12A1.875 1.875 0 0 1 6.375 18v-3.375A1.875 1.875 0 0 1 8.25 12.75h12a1.875 1.875 0 0 1 1.875 1.875Zm-2.25.375H8.625v2.625h11.25V15Z'
    />{' '}
  </svg>
);

export default AlignLeft;
