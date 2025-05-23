'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Shield: React.FC<IconProps> = ({
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
      d='M19.5 3.375h-15A1.875 1.875 0 0 0 2.625 5.25v5.25c0 5.09 2.468 8.177 4.537 9.87 2.223 1.819 4.448 2.438 4.542 2.466.194.052.398.052.592 0 .094-.027 2.319-.647 4.541-2.465 2.07-1.694 4.538-4.781 4.538-9.871V5.25A1.875 1.875 0 0 0 19.5 3.375Zm-.375 7.125c0 3.348-1.227 6.065-3.648 8.077A11.842 11.842 0 0 1 12 20.567a11.83 11.83 0 0 1-3.477-1.99c-2.42-2.012-3.648-4.73-3.648-8.077V5.625h14.25V10.5Z'
    />{' '}
  </svg>
);

export default Shield;
