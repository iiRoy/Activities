'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const CircleHalfTilt: React.FC<IconProps> = ({
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
      d='M19.16 4.837A10.133 10.133 0 1 0 4.825 19.162 10.133 10.133 0 0 0 19.16 4.837ZM16.5 18.47a7.816 7.816 0 0 1-1.5.82v-8.695l1.5-1.5v9.375ZM6.431 6.429a7.883 7.883 0 0 1 10.285-.738L5.692 16.718a7.882 7.882 0 0 1 .74-10.289ZM9 16.594v2.69a7.84 7.84 0 0 1-1.716-.975L9 16.594Zm2.25 3.245v-5.495l1.5-1.5v6.997a7.938 7.938 0 0 1-1.5-.002Zm7.5-3.775V7.936a7.897 7.897 0 0 1 0 8.128Z'
    />{' '}
  </svg>
);

export default CircleHalfTilt;
