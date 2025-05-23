'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const CaretDoubleDown: React.FC<IconProps> = ({
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
      d='M20.296 11.954a1.125 1.125 0 0 1 0 1.594l-7.5 7.5a1.125 1.125 0 0 1-1.594 0l-7.5-7.5a1.127 1.127 0 1 1 1.594-1.594L12 18.656l6.704-6.705a1.124 1.124 0 0 1 1.592.003Zm-9.094 1.594a1.125 1.125 0 0 0 1.594 0l7.5-7.5a1.126 1.126 0 0 0-1.228-1.838c-.137.056-.261.14-.366.244L12 11.156 5.296 4.454a1.127 1.127 0 1 0-1.594 1.594l7.5 7.5Z'
    />{' '}
  </svg>
);

export default CaretDoubleDown;
