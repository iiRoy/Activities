'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const YinYang: React.FC<IconProps> = ({
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
      d='M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875ZM4.125 12A7.883 7.883 0 0 1 12 4.125a3.375 3.375 0 1 1 0 6.75 5.625 5.625 0 0 0-5.513 6.74A7.849 7.849 0 0 1 4.125 12ZM12 19.875a3.375 3.375 0 0 1 0-6.75 5.626 5.626 0 0 0 5.513-6.74A7.87 7.87 0 0 1 12 19.874Zm1.5-3.375a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-3-9a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z'
    />{' '}
  </svg>
);

export default YinYang;
