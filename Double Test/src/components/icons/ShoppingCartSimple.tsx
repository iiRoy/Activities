'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ShoppingCartSimple: React.FC<IconProps> = ({
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
      d='M22.645 6.07a1.125 1.125 0 0 0-.895-.445H5.647l-.813-2.926a1.125 1.125 0 0 0-1.084-.824H1.875a1.125 1.125 0 0 0 0 2.25h1.02l3.216 11.577a2.634 2.634 0 0 0 2.53 1.923h9.265a2.633 2.633 0 0 0 2.532-1.923l2.402-8.651a1.125 1.125 0 0 0-.195-.982Zm-4.383 9.03a.374.374 0 0 1-.356.275H8.64a.375.375 0 0 1-.36-.275L6.271 7.875H20.27L18.262 15.1Zm-8.137 5.525a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm9.75 0a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Z'
    />{' '}
  </svg>
);

export default ShoppingCartSimple;
