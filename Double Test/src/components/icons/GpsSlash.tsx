'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const GpsSlash: React.FC<IconProps> = ({
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
        d='M23.625 12a1.125 1.125 0 0 1-1.125 1.125h-1.95a8.591 8.591 0 0 1-.333 1.5 1.125 1.125 0 1 1-2.143-.685 6.38 6.38 0 0 0-7.432-8.17 1.125 1.125 0 1 1-.476-2.2 7.95 7.95 0 0 1 .709-.122V1.5a1.125 1.125 0 1 1 2.25 0v1.948a8.645 8.645 0 0 1 7.427 7.427H22.5A1.125 1.125 0 0 1 23.625 12Zm-3.293 7.493a1.126 1.126 0 1 1-1.665 1.514l-1.748-1.923a8.588 8.588 0 0 1-3.794 1.466v1.95a1.125 1.125 0 1 1-2.25 0v-1.948a8.645 8.645 0 0 1-7.427-7.427H1.5a1.125 1.125 0 1 1 0-2.25h1.95a8.659 8.659 0 0 1 1.968-4.446l-1.75-1.922a1.125 1.125 0 1 1 1.664-1.514l12.545 13.799 2.456 2.701ZM15.389 17.4 6.951 8.119a6.375 6.375 0 0 0 8.437 9.281Z'
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

export default GpsSlash;
