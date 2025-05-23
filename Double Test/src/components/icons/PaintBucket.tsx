'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const PaintBucket: React.FC<IconProps> = ({
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
      d='M22.105 13.395a1.126 1.126 0 0 0 .44-1.863L11.72.705a1.125 1.125 0 0 0-1.594 0l-3.54 3.54-2.04-2.04a1.127 1.127 0 0 0-1.594 1.594l2.044 2.038-3.851 3.852a2.625 2.625 0 0 0 0 3.713L9.1 21.357a2.627 2.627 0 0 0 3.713 0l7.296-7.294 1.997-.668Zm-2.96-1.385a1.124 1.124 0 0 0-.44.272l-7.484 7.484a.374.374 0 0 1-.53 0l-7.956-7.953a.376.376 0 0 1 0-.531l3.85-3.853 2.278 2.277a3 3 0 1 0 1.591-1.591L8.178 5.837l2.746-2.743 8.744 8.745-.523.171Zm-8.05-1.664a.75.75 0 1 1-.006.006l.005-.006ZM24 19.5a2.25 2.25 0 0 1-4.5 0c0-1.823 1.212-3.49 1.35-3.675a1.126 1.126 0 0 1 1.8 0c.138.186 1.35 1.853 1.35 3.675Z'
    />{' '}
  </svg>
);

export default PaintBucket;
