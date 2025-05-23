'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const TagChevron: React.FC<IconProps> = ({
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
      d='m23.438 11.376-4.28-6.416a1.875 1.875 0 0 0-1.56-.835H3a1.125 1.125 0 0 0-.938 1.75L6.149 12l-4.085 6.126A1.125 1.125 0 0 0 3 19.875h14.599a1.876 1.876 0 0 0 1.56-.835l4.279-6.416a1.126 1.126 0 0 0 0-1.248Zm-6.04 6.249H5.102l3.335-5a1.125 1.125 0 0 0 0-1.25l-3.335-5h12.296L21.148 12l-3.75 5.625Z'
    />{' '}
  </svg>
);

export default TagChevron;
