'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const InstagramLogo: React.FC<IconProps> = ({
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
      d='M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 6.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Zm4.5-12.375h-9A5.632 5.632 0 0 0 1.875 7.5v9A5.632 5.632 0 0 0 7.5 22.125h9a5.632 5.632 0 0 0 5.625-5.625v-9A5.631 5.631 0 0 0 16.5 1.875ZM19.875 16.5a3.375 3.375 0 0 1-3.375 3.375h-9A3.375 3.375 0 0 1 4.125 16.5v-9A3.375 3.375 0 0 1 7.5 4.125h9A3.375 3.375 0 0 1 19.875 7.5v9Zm-1.5-9.375a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z'
    />{' '}
  </svg>
);

export default InstagramLogo;
