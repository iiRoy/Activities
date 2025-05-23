'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Sparkle: React.FC<IconProps> = ({
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
      d='m18.656 11.748-4.676-1.724-1.728-4.68a1.867 1.867 0 0 0-3.504 0l-1.724 4.68-4.68 1.724a1.867 1.867 0 0 0 0 3.504l4.676 1.724 1.728 4.68a1.867 1.867 0 0 0 3.504 0l1.724-4.676 4.68-1.728a1.867 1.867 0 0 0 0-3.504Zm-5.942 3.296a1.124 1.124 0 0 0-.666.667L10.5 19.9l-1.544-4.19a1.124 1.124 0 0 0-.667-.667L4.1 13.5l4.19-1.544a1.124 1.124 0 0 0 .667-.667L10.5 7.1l1.544 4.19a1.123 1.123 0 0 0 .667.667L16.9 13.5l-4.187 1.544Zm.411-11.294a1.125 1.125 0 0 1 1.125-1.125h1.125V1.5a1.125 1.125 0 1 1 2.25 0v1.125h1.125a1.125 1.125 0 0 1 0 2.25h-1.125V6a1.125 1.125 0 1 1-2.25 0V4.875H14.25a1.125 1.125 0 0 1-1.125-1.125Zm10.5 4.5A1.125 1.125 0 0 1 22.5 9.375h-.375v.375a1.125 1.125 0 1 1-2.25 0v-.375H19.5a1.125 1.125 0 0 1 0-2.25h.375V6.75a1.125 1.125 0 1 1 2.25 0v.375h.375a1.125 1.125 0 0 1 1.125 1.125Z'
    />{' '}
  </svg>
);

export default Sparkle;
