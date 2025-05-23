'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const PaperPlaneRight: React.FC<IconProps> = ({
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
      d='M21.924 10.357 6.17 1.367a1.875 1.875 0 0 0-2.686 2.255L6.313 12l-2.83 8.378a1.875 1.875 0 0 0 2.687 2.255l.008-.005 15.75-9.007a1.875 1.875 0 0 0 0-3.264h-.004Zm-16 9.824 2.383-7.056H13.5a1.125 1.125 0 1 0 0-2.25H8.307L5.923 3.817l14.321 8.173-14.32 8.19Z'
    />{' '}
  </svg>
);

export default PaperPlaneRight;
