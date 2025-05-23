'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Lightning: React.FC<IconProps> = ({
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
      d='M20.598 11.004a1.124 1.124 0 0 0-.68-.798l-4.798-1.92.993-6.62A1.125 1.125 0 0 0 14.178.73l-10.5 11.25a1.125 1.125 0 0 0 .404 1.813L8.88 15.71l-.993 6.622a1.125 1.125 0 0 0 1.935.938l10.5-11.25a1.125 1.125 0 0 0 .276-1.017Zm-9.948 8.079.588-3.916a1.125 1.125 0 0 0-.695-1.211l-4.099-1.64 6.906-7.399-.588 3.916a1.125 1.125 0 0 0 .695 1.211l4.099 1.64-6.906 7.399Z'
    />{' '}
  </svg>
);

export default Lightning;
