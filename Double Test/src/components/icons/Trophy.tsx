'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Trophy: React.FC<IconProps> = ({
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
      d='M21.75 5.625h-1.875V4.5a1.125 1.125 0 0 0-1.125-1.125H5.25A1.125 1.125 0 0 0 4.125 4.5v1.125H2.25A1.875 1.875 0 0 0 .375 7.5V9A4.13 4.13 0 0 0 4.5 13.125h.072a7.891 7.891 0 0 0 6.303 5.17v1.58H9a1.125 1.125 0 1 0 0 2.25h6a1.125 1.125 0 1 0 0-2.25h-1.875v-1.583c2.9-.423 5.3-2.457 6.281-5.167h.094A4.13 4.13 0 0 0 23.625 9V7.5a1.875 1.875 0 0 0-1.875-1.875ZM2.625 9V7.875h1.5V10.5c0 .113 0 .226.008.338A1.875 1.875 0 0 1 2.625 9Zm15 1.416c0 3.124-2.504 5.686-5.582 5.709A5.625 5.625 0 0 1 6.375 10.5V5.625h11.25v4.79ZM21.375 9a1.875 1.875 0 0 1-1.511 1.84 7.94 7.94 0 0 0 .011-.424V7.875h1.5V9Z'
    />{' '}
  </svg>
);

export default Trophy;
