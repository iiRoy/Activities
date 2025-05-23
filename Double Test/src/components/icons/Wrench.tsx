'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Wrench: React.FC<IconProps> = ({
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
      d='M21.607 6.328a1.125 1.125 0 0 0-1.806-.405l-3.636 3.358-1.188-.255-.258-1.191 3.355-3.636a1.126 1.126 0 0 0-.405-1.806 7.132 7.132 0 0 0-9.38 9.01l-5.39 4.926a3.375 3.375 0 0 0 4.736 4.808l.036-.036 4.925-5.39a7.13 7.13 0 0 0 9.01-9.383ZM15 13.875a4.827 4.827 0 0 1-2.19-.518 1.126 1.126 0 0 0-1.336.246L6.03 19.562a1.127 1.127 0 1 1-1.594-1.594l5.958-5.444a1.125 1.125 0 0 0 .246-1.337A4.88 4.88 0 0 1 15 4.125h.083l-2.41 2.613a1.125 1.125 0 0 0-.274.998l.531 2.47a1.125 1.125 0 0 0 .863.864l2.47.53a1.125 1.125 0 0 0 1-.272l2.612-2.41V9A4.88 4.88 0 0 1 15 13.875Z'
    />{' '}
  </svg>
);

export default Wrench;
