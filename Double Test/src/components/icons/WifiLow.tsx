'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const WifiLow: React.FC<IconProps> = ({
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
      d='M13.5 19.125a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm2.912-4.566a7.5 7.5 0 0 0-8.824 0 1.125 1.125 0 0 0 1.325 1.82 5.25 5.25 0 0 1 6.174 0 1.125 1.125 0 0 0 1.325-1.82Z'
    />{' '}
  </svg>
);

export default WifiLow;
