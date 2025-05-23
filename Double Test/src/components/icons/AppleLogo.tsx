'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const AppleLogo: React.FC<IconProps> = ({
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
      d='M21.281 15.75a1.125 1.125 0 0 0-.394-.477c-1.457-1.002-1.762-2.74-1.762-4.023 0-1.516 1.189-2.869 1.898-3.54a1.124 1.124 0 0 0 0-1.634c-1.252-1.185-3.322-1.951-5.273-1.951A7.152 7.152 0 0 0 12 5.191a7.087 7.087 0 0 0-8.773 1.031 7.373 7.373 0 0 0-2.102 5.357 12.28 12.28 0 0 0 3.884 8.671 4.107 4.107 0 0 0 2.829 1.125h8.22a4.113 4.113 0 0 0 3.005-1.298 11.96 11.96 0 0 0 1.725-2.38c.147-.27.281-.536.388-.79.15-.344.304-.7.105-1.157Zm-3.865 2.796a1.854 1.854 0 0 1-1.358.579h-8.22a1.861 1.861 0 0 1-1.285-.508 10.048 10.048 0 0 1-3.178-7.097 5.109 5.109 0 0 1 1.453-3.712A4.768 4.768 0 0 1 8.25 6.375h.068a4.828 4.828 0 0 1 2.977 1.069 1.125 1.125 0 0 0 1.406 0 4.82 4.82 0 0 1 3.049-1.069 6.304 6.304 0 0 1 2.801.694c-1.09 1.337-1.676 2.787-1.676 4.181 0 2.187.7 4.02 1.992 5.268a9.682 9.682 0 0 1-1.452 2.027ZM12.07 1.219A4.11 4.11 0 0 1 13.328.142 1.126 1.126 0 0 1 14.42 2.11a1.86 1.86 0 0 0-.573.492 1.126 1.126 0 0 1-1.777-1.383Z'
    />{' '}
  </svg>
);

export default AppleLogo;
