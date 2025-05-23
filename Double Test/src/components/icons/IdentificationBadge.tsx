'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const IdentificationBadge: React.FC<IconProps> = ({
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
      d='M18.75 1.875H5.25A1.875 1.875 0 0 0 3.375 3.75v16.5a1.875 1.875 0 0 0 1.875 1.875h13.5a1.875 1.875 0 0 0 1.875-1.875V3.75a1.875 1.875 0 0 0-1.875-1.875Zm-.375 18H5.625V4.125h12.75v15.75Zm-10.5-13.5A1.125 1.125 0 0 1 9 5.25h6a1.125 1.125 0 0 1 0 2.25H9a1.125 1.125 0 0 1-1.125-1.125Zm.825 11.94a4.501 4.501 0 0 1 6.6 0 1.125 1.125 0 1 0 1.65-1.53 6.75 6.75 0 0 0-1.8-1.375 4.125 4.125 0 1 0-6.3 0 6.761 6.761 0 0 0-1.8 1.376 1.125 1.125 0 0 0 1.65 1.53Zm3.3-7.44a1.875 1.875 0 1 1 0 3.75 1.875 1.875 0 0 1 0-3.75Z'
    />{' '}
  </svg>
);

export default IdentificationBadge;
