'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const GpsFix: React.FC<IconProps> = ({
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
        d='M22.5 10.875h-1.948a8.645 8.645 0 0 0-7.427-7.427V1.5a1.125 1.125 0 1 0-2.25 0v1.948a8.645 8.645 0 0 0-7.427 7.427H1.5a1.125 1.125 0 1 0 0 2.25h1.948a8.645 8.645 0 0 0 7.427 7.427V22.5a1.125 1.125 0 1 0 2.25 0v-1.948a8.645 8.645 0 0 0 7.427-7.427H22.5a1.125 1.125 0 1 0 0-2.25Zm-10.5 7.5A6.375 6.375 0 1 1 18.375 12 6.381 6.381 0 0 1 12 18.375Zm0-10.5a4.125 4.125 0 1 0 0 8.25 4.125 4.125 0 0 0 0-8.25Zm0 6a1.875 1.875 0 1 1 0-3.75 1.875 1.875 0 0 1 0 3.75Z'
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

export default GpsFix;
