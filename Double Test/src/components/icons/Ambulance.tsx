'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Ambulance: React.FC<IconProps> = ({
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
      d='M7.5 11.25a1.125 1.125 0 0 1 1.125-1.125h.75v-.75a1.125 1.125 0 0 1 2.25 0v.75h.75a1.125 1.125 0 1 1 0 2.25h-.75v.75a1.125 1.125 0 1 1-2.25 0v-.75h-.75A1.125 1.125 0 0 1 7.5 11.25Zm16.5 0v6a1.875 1.875 0 0 1-1.875 1.875h-.943a3.375 3.375 0 0 1-6.364 0h-4.136a3.375 3.375 0 0 1-6.364 0H3a1.875 1.875 0 0 1-1.875-1.875V6.75A1.875 1.875 0 0 1 3 4.875h14.25A1.125 1.125 0 0 1 18.375 6v.375h2.492a1.865 1.865 0 0 1 1.74 1.178l1.313 3.282c.053.132.08.273.08.415Zm-5.625-2.625v1.5h2.839l-.6-1.5h-2.239Zm-15 8.25h.943a3.375 3.375 0 0 1 6.364 0h4.136a3.405 3.405 0 0 1 1.307-1.68v-8.07H3.375v9.75ZM8.625 18a1.125 1.125 0 1 0-2.25 0 1.125 1.125 0 0 0 2.25 0Zm10.5 0a1.125 1.125 0 1 0-2.25 0 1.125 1.125 0 0 0 2.25 0Zm2.625-1.125v-4.5h-3.375v2.272a3.382 3.382 0 0 1 2.807 2.228h.568Z'
    />{' '}
  </svg>
);

export default Ambulance;
