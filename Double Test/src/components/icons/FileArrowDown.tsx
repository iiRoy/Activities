'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const FileArrowDown: React.FC<IconProps> = ({
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
      d='m20.296 7.455-5.25-5.25a1.124 1.124 0 0 0-.796-.33h-9A1.875 1.875 0 0 0 3.375 3.75v16.5a1.875 1.875 0 0 0 1.875 1.875h13.5a1.875 1.875 0 0 0 1.875-1.875v-12a1.12 1.12 0 0 0-.33-.795ZM15 5.344 17.156 7.5H15V5.344ZM5.625 19.875V4.125h7.125v4.5a1.125 1.125 0 0 0 1.125 1.125h4.5v10.125H5.625Zm9.42-5.67a1.125 1.125 0 0 1 0 1.593l-2.25 2.25a1.125 1.125 0 0 1-1.593 0l-2.25-2.25a1.127 1.127 0 1 1 1.594-1.594l.329.327v-2.906a1.125 1.125 0 1 1 2.25 0v2.906l.33-.33a1.124 1.124 0 0 1 1.59.003Z'
    />{' '}
  </svg>
);

export default FileArrowDown;
