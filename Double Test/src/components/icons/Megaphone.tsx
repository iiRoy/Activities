'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Megaphone: React.FC<IconProps> = ({
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
      d='M23.625 11.25a4.88 4.88 0 0 0-4.875-4.875h-3.72c-.322-.02-4.931-.375-9.324-4.06A1.875 1.875 0 0 0 2.625 3.75v15a1.856 1.856 0 0 0 1.082 1.699 1.862 1.862 0 0 0 1.999-.264 18.086 18.086 0 0 1 7.794-3.828v2.456a1.876 1.876 0 0 0 .834 1.56c.042.028.085.053.13.075l1.354.662a1.875 1.875 0 0 0 2.78-1.141l1.039-3.92a4.882 4.882 0 0 0 3.988-4.799Zm-18.75 6.715V4.538c3.39 2.631 6.766 3.571 8.625 3.905v5.62c-1.86.33-5.234 1.27-8.625 3.902Zm11.662.991-.787-.384v-2.447h1.538l-.751 2.831Zm2.213-5.081h-3v-5.25h3a2.625 2.625 0 0 1 0 5.25Z'
    />{' '}
  </svg>
);

export default Megaphone;
