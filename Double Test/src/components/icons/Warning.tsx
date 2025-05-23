'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Warning: React.FC<IconProps> = ({
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
      d='M22.524 17.447 14.326 3.209a2.694 2.694 0 0 0-4.652 0L1.476 17.447a2.573 2.573 0 0 0 0 2.598 2.654 2.654 0 0 0 2.326 1.33h16.396a2.654 2.654 0 0 0 2.677-2.629c0-.456-.12-.905-.35-1.3Zm-1.95 1.472a.418.418 0 0 1-.375.206H3.802a.418.418 0 0 1-.375-.206.334.334 0 0 1 0-.35l8.198-14.238a.447.447 0 0 1 .75 0l8.198 14.238a.334.334 0 0 1 .001.35Zm-9.699-6.169v-3a1.125 1.125 0 1 1 2.25 0v3a1.125 1.125 0 1 1-2.25 0ZM13.5 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z'
    />{' '}
  </svg>
);

export default Warning;
