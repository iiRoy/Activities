'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const BatteryPlus: React.FC<IconProps> = ({
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
      d='M14.25 12a1.125 1.125 0 0 1-1.125 1.125H12v1.125a1.125 1.125 0 1 1-2.25 0v-1.125H8.625a1.125 1.125 0 1 1 0-2.25H9.75V9.75a1.125 1.125 0 0 1 2.25 0v1.125h1.125A1.125 1.125 0 0 1 14.25 12ZM21 7.5v9a2.625 2.625 0 0 1-2.625 2.625H2.625A2.625 2.625 0 0 1 0 16.5v-9a2.625 2.625 0 0 1 2.625-2.625h15.75A2.625 2.625 0 0 1 21 7.5Zm-2.25 0a.375.375 0 0 0-.375-.375H2.625a.375.375 0 0 0-.375.375v9a.375.375 0 0 0 .375.375h15.75a.375.375 0 0 0 .375-.375v-9Zm4.125 1.125A1.125 1.125 0 0 0 21.75 9.75v4.5a1.125 1.125 0 1 0 2.25 0v-4.5a1.125 1.125 0 0 0-1.125-1.125Z'
    />{' '}
  </svg>
);

export default BatteryPlus;
