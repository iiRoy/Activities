'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ChartDonut: React.FC<IconProps> = ({
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
      d='M12 1.875A1.125 1.125 0 0 0 10.875 3v5.25A1.125 1.125 0 0 0 12 9.375a2.625 2.625 0 1 1-2.274 1.313 1.125 1.125 0 0 0-.412-1.538L4.767 6.525a1.125 1.125 0 0 0-1.536.412A10.125 10.125 0 1 0 12 1.875Zm-7.313 7.2 2.644 1.527A4.882 4.882 0 0 0 7.125 12v.14l-2.947.79a7.908 7.908 0 0 1 .51-3.854Zm.078 6.03 2.947-.791a4.894 4.894 0 0 0 3.163 2.429v3.05a7.898 7.898 0 0 1-6.112-4.689h.002Zm8.362 4.687v-3.05a4.875 4.875 0 0 0-.002-9.486V4.205a7.875 7.875 0 0 1 0 15.588l.002-.001Z'
    />{' '}
  </svg>
);

export default ChartDonut;
