'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ChatSlash: React.FC<IconProps> = ({
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
      d='M5.332 2.993A1.125 1.125 0 0 0 3.45 4.151 1.875 1.875 0 0 0 1.875 6v15a1.858 1.858 0 0 0 1.084 1.697 1.867 1.867 0 0 0 1.998-.264l.01-.01 2.952-2.548h9.72l1.031 1.132a1.126 1.126 0 0 0 1.665-1.515L5.332 2.994ZM7.5 17.625c-.27 0-.531.097-.735.274l-2.64 2.279V6.375h1.241l10.227 11.25H7.5ZM22.125 6v10.324a1.125 1.125 0 1 1-2.25 0V6.375h-8.944a1.125 1.125 0 1 1 0-2.25h9.319A1.875 1.875 0 0 1 22.125 6Z'
    />{' '}
  </svg>
);

export default ChatSlash;
