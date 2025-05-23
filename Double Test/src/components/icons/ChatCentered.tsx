'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ChatCentered: React.FC<IconProps> = ({
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
      d='M20.25 3.375H3.75A1.875 1.875 0 0 0 1.875 5.25v12a1.875 1.875 0 0 0 1.875 1.875h5.448l1.174 2.055a1.874 1.874 0 0 0 3.256 0l1.174-2.055h5.448a1.875 1.875 0 0 0 1.875-1.875v-12a1.875 1.875 0 0 0-1.875-1.875Zm-.375 13.5H14.15a1.125 1.125 0 0 0-.977.567L12 19.494l-1.173-2.052a1.125 1.125 0 0 0-.977-.567H4.125V5.625h15.75v11.25Z'
    />{' '}
  </svg>
);

export default ChatCentered;
