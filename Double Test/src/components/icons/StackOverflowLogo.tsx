'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const StackOverflowLogo: React.FC<IconProps> = ({
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
      d='M20.625 14.22v6.03a1.125 1.125 0 0 1-1.125 1.125h-15a1.125 1.125 0 0 1-1.125-1.125v-6.03a1.125 1.125 0 0 1 2.25 0v4.896h12.75v-4.897a1.125 1.125 0 1 1 2.25 0ZM8.25 17.231h7.5a1.13 1.13 0 0 0 0-2.26h-7.5a1.13 1.13 0 0 0 0 2.26Zm.769-6.638 7.047 2.577a1.13 1.13 0 0 0 .77-2.124L9.788 8.47a1.13 1.13 0 1 0-.77 2.124ZM12 4.62l5.746 4.841a1.125 1.125 0 0 0 1.844-.964 1.133 1.133 0 0 0-.398-.768l-5.745-4.84a1.125 1.125 0 0 0-1.844.963c.026.299.169.574.397.768Z'
    />{' '}
  </svg>
);

export default StackOverflowLogo;
