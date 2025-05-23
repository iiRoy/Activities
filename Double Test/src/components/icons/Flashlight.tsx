'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Flashlight: React.FC<IconProps> = ({
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
      d='M17.25 1.125H6.75A1.875 1.875 0 0 0 4.875 3v4.25c0 .405.132.8.375 1.125l1.875 2.5V21A1.875 1.875 0 0 0 9 22.875h6A1.875 1.875 0 0 0 16.875 21V10.875l1.875-2.5c.243-.325.374-.72.375-1.125V3a1.875 1.875 0 0 0-1.875-1.875Zm-.375 2.25v1.5h-9.75v-1.5h9.75ZM15 9.625c-.243.325-.374.72-.375 1.125v9.875h-5.25V10.75c0-.405-.132-.8-.375-1.125l-1.875-2.5h9.75L15 9.625Zm-1.875 1.625v3a1.125 1.125 0 1 1-2.25 0v-3a1.125 1.125 0 1 1 2.25 0Z'
    />{' '}
  </svg>
);

export default Flashlight;
