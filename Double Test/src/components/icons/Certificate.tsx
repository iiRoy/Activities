'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Certificate: React.FC<IconProps> = ({
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
      d='M12 13.125a1.125 1.125 0 0 1-1.125 1.125H6.75a1.125 1.125 0 1 1 0-2.25h4.125A1.125 1.125 0 0 1 12 13.125ZM10.875 8.25H6.75a1.125 1.125 0 0 0 0 2.25h4.125a1.125 1.125 0 1 0 0-2.25Zm11.25 7.42v5.705a1.125 1.125 0 0 1-1.683.977l-2.067-1.181-2.063 1.18a1.125 1.125 0 0 1-1.687-.976v-2.25H3.75a1.875 1.875 0 0 1-1.875-1.875v-12A1.875 1.875 0 0 1 3.75 3.375h16.5a1.875 1.875 0 0 1 1.875 1.875v3.08a5.238 5.238 0 0 1 0 7.34Zm-3.75-.67a3 3 0 1 0 0-5.999 3 3 0 0 0 0 5.999Zm-3.75 1.875v-1.206a5.25 5.25 0 0 1 5.25-8.7V5.625H4.125v11.25h10.5Zm5.25 2.561v-2.405a5.238 5.238 0 0 1-3 0v2.405l.942-.538a1.125 1.125 0 0 1 1.116 0l.942.538Z'
    />{' '}
  </svg>
);

export default Certificate;
