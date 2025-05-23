'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const WifiHigh: React.FC<IconProps> = ({
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
      d='M13.5 19.125a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm8.963-11.258a16.5 16.5 0 0 0-20.926 0 1.125 1.125 0 1 0 1.427 1.739 14.25 14.25 0 0 1 18.072 0 1.125 1.125 0 1 0 1.427-1.74Zm-3.015 3.35a12 12 0 0 0-14.896 0 1.125 1.125 0 0 0 1.396 1.763 9.75 9.75 0 0 1 12.104 0 1.124 1.124 0 0 0 1.396-1.764Zm-3.035 3.342a7.505 7.505 0 0 0-8.826 0 1.125 1.125 0 0 0 1.326 1.82 5.25 5.25 0 0 1 6.174 0 1.126 1.126 0 0 0 1.326-1.82Z'
    />{' '}
  </svg>
);

export default WifiHigh;
