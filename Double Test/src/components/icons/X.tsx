'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const X: React.FC<IconProps> = ({
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
      d='M19.546 17.954a1.127 1.127 0 1 1-1.594 1.594L12 13.594l-5.954 5.952a1.127 1.127 0 0 1-1.594-1.594L10.406 12 4.454 6.046a1.127 1.127 0 1 1 1.594-1.594L12 10.406l5.954-5.955a1.127 1.127 0 1 1 1.594 1.594L13.594 12l5.952 5.954Z'
    />{' '}
  </svg>
);

export default X;
