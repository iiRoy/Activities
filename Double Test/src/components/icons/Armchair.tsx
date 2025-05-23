'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Armchair: React.FC<IconProps> = ({
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
        d='M20.625 7.362V6.75A4.13 4.13 0 0 0 16.5 2.625h-9A4.13 4.13 0 0 0 3.375 6.75v.612a4.875 4.875 0 0 0 0 9.281v2.107a1.875 1.875 0 0 0 1.875 1.875h13.5a1.875 1.875 0 0 0 1.875-1.875v-2.108a4.875 4.875 0 0 0 0-9.282v.002ZM7.5 4.875h9a1.875 1.875 0 0 1 1.875 1.875v.433a4.883 4.883 0 0 0-4.11 4.442h-4.53a4.883 4.883 0 0 0-4.11-4.442V6.75A1.875 1.875 0 0 1 7.5 4.875Zm11.888 9.737a1.125 1.125 0 0 0-1.013 1.12v2.643H5.625v-2.644a1.125 1.125 0 0 0-1.013-1.12A2.625 2.625 0 1 1 7.5 12v3.375a1.125 1.125 0 0 0 2.25 0v-1.5h4.5v1.5a1.125 1.125 0 1 0 2.25 0V12a2.625 2.625 0 1 1 2.888 2.612Z'
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

export default Armchair;
