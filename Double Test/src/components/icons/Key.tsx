'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Key: React.FC<IconProps> = ({
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
      d='M18.375 7.125a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm4.5 2.132a7.903 7.903 0 0 1-7.865 7.618H15a7.827 7.827 0 0 1-2.217-.317l-.737.738a1.125 1.125 0 0 1-.796.329h-1.125v1.125A1.125 1.125 0 0 1 9 19.875H7.875V21a1.125 1.125 0 0 1-1.125 1.125h-3a1.875 1.875 0 0 1-1.875-1.875v-2.69a1.861 1.861 0 0 1 .55-1.325l5.017-5.018a7.875 7.875 0 1 1 15.433-1.96Zm-3.897-4.235a5.576 5.576 0 0 0-4.166-1.647c-3 .094-5.437 2.615-5.437 5.615a5.595 5.595 0 0 0 .394 2.08 1.125 1.125 0 0 1-.24 1.239l-5.404 5.41v2.156h1.5V18.75a1.125 1.125 0 0 1 1.125-1.125h1.125V16.5A1.125 1.125 0 0 1 9 15.375h1.781l.905-.905a1.125 1.125 0 0 1 1.24-.239 5.58 5.58 0 0 0 2.074.394h.008c3 0 5.519-2.444 5.614-5.437a5.582 5.582 0 0 0-1.644-4.166Z'
    />{' '}
  </svg>
);

export default Key;
