'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const NumberSix: React.FC<IconProps> = ({
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
      d='M12 9.375c-.245 0-.49.017-.732.05l2.463-4.373a1.125 1.125 0 1 0-1.962-1.104L7.125 12.2A5.625 5.625 0 1 0 12 9.375Zm0 9a3.375 3.375 0 1 1 0-6.75 3.375 3.375 0 0 1 0 6.75Z'
    />{' '}
  </svg>
);

export default NumberSix;
