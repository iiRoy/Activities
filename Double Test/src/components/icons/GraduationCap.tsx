'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const GraduationCap: React.FC<IconProps> = ({
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
      d='m23.419 8.015-10.875-6a1.125 1.125 0 0 0-1.088 0l-10.875 6a1.125 1.125 0 0 0 0 1.968l2.044 1.125v4.478c0 .46.17.906.477 1.249 1.27 1.418 4.117 3.79 8.898 3.79 1.27.007 2.534-.175 3.75-.539V22.5a1.125 1.125 0 1 0 2.25 0v-3.364a11.208 11.208 0 0 0 2.898-2.297c.308-.343.478-.788.477-1.25v-4.477l2.044-1.125a1.124 1.124 0 0 0 0-1.969v-.003ZM12 4.285 20.546 9l-3.108 1.716a.17.17 0 0 1-.017-.012l-4.875-2.69a1.125 1.125 0 0 0-1.088 1.97l3.656 2.014L12 13.716 3.454 9 12 4.285Zm0 14.09c-3.79 0-6.06-1.788-7.125-2.931V12.35l6.581 3.632a1.125 1.125 0 0 0 1.088 0l3.206-1.766v3.49c-1.198.453-2.47.68-3.75.669Zm7.125-2.931c-.345.37-.721.708-1.125 1.013v-3.483l1.125-.62v3.09Z'
    />{' '}
  </svg>
);

export default GraduationCap;
