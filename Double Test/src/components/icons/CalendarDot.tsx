'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const CalendarDot: React.FC<IconProps> = ({
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
      d='M13.875 14.25a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm7.5-9.75v15a1.875 1.875 0 0 1-1.875 1.875h-15A1.875 1.875 0 0 1 2.625 19.5v-15A1.875 1.875 0 0 1 4.5 2.625h1.875V2.25a1.125 1.125 0 0 1 2.25 0v.375h6.75V2.25a1.125 1.125 0 1 1 2.25 0v.375H19.5A1.875 1.875 0 0 1 21.375 4.5Zm-16.5.375v2.25h14.25v-2.25h-1.5a1.125 1.125 0 1 1-2.25 0h-6.75a1.125 1.125 0 0 1-2.25 0h-1.5Zm14.25 14.25v-9.75H4.875v9.75h14.25Z'
    />{' '}
  </svg>
);

export default CalendarDot;
