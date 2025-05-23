'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ChatCircleSlash: React.FC<IconProps> = ({
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
      d='M5.332 2.993a1.125 1.125 0 1 0-1.664 1.514l.732.805a10.125 10.125 0 0 0-1.414 11.303l-1.017 3.04a1.875 1.875 0 0 0 2.375 2.376l3.04-1.013a10.133 10.133 0 0 0 10.552-.812l.732.804a1.125 1.125 0 0 0 1.665-1.513l-15-16.504ZM12 19.875a7.867 7.867 0 0 1-3.938-1.057 1.126 1.126 0 0 0-.92-.093l-2.793.93.931-2.792a1.125 1.125 0 0 0-.094-.92 7.875 7.875 0 0 1 .745-8.953l10.485 11.531A7.859 7.859 0 0 1 12 19.875ZM22.125 12a10.052 10.052 0 0 1-.81 3.975 1.125 1.125 0 0 1-2.07-.881A7.882 7.882 0 0 0 9.61 4.5a1.125 1.125 0 0 1-.681-2.144A10.133 10.133 0 0 1 22.125 12Z'
    />{' '}
  </svg>
);

export default ChatCircleSlash;
