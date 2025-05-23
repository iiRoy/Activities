'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const HourglassSimple: React.FC<IconProps> = ({
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
      d='M20.063 18.157 13.627 12l6.435-6.157.017-.017a1.875 1.875 0 0 0-1.329-3.201H5.25a1.875 1.875 0 0 0-1.325 3.2l.017.018L10.373 12l-6.43 6.157-.018.017a1.875 1.875 0 0 0 1.325 3.201h13.5a1.875 1.875 0 0 0 1.326-3.2l-.014-.018Zm-2.25-13.282L12 10.443 6.188 4.875h11.625ZM6.188 19.125 12 13.557l5.813 5.568H6.188Z'
    />{' '}
  </svg>
);

export default HourglassSimple;
