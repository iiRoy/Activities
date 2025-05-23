'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ChatCircle: React.FC<IconProps> = ({
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
      d='M12 1.875a10.125 10.125 0 0 0-9.014 14.74l-1.017 3.04a1.875 1.875 0 0 0 2.375 2.376l3.04-1.013A10.125 10.125 0 1 0 12 1.875Zm0 18a7.875 7.875 0 0 1-3.943-1.057 1.125 1.125 0 0 0-.919-.093l-2.793.93.931-2.792a1.125 1.125 0 0 0-.093-.92A7.875 7.875 0 1 1 12 19.875Z'
    />{' '}
  </svg>
);

export default ChatCircle;
