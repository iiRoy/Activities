'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ClockCounterClockwise: React.FC<IconProps> = ({
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
      d='M13.125 7.5v3.863l3.203 1.922a1.123 1.123 0 0 1 .105 1.882 1.124 1.124 0 0 1-1.261.048l-3.75-2.25a1.125 1.125 0 0 1-.547-.965V7.5a1.125 1.125 0 1 1 2.25 0ZM12 2.625a9.317 9.317 0 0 0-6.634 2.75c-.44.445-.843.88-1.241 1.313V6a1.125 1.125 0 0 0-2.25 0v3.75A1.125 1.125 0 0 0 3 10.875h3.75a1.125 1.125 0 1 0 0-2.25H5.416a35.9 35.9 0 0 1 1.546-1.663A7.125 7.125 0 1 1 7.11 17.18a1.125 1.125 0 0 0-1.545 1.636A9.375 9.375 0 1 0 12 2.625Z'
    />{' '}
  </svg>
);

export default ClockCounterClockwise;
