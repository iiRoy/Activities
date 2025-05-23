'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const SpeakerNone: React.FC<IconProps> = ({
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
      d='M14.744 1.99a1.125 1.125 0 0 0-1.185.122L7.114 7.125H3A1.875 1.875 0 0 0 1.125 9v6A1.875 1.875 0 0 0 3 16.875h4.114l6.445 5.013A1.125 1.125 0 0 0 15.375 21V3a1.125 1.125 0 0 0-.63-1.01ZM3.375 9.374h3v5.25h-3v-5.25Zm9.75 9.324-4.5-3.5V8.8l4.5-3.5v13.398Z'
    />{' '}
  </svg>
);

export default SpeakerNone;
