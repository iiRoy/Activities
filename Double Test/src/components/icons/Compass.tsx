'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Compass: React.FC<IconProps> = ({
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
      d='M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875Zm0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875Zm3.307-12.656-5.25 2.25a1.125 1.125 0 0 0-.591.59l-2.25 5.25a1.125 1.125 0 0 0 1.477 1.472l5.25-2.25c.266-.114.477-.325.591-.59l2.25-5.25a1.125 1.125 0 0 0-1.477-1.472Zm-2.664 5.427-2.25.965.965-2.25 2.25-.965-.965 2.25Z'
    />{' '}
  </svg>
);

export default Compass;
