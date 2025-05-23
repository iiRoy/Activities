'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Browsers: React.FC<IconProps> = ({
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
      d='M20.625 3h-13.5A1.875 1.875 0 0 0 5.25 4.875V6.75H3.375A1.875 1.875 0 0 0 1.5 8.625v10.5A1.875 1.875 0 0 0 3.375 21h13.5a1.875 1.875 0 0 0 1.875-1.875V17.25h1.875a1.875 1.875 0 0 0 1.875-1.875v-10.5A1.875 1.875 0 0 0 20.625 3ZM16.5 9v1.5H3.75V9H16.5Zm0 9.75H3.75v-6H16.5v6ZM20.25 15h-1.5V8.625a1.875 1.875 0 0 0-1.875-1.875H7.5v-1.5h12.75V15Z'
    />{' '}
  </svg>
);

export default Browsers;
