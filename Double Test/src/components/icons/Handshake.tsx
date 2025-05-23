'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Handshake: React.FC<IconProps> = ({
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
      d='m23.801 10.135-2.393-4.78a1.874 1.874 0 0 0-2.516-.845L16.72 5.597l-4.372-1.418a1.138 1.138 0 0 0-.694 0L7.281 5.597 5.108 4.51a1.875 1.875 0 0 0-2.516.844L.2 10.135a1.876 1.876 0 0 0 .844 2.516l2.5 1.25L8.34 17.41c.114.083.242.144.378.18l5.812 1.5a1.124 1.124 0 0 0 1.076-.294l4.934-4.933 2.421-1.211a1.875 1.875 0 0 0 .84-2.516Zm-5.448 2.733-2.58-2.437a1.126 1.126 0 0 0-1.572.024c-.905.913-2.35 1.576-3.826.895l3.58-3.468h2.13l2.42 4.84-.152.146ZM4.435 6.691l1.244.622-2.062 4.115-1.244-.621L4.436 6.69Zm10.031 10.06L9.49 15.468l-3.937-2.875 2.432-4.86L12 6.432l.158.052-3.72 3.611-.013.011a1.874 1.874 0 0 0 .32 2.906c1.963 1.256 4.312 1.132 6.218-.255l1.8 1.701-2.296 2.292Zm5.907-5.323L18.31 7.313l1.244-.622 2.058 4.116-1.24.621Zm-9.26 9.103a1.127 1.127 0 0 1-1.37.808l-2.494-.644a1.123 1.123 0 0 1-.383-.18l-2.28-1.671a1.125 1.125 0 0 1 1.327-1.816l2.106 1.54 2.286.589a1.125 1.125 0 0 1 .808 1.374Z'
    />{' '}
  </svg>
);

export default Handshake;
