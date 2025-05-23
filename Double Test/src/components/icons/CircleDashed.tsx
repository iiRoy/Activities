'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const CircleDashed: React.FC<IconProps> = ({
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
      d='M8.66 3.567a1.125 1.125 0 0 1 .809-1.371 10.125 10.125 0 0 1 5.062 0 1.125 1.125 0 1 1-.562 2.177 7.885 7.885 0 0 0-3.938 0 1.125 1.125 0 0 1-1.37-.806Zm-3.884 1.34A10.134 10.134 0 0 0 2.244 9.29a1.125 1.125 0 1 0 2.169.6 7.875 7.875 0 0 1 1.969-3.408 1.125 1.125 0 0 0-1.606-1.576Zm-.364 9.2a1.125 1.125 0 0 0-2.168.602 10.125 10.125 0 0 0 2.532 4.386 1.126 1.126 0 0 0 1.599-1.578 7.875 7.875 0 0 1-1.963-3.41Zm9.557 5.52a7.875 7.875 0 0 1-3.938 0 1.125 1.125 0 1 0-.562 2.177c1.66.43 3.402.43 5.062 0a1.126 1.126 0 1 0-.562-2.177Zm7.005-6.302a1.125 1.125 0 0 0-1.38.784 7.875 7.875 0 0 1-1.969 3.408 1.125 1.125 0 0 0 1.605 1.577 10.143 10.143 0 0 0 2.531-4.385 1.124 1.124 0 0 0-.788-1.384Zm-1.385-3.432a1.125 1.125 0 0 0 2.168-.602 10.125 10.125 0 0 0-2.532-4.386 1.124 1.124 0 1 0-1.6 1.578 7.875 7.875 0 0 1 1.963 3.41h.001Z'
    />{' '}
  </svg>
);

export default CircleDashed;
