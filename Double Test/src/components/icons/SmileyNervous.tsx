'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const SmileyNervous: React.FC<IconProps> = ({
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
      d='M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875Zm0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875Zm-4.875-9.75a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6.75 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm2.899 6.088a1.125 1.125 0 0 1-1.573.236 3.583 3.583 0 0 1-.726-.774 3.288 3.288 0 0 0-.225-.281c-.08.09-.155.183-.225.281-.338.45-.9 1.2-2.025 1.2s-1.688-.75-2.025-1.2a3.297 3.297 0 0 0-.225-.281c-.08.09-.155.183-.225.281a3.582 3.582 0 0 1-.726.774 1.126 1.126 0 0 1-1.337-1.809 2.14 2.14 0 0 0 .263-.315c.338-.45.9-1.2 2.025-1.2s1.688.75 2.025 1.2c.07.098.145.192.225.281.08-.09.155-.183.225-.281.338-.45.9-1.2 2.025-1.2s1.688.75 2.025 1.2c.078.113.166.219.263.315a1.125 1.125 0 0 1 .236 1.573Z'
    />{' '}
  </svg>
);

export default SmileyNervous;
