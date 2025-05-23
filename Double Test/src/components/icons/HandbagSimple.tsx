'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const HandbagSimple: React.FC<IconProps> = ({
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
      d='M22.862 18.53 21.526 7.28a1.88 1.88 0 0 0-1.87-1.655H16.86a4.875 4.875 0 0 0-9.718 0H4.343A1.88 1.88 0 0 0 2.474 7.28L1.138 18.53a1.875 1.875 0 0 0 1.87 2.095h17.985a1.876 1.876 0 0 0 1.869-2.095ZM12 3.375a2.625 2.625 0 0 1 2.598 2.25H9.402A2.625 2.625 0 0 1 12 3.375Zm-8.578 15 1.248-10.5h14.66l1.248 10.5H3.422Z'
    />{' '}
  </svg>
);

export default HandbagSimple;
