'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Star: React.FC<IconProps> = ({
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
      d='M22.781 9a1.906 1.906 0 0 0-1.663-1.312l-5.305-.429-2.048-4.95a1.909 1.909 0 0 0-3.53 0L8.189 7.26l-5.305.428A1.917 1.917 0 0 0 1.79 11.05l4.048 3.492L4.6 19.764a1.91 1.91 0 0 0 2.859 2.08L12 19.049l4.54 2.795a1.912 1.912 0 0 0 2.859-2.077l-1.238-5.222 4.048-3.49A1.916 1.916 0 0 0 22.781 9Zm-6.606 4.284a1.126 1.126 0 0 0-.36 1.112l1.208 5.104-4.433-2.726a1.125 1.125 0 0 0-1.18 0L6.977 19.5l1.208-5.1a1.125 1.125 0 0 0-.36-1.112L3.862 9.866l5.194-.419a1.125 1.125 0 0 0 .95-.692L12 3.927l1.994 4.828a1.124 1.124 0 0 0 .95.692l5.193.42-3.962 3.417Z'
    />{' '}
  </svg>
);

export default Star;
