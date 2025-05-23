'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const CellSignalSlash: React.FC<IconProps> = ({
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
      d='M8.625 14.25v4.5a1.125 1.125 0 0 1-2.25 0v-4.5a1.125 1.125 0 0 1 2.25 0ZM3.75 16.875A1.125 1.125 0 0 0 2.625 18v.75a1.125 1.125 0 0 0 2.25 0V18a1.125 1.125 0 0 0-1.125-1.125Zm16.582 2.618-15-16.5a1.125 1.125 0 1 0-1.664 1.514l6.457 7.103v7.14a1.125 1.125 0 1 0 2.25 0v-4.665l1.5 1.65v3.015a1.125 1.125 0 1 0 2.25 0v-.54l2.543 2.797a1.125 1.125 0 0 0 1.665-1.514ZM15 10.851a1.125 1.125 0 0 0 1.125-1.125V6.75a1.125 1.125 0 1 0-2.25 0v2.976A1.125 1.125 0 0 0 15 10.85Zm3.75 4.125a1.125 1.125 0 0 0 1.125-1.125V3a1.125 1.125 0 1 0-2.25 0v10.85a1.125 1.125 0 0 0 1.125 1.126Z'
    />{' '}
  </svg>
);

export default CellSignalSlash;
