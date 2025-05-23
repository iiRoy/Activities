'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Link: React.FC<IconProps> = ({
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
      d='M10.986 17.694a1.125 1.125 0 0 1 0 1.594l-.48.48a5.46 5.46 0 0 1-3.887 1.607 5.496 5.496 0 0 1-3.887-9.383L5.99 8.736a5.498 5.498 0 0 1 9.24 2.635 1.125 1.125 0 1 1-2.191.51 3.25 3.25 0 0 0-5.458-1.554l-3.258 3.257a3.246 3.246 0 1 0 4.589 4.591l.479-.48a1.124 1.124 0 0 1 1.595 0Zm10.28-13.46a5.498 5.498 0 0 0-7.775 0l-.48.48a1.127 1.127 0 1 0 1.594 1.594l.48-.48a3.248 3.248 0 0 1 4.594 4.593l-3.263 3.253a3.226 3.226 0 0 1-2.296.951 3.246 3.246 0 0 1-3.159-2.505 1.126 1.126 0 0 0-2.192.51 5.497 5.497 0 0 0 5.346 4.245h.005a5.464 5.464 0 0 0 3.888-1.61l3.257-3.258a5.494 5.494 0 0 0 0-7.772Z'
    />{' '}
  </svg>
);

export default Link;
