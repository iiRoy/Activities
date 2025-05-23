'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const EnvelopeOpen: React.FC<IconProps> = ({
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
      d='m21.624 8.063-9-6a1.125 1.125 0 0 0-1.248 0l-9 6A1.125 1.125 0 0 0 1.875 9v9.75a1.875 1.875 0 0 0 1.875 1.875h16.5a1.875 1.875 0 0 0 1.875-1.875V9a1.125 1.125 0 0 0-.5-.937ZM8.42 14.25l-4.295 3.03v-6.095L8.42 14.25Zm2.301 1.125h2.558l4.252 3H6.473l4.248-3Zm4.86-1.125 4.294-3.066v6.093L15.58 14.25ZM12 4.352l7.018 4.679-5.742 4.094h-2.552L4.982 9.031 12 4.351Z'
    />{' '}
  </svg>
);

export default EnvelopeOpen;
