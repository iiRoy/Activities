'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Grains: React.FC<IconProps> = ({
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
      d='M19.5 4.875c-.954 0-1.901.158-2.803.469-1.443-2.696-4.069-4.037-4.194-4.099a1.125 1.125 0 0 0-1.006 0c-.125.062-2.751 1.406-4.195 4.099A8.585 8.585 0 0 0 4.5 4.875 1.125 1.125 0 0 0 3.375 6v7.5a8.625 8.625 0 1 0 17.25 0V6A1.125 1.125 0 0 0 19.5 4.875ZM5.625 7.225a6.39 6.39 0 0 1 5.224 5.693 8.615 8.615 0 0 0-5.224-2.719V7.224Zm5.25 12.55a6.387 6.387 0 0 1-5.25-6.275v-1.026a6.386 6.386 0 0 1 5.25 6.276v1.026ZM9.315 6.349c.77-1.4 2-2.344 2.685-2.791.686.449 1.915 1.39 2.684 2.79A8.69 8.69 0 0 0 12 9.246a8.7 8.7 0 0 0-2.684-2.897Zm9.06 7.152a6.386 6.386 0 0 1-5.25 6.276V18.75a6.386 6.386 0 0 1 5.25-6.276V13.5Zm0-3.302a8.615 8.615 0 0 0-5.224 2.719 6.39 6.39 0 0 1 5.224-5.693v2.974Z'
    />{' '}
  </svg>
);

export default Grains;
