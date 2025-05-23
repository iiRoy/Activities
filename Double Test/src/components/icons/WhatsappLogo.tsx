'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const WhatsappLogo: React.FC<IconProps> = ({
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
      d='M17.56 14.912a3.384 3.384 0 0 1-3.31 2.713A7.883 7.883 0 0 1 6.375 9.75a3.383 3.383 0 0 1 2.713-3.31 1.125 1.125 0 0 1 1.225.6l1.076 2.157a1.126 1.126 0 0 1-.07 1.125l-.8 1.198a4.177 4.177 0 0 0 1.961 1.96l1.198-.798a1.125 1.125 0 0 1 1.125-.07l2.156 1.075a1.126 1.126 0 0 1 .6 1.225ZM22.124 12a10.125 10.125 0 0 1-14.74 9.014l-3.04 1.017a1.875 1.875 0 0 1-2.376-2.375l1.013-3.04A10.125 10.125 0 1 1 22.125 12Zm-2.25 0a7.875 7.875 0 1 0-14.693 3.943 1.125 1.125 0 0 1 .093.92l-.93 2.793 2.792-.931a1.125 1.125 0 0 1 .919.094A7.875 7.875 0 0 0 19.875 12Z'
    />{' '}
  </svg>
);

export default WhatsappLogo;
