'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const UserMinus: React.FC<IconProps> = ({
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
      d='M24 12.75a1.125 1.125 0 0 1-1.125 1.125h-3.75a1.125 1.125 0 1 1 0-2.25h3.75A1.125 1.125 0 0 1 24 12.75Zm-5.138 5.276a1.125 1.125 0 0 1-1.724 1.448c-1.283-1.528-3.544-3.349-7.013-3.349-2.708 0-5.2 1.189-7.013 3.349a1.125 1.125 0 0 1-1.724-1.448 11.632 11.632 0 0 1 4.565-3.351 6.75 6.75 0 1 1 8.344 0 11.625 11.625 0 0 1 4.565 3.351Zm-8.737-4.151a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z'
    />{' '}
  </svg>
);

export default UserMinus;
