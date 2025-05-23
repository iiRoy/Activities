'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Barbell: React.FC<IconProps> = ({
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
        d='M22.875 10.875V8.25A1.875 1.875 0 0 0 21 6.375h-1.5V6a1.875 1.875 0 0 0-1.875-1.875h-2.25A1.875 1.875 0 0 0 13.5 6v4.875h-3V6a1.875 1.875 0 0 0-1.875-1.875h-2.25A1.875 1.875 0 0 0 4.5 6v.375H3A1.875 1.875 0 0 0 1.125 8.25v2.625a1.125 1.125 0 1 0 0 2.25v2.625A1.875 1.875 0 0 0 3 17.625h1.5V18a1.875 1.875 0 0 0 1.875 1.875h2.25A1.875 1.875 0 0 0 10.5 18v-4.875h3V18a1.875 1.875 0 0 0 1.875 1.875h2.25A1.875 1.875 0 0 0 19.5 18v-.375H21a1.875 1.875 0 0 0 1.875-1.875v-2.625a1.125 1.125 0 1 0 0-2.25Zm-19.5 4.5v-6.75H4.5v6.75H3.375Zm4.875 2.25h-1.5V6.375h1.5v11.25Zm9 0h-1.5V6.375h1.5v11.25Zm3.375-2.25H19.5v-6.75h1.125v6.75Z'
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

export default Barbell;
