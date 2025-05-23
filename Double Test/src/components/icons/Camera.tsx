'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Camera: React.FC<IconProps> = ({
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
      d='M19.5 4.875h-2.398l-1.165-1.75a1.125 1.125 0 0 0-.937-.5H9a1.125 1.125 0 0 0-.938.5l-1.165 1.75H4.5A2.625 2.625 0 0 0 1.875 7.5V18A2.625 2.625 0 0 0 4.5 20.625h15A2.625 2.625 0 0 0 22.125 18V7.5A2.625 2.625 0 0 0 19.5 4.875ZM19.875 18a.375.375 0 0 1-.375.375h-15A.375.375 0 0 1 4.125 18V7.5a.375.375 0 0 1 .375-.375h3a1.125 1.125 0 0 0 .938-.5l1.164-1.75h4.795l1.165 1.75a1.125 1.125 0 0 0 .938.5h3a.375.375 0 0 1 .375.375V18ZM12 7.875a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 6.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z'
    />{' '}
  </svg>
);

export default Camera;
