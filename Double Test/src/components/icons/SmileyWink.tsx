'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const SmileyWink: React.FC<IconProps> = ({
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
      d='M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875Zm0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875Zm-4.875-9.75a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm10.5 0A1.125 1.125 0 0 1 16.5 11.25h-2.25a1.125 1.125 0 1 1 0-2.25h2.25a1.125 1.125 0 0 1 1.125 1.125Zm-.9 4.688c-1.032 1.786-2.756 2.812-4.725 2.812-1.969 0-3.69-1.025-4.724-2.813a1.125 1.125 0 0 1 1.948-1.124c.365.63 1.21 1.687 2.776 1.687 1.566 0 2.411-1.057 2.776-1.688a1.126 1.126 0 1 1 1.948 1.126Z'
    />{' '}
  </svg>
);

export default SmileyWink;
