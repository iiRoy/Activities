'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const UsersFour: React.FC<IconProps> = ({
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
      d='M2.324 11.4a1.125 1.125 0 0 0 1.576-.224 4.5 4.5 0 0 1 7.2 0 1.125 1.125 0 0 0 1.8 0 4.5 4.5 0 0 1 7.2 0 1.123 1.123 0 0 0 1.878-.094 1.124 1.124 0 0 0-.079-1.257 6.75 6.75 0 0 0-2.372-1.99 3.75 3.75 0 1 0-6.054 0A6.658 6.658 0 0 0 12 8.843a6.655 6.655 0 0 0-1.473-1.007 3.75 3.75 0 1 0-6.054 0A6.75 6.75 0 0 0 2.1 9.825a1.125 1.125 0 0 0 .223 1.574ZM16.5 4.124a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-9 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm12.027 14.21a3.75 3.75 0 1 0-6.054 0A6.687 6.687 0 0 0 12 19.34c-.444-.4-.94-.738-1.473-1.006a3.75 3.75 0 1 0-6.054 0 6.751 6.751 0 0 0-2.372 1.99A1.125 1.125 0 0 0 3.9 21.675a4.5 4.5 0 0 1 7.2 0 1.125 1.125 0 0 0 1.8 0 4.5 4.5 0 0 1 7.2 0 1.123 1.123 0 0 0 1.878-.094 1.124 1.124 0 0 0-.079-1.257 6.743 6.743 0 0 0-2.372-1.99ZM7.5 14.625a1.5 1.5 0 1 1 0 2.999 1.5 1.5 0 0 1 0-2.999Zm9 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z'
    />{' '}
  </svg>
);

export default UsersFour;
