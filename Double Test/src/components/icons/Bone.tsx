'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Bone: React.FC<IconProps> = ({
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
      d='M22.007 5.467a3.74 3.74 0 0 0-2.19-1.285 3.749 3.749 0 0 0-6.266-2.002 3.75 3.75 0 0 0-.751 4.427L6.612 12.8a3.75 3.75 0 1 0-2.425 7.018 3.75 3.75 0 1 0 7.018-2.425l6.192-6.193a3.75 3.75 0 0 0 4.615-5.733h-.005ZM20.259 8.86a1.5 1.5 0 0 1-1.925.282 1.875 1.875 0 0 0-2.329.258l-6.6 6.6a1.875 1.875 0 0 0-.258 2.33 1.5 1.5 0 1 1-2.757.562 1.125 1.125 0 0 0-1.285-1.282 1.501 1.501 0 1 1 .562-2.756 1.874 1.874 0 0 0 2.328-.259l6.6-6.6a1.875 1.875 0 0 0 .259-2.329 1.5 1.5 0 1 1 2.756-.562 1.125 1.125 0 0 0 1.285 1.285A1.5 1.5 0 0 1 20.26 8.86Z'
    />{' '}
  </svg>
);

export default Bone;
