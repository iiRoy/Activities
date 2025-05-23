'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const NumberZero: React.FC<IconProps> = ({
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
      d='M17.496 5.723C16.206 3.697 14.308 2.63 12 2.63c-2.308 0-4.206 1.067-5.496 3.093C5.454 7.374 4.875 9.603 4.875 12c0 2.396.578 4.625 1.63 6.276 1.29 2.027 3.19 3.099 5.495 3.099s4.206-1.072 5.496-3.1c1.05-1.65 1.629-3.879 1.629-6.275 0-2.396-.578-4.626-1.63-6.277Zm-1.899 11.344c-.868 1.366-2.078 2.058-3.597 2.058-1.519 0-2.73-.692-3.597-2.057-.824-1.295-1.278-3.095-1.278-5.068 0-1.973.454-3.773 1.278-5.068C9.27 5.567 10.48 4.875 12 4.875c1.519 0 2.73.692 3.597 2.057.824 1.295 1.278 3.1 1.278 5.068 0 1.969-.454 3.773-1.278 5.068Z'
    />{' '}
  </svg>
);

export default NumberZero;
