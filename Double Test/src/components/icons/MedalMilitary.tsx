'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const MedalMilitary: React.FC<IconProps> = ({
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
      d='M19.406 3.375H4.594a1.969 1.969 0 0 0-1.969 1.969v4.613a1.969 1.969 0 0 0 1.154 1.792l5.25 2.388a4.875 4.875 0 1 0 5.936 0l5.25-2.388a1.968 1.968 0 0 0 1.16-1.792V5.344a1.969 1.969 0 0 0-1.969-1.969ZM12 13.015 9.375 11.82V5.625h5.25v6.196L12 13.014Zm-7.125-7.39h2.25v5.173l-2.25-1.023v-4.15Zm7.125 15a2.625 2.625 0 1 1 0-5.25 2.625 2.625 0 0 1 0 5.25Zm7.125-10.85-2.25 1.023V5.625h2.25v4.15Z'
    />{' '}
  </svg>
);

export default MedalMilitary;
