'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const HandSwipeRight: React.FC<IconProps> = ({
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
    <g clip-path='url(#a)'>
      {' '}
      <path
        stroke={strokeColor}
        fill={fillColor}
        strokeWidth={strokeWidth}
        vectorEffect='non-scaling-stroke'
        d='M20.625 13.875v3.375c0 1.298-.153 2.486-.43 3.345a1.125 1.125 0 0 1-2.14-.69c.2-.623.32-1.616.32-2.655v-3.375a.75.75 0 1 0-1.5 0v.375a1.125 1.125 0 0 1-2.25 0v-1.875a.75.75 0 1 0-1.5 0V13.5a1.125 1.125 0 0 1-2.25 0V7.125a.75.75 0 1 0-1.5 0V17.25a1.125 1.125 0 0 1-2.08.594l-1.75-2.812-.02-.032a.751.751 0 1 0-1.306.742l2.369 3.927A1.125 1.125 0 0 1 4.66 20.83l-2.373-3.937-.01-.019a3 3 0 0 1 4.848-3.484V7.125a3 3 0 1 1 6 0v2.344a3 3 0 0 1 3.448 1.594 3 3 0 0 1 4.052 2.812Zm3.045-9.421-3-3a1.127 1.127 0 1 0-1.594 1.594l1.08 1.077h-4.031a1.125 1.125 0 1 0 0 2.25h4.031L19.08 7.454a1.126 1.126 0 0 0 1.228 1.838c.137-.057.261-.14.366-.244l3-3a1.124 1.124 0 0 0-.003-1.594Z'
      />{' '}
    </g>{' '}
    <defs>
      {' '}
      <clipPath id='a'>
        {' '}
        <path
          stroke={strokeColor}
          fill={fillColor}
          strokeWidth={strokeWidth}
          vectorEffect='non-scaling-stroke'
          d='M0 0h24v24H0z'
        />{' '}
      </clipPath>{' '}
    </defs>{' '}
  </svg>
);

export default HandSwipeRight;
