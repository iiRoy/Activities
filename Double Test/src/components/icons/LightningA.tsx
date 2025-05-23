'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const LightningA: React.FC<IconProps> = ({
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
      d='M16.852 10.383a1.125 1.125 0 0 0-.642-.803l-4.398-1.975 1.21-5.095a1.125 1.125 0 0 0-1.92-1.024l-8.928 9.642a1.125 1.125 0 0 0 .365 1.79l4.406 1.977-1.215 5.094a1.125 1.125 0 0 0 1.92 1.025l8.925-9.643a1.124 1.124 0 0 0 .277-.988Zm-7.946 5.959.435-1.832a1.125 1.125 0 0 0-.633-1.287l-3.822-1.715 4.958-5.35-.435 1.832a1.125 1.125 0 0 0 .63 1.291l3.822 1.716-4.955 5.345Zm13.847 3.405-3.375-6.75a1.125 1.125 0 0 0-2.013 0l-3.375 6.75a1.125 1.125 0 1 0 2.012 1.006l.439-.878h3.86l.438.878a1.125 1.125 0 1 0 2.013-1.006h.001Zm-5.183-2.122.805-1.61.804 1.61h-1.61Z'
    />{' '}
  </svg>
);

export default LightningA;
