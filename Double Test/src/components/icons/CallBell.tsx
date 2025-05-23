'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const CallBell: React.FC<IconProps> = ({
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
      d='M2.25 16.875h19.5a1.125 1.125 0 1 0 0-2.25h-.383a9.39 9.39 0 0 0-8.242-8.933V4.125h1.125a1.125 1.125 0 0 0 0-2.25h-4.5a1.125 1.125 0 0 0 0 2.25h1.125v1.567a9.39 9.39 0 0 0-8.242 8.933H2.25a1.125 1.125 0 1 0 0 2.25Zm9.75-9a7.133 7.133 0 0 1 7.115 6.75H4.885A7.134 7.134 0 0 1 12 7.875ZM22.875 19.5a1.125 1.125 0 0 1-1.125 1.125H2.25a1.125 1.125 0 1 1 0-2.25h19.5a1.125 1.125 0 0 1 1.125 1.125Z'
    />{' '}
  </svg>
);

export default CallBell;
