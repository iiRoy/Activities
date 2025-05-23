'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const AddressBook: React.FC<IconProps> = ({
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
      d='M19.5 1.875H6A1.875 1.875 0 0 0 4.125 3.75v1.875H3a1.125 1.125 0 0 0 0 2.25h1.125v3H3a1.125 1.125 0 1 0 0 2.25h1.125v3H3a1.125 1.125 0 1 0 0 2.25h1.125v1.875A1.875 1.875 0 0 0 6 22.125h13.5a1.875 1.875 0 0 0 1.875-1.875V3.75A1.875 1.875 0 0 0 19.5 1.875Zm-.375 18H6.375V4.125h12.75v15.75Zm-9.675-3.81a4.501 4.501 0 0 1 6.6 0 1.125 1.125 0 1 0 1.65-1.53 6.75 6.75 0 0 0-1.8-1.375 4.125 4.125 0 1 0-6.3 0 6.761 6.761 0 0 0-1.8 1.376 1.125 1.125 0 0 0 1.65 1.53Zm1.425-5.565a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0Z'
    />{' '}
  </svg>
);

export default AddressBook;
