'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ShoppingCart: React.FC<IconProps> = ({
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
      d='M21.863 5.28A1.124 1.124 0 0 0 21 4.874H6.187l-.512-2.827a1.125 1.125 0 0 0-1.107-.923H2.25a1.125 1.125 0 0 0 0 2.25h1.38l2.334 12.844c.063.34.193.666.382.957a3 3 0 1 0 5.185 1.199h3.188a3 3 0 1 0 2.906-2.25H8.547a.375.375 0 0 1-.368-.307l-.218-1.193h10.423a2.626 2.626 0 0 0 2.583-2.156l1.14-6.268a1.124 1.124 0 0 0-.244-.922ZM9.375 19.124a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm8.25.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm1.125-7.807a.375.375 0 0 1-.366.307H7.552l-.954-5.25h13.054l-.902 4.943Z'
    />{' '}
  </svg>
);

export default ShoppingCart;
