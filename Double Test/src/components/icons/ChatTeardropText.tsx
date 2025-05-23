'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ChatTeardropText: React.FC<IconProps> = ({
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
      d='M16.5 10.125a1.125 1.125 0 0 1-1.125 1.125H9A1.125 1.125 0 1 1 9 9h6.375a1.125 1.125 0 0 1 1.125 1.125Zm-1.125 2.625H9A1.125 1.125 0 1 0 9 15h6.375a1.125 1.125 0 1 0 0-2.25Zm6.75-1.125a9.76 9.76 0 0 1-9.75 9.75H4.5A1.875 1.875 0 0 1 2.625 19.5v-7.875a9.75 9.75 0 0 1 19.5 0Zm-2.25 0a7.5 7.5 0 0 0-15 0v7.5h7.5a7.508 7.508 0 0 0 7.5-7.5Z'
    />{' '}
  </svg>
);

export default ChatTeardropText;
