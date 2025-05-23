'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const MessengerLogo: React.FC<IconProps> = ({
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
      d='m17.296 11.296-3 3a1.125 1.125 0 0 1-1.594 0L10.5 12.094l-2.204 2.202a1.127 1.127 0 1 1-1.594-1.594l3-3a1.125 1.125 0 0 1 1.594 0l2.204 2.204 2.204-2.205a1.127 1.127 0 1 1 1.594 1.594h-.002Zm4.829.704a10.126 10.126 0 0 1-14.74 9.014l-3.04 1.017a1.874 1.874 0 0 1-2.376-2.375l1.013-3.04A10.125 10.125 0 1 1 22.125 12Zm-2.25 0a7.874 7.874 0 1 0-14.693 3.942 1.125 1.125 0 0 1 .093.92l-.93 2.794 2.792-.931a1.126 1.126 0 0 1 .919.094A7.875 7.875 0 0 0 19.875 12Z'
    />{' '}
  </svg>
);

export default MessengerLogo;
