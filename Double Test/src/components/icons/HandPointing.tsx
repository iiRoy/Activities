'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const HandPointing: React.FC<IconProps> = ({
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
      d='M18.375 7.875a2.995 2.995 0 0 0-1.052.188 3 3 0 0 0-3.448-1.594V4.125a3 3 0 0 0-6 0v6.265a3 3 0 0 0-4.852 3.485l.44.773c3.204 5.647 4.667 8.227 9.287 8.227a8.635 8.635 0 0 0 8.625-8.625v-3.375a3 3 0 0 0-3-3Zm.75 6.375a6.383 6.383 0 0 1-6.375 6.375c-3.188 0-4.077-1.355-7.331-7.092l-.44-.776v-.007a.75.75 0 1 1 1.3-.75l.018.033 1.751 2.812a1.125 1.125 0 0 0 2.077-.595V4.125a.75.75 0 1 1 1.5 0V10.5a1.125 1.125 0 1 0 2.25 0V9.375a.75.75 0 1 1 1.5 0v1.875a1.125 1.125 0 1 0 2.25 0v-.375a.75.75 0 1 1 1.5 0v3.375Z'
    />{' '}
  </svg>
);

export default HandPointing;
