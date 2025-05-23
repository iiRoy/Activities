'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Flask: React.FC<IconProps> = ({
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
      d='m21.108 18.535-5.733-9.553V4.125h.375a1.125 1.125 0 0 0 0-2.25h-7.5a1.125 1.125 0 0 0 0 2.25h.375v4.857l-5.733 9.553a1.875 1.875 0 0 0 1.608 2.84h15a1.874 1.874 0 0 0 1.608-2.84Zm-7.983-14.41v5.17c0 .203.056.403.16.578l3.294 5.488c-1.012.08-2.358-.123-4.07-.99-1.313-.664-2.575-1.062-3.776-1.196l1.982-3.302c.104-.175.16-.375.16-.579V4.125h2.25Zm-7.963 15 2.244-3.732c1.219-.104 2.59.227 4.09.986 1.838.93 3.398 1.248 4.673 1.248a7.072 7.072 0 0 0 1.654-.19l1.015 1.688H5.162Z'
    />{' '}
  </svg>
);

export default Flask;
