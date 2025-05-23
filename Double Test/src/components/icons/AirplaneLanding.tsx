'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const AirplaneLanding: React.FC<IconProps> = ({
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
        d='M24 20.25a1.125 1.125 0 0 1-1.125 1.125H9.75a1.125 1.125 0 1 1 0-2.25h13.125A1.125 1.125 0 0 1 24 20.25Zm-2.554-2.292L4.888 13.32a4.137 4.137 0 0 1-3.013-3.972V4.5a1.875 1.875 0 0 1 2.468-1.781l.513.171a1.125 1.125 0 0 1 .702.685l.93 2.574 2.137.61V4.5a1.875 1.875 0 0 1 2.467-1.781l.514.171a1.125 1.125 0 0 1 .682.632l2.039 4.861 5.531 1.546a4.136 4.136 0 0 1 3.017 3.976v2.97a1.126 1.126 0 0 1-1.429 1.083Zm-.821-4.053a1.88 1.88 0 0 0-1.373-1.807l-6.055-1.692a1.126 1.126 0 0 1-.735-.648l-1.587-3.785V8.25a1.125 1.125 0 0 1-1.433 1.082L5.317 8.156a1.125 1.125 0 0 1-.75-.7l-.442-1.223v3.116a1.882 1.882 0 0 0 1.37 1.807l15.13 4.236v-1.487Z'
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

export default AirplaneLanding;
