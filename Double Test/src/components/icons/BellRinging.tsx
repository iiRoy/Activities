'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const BellRinging: React.FC<IconProps> = ({
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
      d='M21.17 6.998a1.125 1.125 0 0 1-1.517-.48 8.446 8.446 0 0 0-3-3.316 1.125 1.125 0 1 1 1.2-1.903 10.804 10.804 0 0 1 3.8 4.183 1.125 1.125 0 0 1-.483 1.516Zm-16.823-.48a8.447 8.447 0 0 1 3-3.316A1.125 1.125 0 1 0 6.15 1.299a10.805 10.805 0 0 0-3.8 4.183 1.125 1.125 0 0 0 1.997 1.036Zm16.267 9.22a1.875 1.875 0 0 1-1.489 3.012h-3.018a4.125 4.125 0 0 1-8.214 0H4.875a1.875 1.875 0 0 1-1.492-3.011c.673-.875 1.475-2.496 1.49-5.245a7.126 7.126 0 1 1 14.252.006c.014 2.743.817 4.364 1.489 5.239Zm-6.777 3.012h-3.675a1.875 1.875 0 0 0 3.675 0Zm4.57-2.25c-.765-1.219-1.518-3.147-1.532-5.994a4.875 4.875 0 0 0-9.75-.006c-.014 2.852-.767 4.781-1.532 6h12.814Z'
    />{' '}
  </svg>
);

export default BellRinging;
