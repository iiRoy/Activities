'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const DotsThreeOutlineVertical: React.FC<IconProps> = ({
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
      d='M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 3.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm0-5.25a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-3.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm0 12.75a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 3.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z'
    />{' '}
  </svg>
);

export default DotsThreeOutlineVertical;
