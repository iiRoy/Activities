'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const TriangleDashed: React.FC<IconProps> = ({
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
      d='M15.375 20.25a1.125 1.125 0 0 1-1.125 1.125h-4.5a1.125 1.125 0 1 1 0-2.25h4.5a1.125 1.125 0 0 1 1.125 1.125Zm7.15-2.803-.438-.76a1.125 1.125 0 0 0-1.949 1.125l.436.758a.334.334 0 0 1 0 .35.418.418 0 0 1-.375.206H18a1.125 1.125 0 1 0 0 2.25h2.2a2.654 2.654 0 0 0 2.676-2.63c0-.456-.121-.905-.352-1.3ZM6 19.125H3.802a.418.418 0 0 1-.375-.206.334.334 0 0 1 0-.35l.435-.756a1.125 1.125 0 1 0-1.95-1.125l-.436.758a2.575 2.575 0 0 0 0 2.598 2.655 2.655 0 0 0 2.326 1.331H6a1.125 1.125 0 1 0 0-2.25Zm12.953-4.5a1.124 1.124 0 0 0 .974-1.688l-2.156-3.75a1.127 1.127 0 0 0-1.95 1.126l2.156 3.75a1.126 1.126 0 0 0 .977.562ZM15.61 5.438l-1.283-2.229a2.694 2.694 0 0 0-4.652 0L8.391 5.438a1.125 1.125 0 0 0 1.949 1.125l1.285-2.232a.446.446 0 0 1 .75 0l1.285 2.232a1.125 1.125 0 0 0 1.95-1.125ZM7.767 8.775a1.125 1.125 0 0 0-1.536.413l-2.157 3.75a1.126 1.126 0 0 0 1.95 1.124l2.157-3.75a1.124 1.124 0 0 0-.414-1.537Z'
    />{' '}
  </svg>
);

export default TriangleDashed;
