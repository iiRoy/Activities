'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ClipboardText: React.FC<IconProps> = ({
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
      d='M16.125 15.375A1.125 1.125 0 0 1 15 16.5H9a1.125 1.125 0 1 1 0-2.25h6a1.125 1.125 0 0 1 1.125 1.125ZM15 10.5H9a1.125 1.125 0 1 0 0 2.25h6a1.125 1.125 0 1 0 0-2.25Zm5.625-6v15.75a1.875 1.875 0 0 1-1.875 1.875H5.25a1.875 1.875 0 0 1-1.875-1.875V4.5A1.875 1.875 0 0 1 5.25 2.625h3.237a4.864 4.864 0 0 1 7.026 0h3.237A1.875 1.875 0 0 1 20.625 4.5ZM9.402 5.625h5.196a2.625 2.625 0 0 0-5.196 0Zm8.973-.75h-1.632A4.9 4.9 0 0 1 16.875 6v.75a1.125 1.125 0 0 1-1.125 1.125h-7.5A1.125 1.125 0 0 1 7.125 6.75V6a4.9 4.9 0 0 1 .132-1.125H5.625v15h12.75v-15Z'
    />{' '}
  </svg>
);

export default ClipboardText;
