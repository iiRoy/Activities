'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const FilePdf: React.FC<IconProps> = ({
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
      d='M18.75 15.375v.75h1.125a1.125 1.125 0 1 1 0 2.25H18.75V19.5a1.125 1.125 0 1 1-2.25 0v-5.25a1.125 1.125 0 0 1 1.125-1.125h3a1.125 1.125 0 1 1 0 2.25H18.75Zm-10.125.75a3 3 0 0 1-3 3H5.25v.375a1.125 1.125 0 0 1-2.25 0v-5.25a1.125 1.125 0 0 1 1.125-1.125h1.5a3 3 0 0 1 3 3Zm-2.25 0a.75.75 0 0 0-.75-.75H5.25v1.5h.375a.75.75 0 0 0 .75-.75Zm9.375.75a3.75 3.75 0 0 1-3.75 3.75h-1.5A1.125 1.125 0 0 1 9.375 19.5v-5.25a1.125 1.125 0 0 1 1.125-1.125H12a3.75 3.75 0 0 1 3.75 3.75Zm-2.25 0a1.5 1.5 0 0 0-1.5-1.5h-.375v3H12a1.5 1.5 0 0 0 1.5-1.5Zm-10.125-6.75V3.75A1.875 1.875 0 0 1 5.25 1.875h9a1.125 1.125 0 0 1 .796.33l5.25 5.25c.21.21.329.497.329.795v1.875a1.125 1.125 0 1 1-2.25 0V9.75h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5H5.625v6a1.125 1.125 0 0 1-2.25 0ZM15 5.344V7.5h2.156L15 5.344Z'
    />{' '}
  </svg>
);

export default FilePdf;
