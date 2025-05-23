'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const BluetoothConnected: React.FC<IconProps> = ({
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
      d='m18.675 15.6-4.8-3.6 4.8-3.6a1.125 1.125 0 0 0 0-1.8l-6-4.5a1.125 1.125 0 0 0-1.8.9v6.75l-4.2-3.15a1.125 1.125 0 1 0-1.35 1.8l4.8 3.6-4.8 3.6a1.125 1.125 0 1 0 1.35 1.8l4.2-3.15V21a1.125 1.125 0 0 0 1.8.9l6-4.5a1.125 1.125 0 0 0 0-1.8Zm-5.55-10.35 3 2.25-3 2.25v-4.5Zm0 13.5v-4.5l3 2.25-3 2.25ZM5.25 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM21 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z'
    />{' '}
  </svg>
);

export default BluetoothConnected;
