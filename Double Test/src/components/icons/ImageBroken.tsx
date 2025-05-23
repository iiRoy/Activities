'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ImageBroken: React.FC<IconProps> = ({
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
      d='M21.656 10.5a1.125 1.125 0 0 0-1.013-.155l-2.232.744a1.127 1.127 0 0 0-.689.65l-1.281 3.204-3.204 1.281a1.125 1.125 0 0 0-.65.689l-.744 2.232a1.125 1.125 0 0 0 1.07 1.48h7.337a1.875 1.875 0 0 0 1.875-1.875v-7.338a1.124 1.124 0 0 0-.469-.912Zm-1.781 7.875h-5.402l.085-.256 3.168-1.267a1.126 1.126 0 0 0 .627-.626l1.266-3.168.256-.085v5.402Zm.375-15H3.75A1.875 1.875 0 0 0 1.875 5.25v13.5a1.875 1.875 0 0 0 1.875 1.875h5.21a1.125 1.125 0 0 0 1.071-.77l1.52-4.574 3.29-1.312a1.125 1.125 0 0 0 .628-.628l1.312-3.29 4.574-1.52a1.125 1.125 0 0 0 .77-1.071V5.25a1.875 1.875 0 0 0-1.875-1.875ZM9.581 14.078 8.15 18.375H4.125v-2.094l4.5-4.5 1.607 1.606a1.124 1.124 0 0 0-.65.69Zm10.294-7.43-4.297 1.433a1.125 1.125 0 0 0-.69.65l-1.33 3.326-1.053.421-2.554-2.554a1.875 1.875 0 0 0-2.652 0L4.125 13.1V5.625h15.75v1.024Z'
    />{' '}
  </svg>
);

export default ImageBroken;
