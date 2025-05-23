'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Student: React.FC<IconProps> = ({
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
      d='m21.355 4.933-9-3a1.11 1.11 0 0 0-.71 0l-9 3A1.125 1.125 0 0 0 1.875 6v7.5a1.125 1.125 0 0 0 2.25 0V7.56l2.223.742a6.368 6.368 0 0 0 1.727 7.968 9.409 9.409 0 0 0-3.762 3.365 1.125 1.125 0 1 0 1.884 1.229c1.338-2.059 3.46-3.239 5.803-3.239 2.344 0 4.465 1.18 5.808 3.239a1.125 1.125 0 1 0 1.884-1.229 9.408 9.408 0 0 0-3.767-3.368A6.367 6.367 0 0 0 17.652 8.3l3.703-1.235a1.125 1.125 0 0 0 0-2.134v.003ZM12 4.183 17.442 6 12 7.814 6.562 6 12 4.183Zm4.125 7.067a4.125 4.125 0 1 1-7.6-2.223l3.12 1.04c.23.077.48.077.71 0l3.12-1.04a4.12 4.12 0 0 1 .65 2.223Z'
    />{' '}
  </svg>
);

export default Student;
