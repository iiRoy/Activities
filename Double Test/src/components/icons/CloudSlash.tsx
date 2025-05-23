'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const CloudSlash: React.FC<IconProps> = ({
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
      d='M5.332 2.993a1.125 1.125 0 1 0-1.664 1.514L6.73 7.875a6.375 6.375 0 0 0 .02 12.75H15a8.558 8.558 0 0 0 2.874-.491l.794.873a1.125 1.125 0 0 0 1.665-1.514l-15-16.5ZM15 18.375H6.75a4.125 4.125 0 0 1-.169-8.245A8.616 8.616 0 0 0 6.375 12a1.125 1.125 0 1 0 2.25 0c0-.598.084-1.192.25-1.766l7.3 8.031a6.44 6.44 0 0 1-1.175.11ZM23.625 12a8.56 8.56 0 0 1-1.643 5.063A1.127 1.127 0 0 1 20.099 17a1.124 1.124 0 0 1 .063-1.26 6.375 6.375 0 0 0-8.397-9.237 1.125 1.125 0 0 1-1.144-1.937A8.625 8.625 0 0 1 23.625 12Z'
    />{' '}
  </svg>
);

export default CloudSlash;
