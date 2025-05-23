'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ChartPie: React.FC<IconProps> = ({
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
      d='M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875Zm1.125 2.332a7.875 7.875 0 0 1 5.063 2.925l-5.063 2.92V4.207ZM4.687 14.922a7.87 7.87 0 0 1 6.188-10.715v7.143l-6.188 3.572ZM12 19.875a7.864 7.864 0 0 1-6.183-3.007l13.495-7.79A7.875 7.875 0 0 1 12 19.875Z'
    />{' '}
  </svg>
);

export default ChartPie;
