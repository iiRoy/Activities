'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Barn: React.FC<IconProps> = ({
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
      d='M9.375 7.875A1.125 1.125 0 0 1 10.5 6.75h3a1.125 1.125 0 0 1 0 2.25h-3a1.125 1.125 0 0 1-1.125-1.125Zm14.25 10.875a1.125 1.125 0 0 1-1.125 1.125h-21a1.125 1.125 0 1 1 0-2.25h.375V13.06a1.125 1.125 0 0 1-1.29-1.716l3.75-5.25c.075-.106.169-.198.276-.272l6.333-4.374.016-.01a1.87 1.87 0 0 1 2.08 0l.016.01 6.333 4.374c.107.074.2.166.276.272l3.75 5.25a1.126 1.126 0 0 1-1.29 1.716v4.565h.375a1.125 1.125 0 0 1 1.125 1.125Zm-19.5-1.125H6v-6A1.125 1.125 0 0 1 7.125 10.5h9.75A1.125 1.125 0 0 1 18 11.625v6h1.875v-7.364l-1.927-2.696L12 3.457 6.052 7.565 4.125 10.26v7.364ZM15.75 12.75h-5.072l5.072 3.57v-3.57Zm-7.5 4.875h5.447L8.25 13.793v3.832Z'
    />{' '}
  </svg>
);

export default Barn;
