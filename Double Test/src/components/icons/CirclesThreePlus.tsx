'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const CirclesThreePlus: React.FC<IconProps> = ({
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
      d='M7.313 3.375a3.938 3.938 0 1 0 0 7.875 3.938 3.938 0 0 0 0-7.875Zm0 5.625a1.688 1.688 0 1 1 0-3.375 1.688 1.688 0 0 1 0 3.375Zm9.375 2.25a3.937 3.937 0 1 0 0-7.875 3.937 3.937 0 0 0 0 7.875Zm0-5.625a1.687 1.687 0 1 1 0 3.375 1.687 1.687 0 0 1 0-3.375ZM7.313 12.75a3.937 3.937 0 1 0 0 7.874 3.937 3.937 0 0 0 0-7.874Zm0 5.625a1.688 1.688 0 1 1 0-3.375 1.688 1.688 0 0 1 0 3.375Zm13.312-1.688a1.125 1.125 0 0 1-1.125 1.125h-1.688V19.5a1.125 1.125 0 1 1-2.25 0v-1.688h-1.687a1.125 1.125 0 1 1 0-2.25h1.688v-1.687a1.125 1.125 0 1 1 2.25 0v1.688H19.5a1.125 1.125 0 0 1 1.125 1.124Z'
    />{' '}
  </svg>
);

export default CirclesThreePlus;
