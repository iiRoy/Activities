'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const FileArrowUp: React.FC<IconProps> = ({
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
      d='m20.296 7.455-5.25-5.25a1.124 1.124 0 0 0-.796-.33h-9A1.875 1.875 0 0 0 3.375 3.75v16.5a1.875 1.875 0 0 0 1.875 1.875h13.5a1.875 1.875 0 0 0 1.875-1.875v-12a1.12 1.12 0 0 0-.33-.795Zm-3.14.045H15V5.344L17.156 7.5ZM5.625 19.875V4.125h7.125v4.5a1.125 1.125 0 0 0 1.125 1.125h4.5v10.125H5.625Zm9.42-6.796a1.127 1.127 0 1 1-1.593 1.594l-.327-.33v2.907a1.125 1.125 0 1 1-2.25 0v-2.906l-.33.33a1.127 1.127 0 1 1-1.593-1.594l2.25-2.25a1.125 1.125 0 0 1 1.594 0l2.25 2.25Z'
    />{' '}
  </svg>
);

export default FileArrowUp;
