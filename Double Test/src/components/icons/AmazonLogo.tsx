'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const AmazonLogo: React.FC<IconProps> = ({
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
      d='M23.625 15.75v3a1.125 1.125 0 1 1-2.25 0v-.29c-1.166 1.078-4.477 3.665-9.375 3.665-6.056 0-9.684-3.954-9.836-4.125a1.125 1.125 0 1 1 1.672-1.5c.028.03 3.139 3.375 8.164 3.375 3.998 0 6.782-2.117 7.77-3h-.27a1.125 1.125 0 1 1 0-2.25h3a1.125 1.125 0 0 1 1.125 1.125Zm-9-7.68v-.195A3 3 0 0 0 9.11 6.239a1.125 1.125 0 0 1-1.886-1.228 5.25 5.25 0 0 1 9.651 2.864V16.5a1.125 1.125 0 0 1-2.236.17 5.25 5.25 0 1 1-.014-8.6Zm0 4.305a3 3 0 1 0-5.999 0 3 3 0 0 0 5.999 0Z'
    />{' '}
  </svg>
);

export default AmazonLogo;
