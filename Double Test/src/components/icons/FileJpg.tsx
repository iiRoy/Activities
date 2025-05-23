'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const FileJpg: React.FC<IconProps> = ({
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
      d='M11.25 13.125h-1.5a1.125 1.125 0 0 0-1.125 1.125v5.25a1.125 1.125 0 0 0 2.25 0v-.375h.375a3 3 0 0 0 0-6Zm0 3.75h-.375v-1.5h.375a.75.75 0 1 1 0 1.5ZM21 18.832c0 .29-.112.568-.312.778a3.187 3.187 0 0 1-2.313 1.015c-1.86 0-3.375-1.682-3.375-3.75s1.514-3.75 3.375-3.75a3.13 3.13 0 0 1 1.754.544 1.124 1.124 0 1 1-1.258 1.864.88.88 0 0 0-.496-.158c-.61 0-1.125.687-1.125 1.5s.516 1.5 1.125 1.5a.843.843 0 0 0 .253-.04A1.125 1.125 0 0 1 19.5 16.5h.375A1.125 1.125 0 0 1 21 17.625v1.207ZM7.5 14.25v3.563a2.812 2.812 0 1 1-5.625 0 1.125 1.125 0 0 1 2.25 0 .562.562 0 1 0 1.125 0V14.25a1.125 1.125 0 0 1 2.25 0Zm-3-3a1.125 1.125 0 0 0 1.125-1.125v-6h7.125v4.5a1.125 1.125 0 0 0 1.125 1.125h4.5v.375a1.125 1.125 0 1 0 2.25 0V8.25a1.12 1.12 0 0 0-.33-.795l-5.25-5.25a1.124 1.124 0 0 0-.795-.33h-9A1.875 1.875 0 0 0 3.375 3.75v6.375A1.125 1.125 0 0 0 4.5 11.25ZM15 5.344 17.156 7.5H15V5.344Z'
    />{' '}
  </svg>
);

export default FileJpg;
