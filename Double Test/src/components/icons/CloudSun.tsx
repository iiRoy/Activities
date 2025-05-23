'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const CloudSun: React.FC<IconProps> = ({
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
      d='M15.375 6.375c-.583 0-1.164.068-1.73.202a5.614 5.614 0 0 0-.563-.696l.71-1.014a1.125 1.125 0 0 0-1.844-1.291l-.71 1.018a5.61 5.61 0 0 0-2.087-.469l-.216-1.219a1.125 1.125 0 0 0-2.215.391l.216 1.219a5.625 5.625 0 0 0-1.801 1.153l-1.018-.713a1.125 1.125 0 1 0-1.291 1.843l1.018.711a5.574 5.574 0 0 0-.469 2.086l-1.219.216a1.125 1.125 0 1 0 .391 2.216l1.219-.216c.092.234.2.461.322.68a5.25 5.25 0 0 0 3.787 8.883h7.5a7.5 7.5 0 0 0 0-15ZM9 6.375a3.375 3.375 0 0 1 2.48 1.088 7.534 7.534 0 0 0-3.006 3.446 5.282 5.282 0 0 0-2.505.325A3.375 3.375 0 0 1 9 6.375Zm6.375 12.75h-7.5a3 3 0 0 1 0-6h.026c-.01.103-.018.206-.024.31a1.127 1.127 0 0 0 2.25.13c.02-.348.074-.693.163-1.03l.014-.052a5.255 5.255 0 1 1 5.071 6.642Z'
    />{' '}
  </svg>
);

export default CloudSun;
