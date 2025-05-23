'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const BracketsAngle: React.FC<IconProps> = ({
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
      d='M8.449 4.354 3.583 12l4.866 7.646a1.125 1.125 0 1 1-1.898 1.208l-5.25-8.25a1.125 1.125 0 0 1 0-1.208l5.25-8.25A1.125 1.125 0 0 1 8.45 4.354Zm14.25 7.042-5.25-8.25a1.124 1.124 0 1 0-1.898 1.208L20.417 12l-4.866 7.646a1.124 1.124 0 1 0 1.898 1.208l5.25-8.25a1.125 1.125 0 0 0 0-1.208Z'
    />{' '}
  </svg>
);

export default BracketsAngle;
