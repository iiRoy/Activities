'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const FolderOpen: React.FC<IconProps> = ({
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
      d='M23.272 10.53a1.875 1.875 0 0 0-1.522-.78h-1.125v-1.5a1.875 1.875 0 0 0-1.875-1.875h-6.375L9.875 4.5a1.886 1.886 0 0 0-1.124-.375H3.75A1.875 1.875 0 0 0 1.875 6v13.5A1.125 1.125 0 0 0 3 20.625h16.79a1.125 1.125 0 0 0 1.063-.75l2.67-7.638.006-.016a1.875 1.875 0 0 0-.257-1.692ZM8.625 6.374l2.7 2.025c.195.146.432.225.675.225h6.375V9.75H6.541a1.875 1.875 0 0 0-1.776 1.273l-.64 1.835V6.375h4.5Zm10.368 12H4.583L6.807 12h14.415l-2.23 6.375Z'
    />{' '}
  </svg>
);

export default FolderOpen;
