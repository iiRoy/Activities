'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ClockCountdown: React.FC<IconProps> = ({
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
      d='M22.125 12.844A10.137 10.137 0 1 1 11.156 1.875a1.129 1.129 0 1 1 .188 2.25 7.886 7.886 0 1 0 8.531 8.531 1.128 1.128 0 1 1 2.25.188Zm-11.25-5.719V12A1.125 1.125 0 0 0 12 13.125h4.875a1.125 1.125 0 1 0 0-2.25h-3.75v-3.75a1.125 1.125 0 1 0-2.25 0ZM19.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-3-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'
    />{' '}
  </svg>
);

export default ClockCountdown;
