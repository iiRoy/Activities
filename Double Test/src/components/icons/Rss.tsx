'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Rss: React.FC<IconProps> = ({
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
      d='M10.288 13.712a7.082 7.082 0 0 1 2.087 5.038 1.125 1.125 0 0 1-2.25 0 4.875 4.875 0 0 0-4.875-4.875 1.125 1.125 0 0 1 0-2.25 7.078 7.078 0 0 1 5.038 2.087ZM5.25 7.125a1.125 1.125 0 0 0 0 2.25 9.375 9.375 0 0 1 9.375 9.375 1.125 1.125 0 0 0 2.25 0A11.625 11.625 0 0 0 5.25 7.125Zm11.402.223A16.017 16.017 0 0 0 5.25 2.625a1.125 1.125 0 0 0 0 2.25 13.781 13.781 0 0 1 9.81 4.064 13.782 13.782 0 0 1 4.065 9.811 1.125 1.125 0 0 0 2.25 0 16.016 16.016 0 0 0-4.723-11.402ZM5.625 16.875a1.5 1.5 0 1 0 0 2.999 1.5 1.5 0 0 0 0-2.999Z'
    />{' '}
  </svg>
);

export default Rss;
