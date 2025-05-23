'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Basket: React.FC<IconProps> = ({
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
      d='M13.125 12v3.75a1.125 1.125 0 1 1-2.25 0V12a1.125 1.125 0 1 1 2.25 0Zm2.63-.112-.374 3.75a1.125 1.125 0 0 0 1.007 1.231c.038 0 .076.006.113.006a1.125 1.125 0 0 0 1.118-1.013l.375-3.75a1.125 1.125 0 0 0-2.238-.224Zm-7.51 0a1.125 1.125 0 0 0-2.24.224l.376 3.75A1.125 1.125 0 0 0 7.5 16.875c.037 0 .075 0 .112-.006a1.125 1.125 0 0 0 1.008-1.23l-.376-3.75ZM22.868 8.4l-1.412 10.594a1.88 1.88 0 0 1-1.863 1.632H4.406a1.88 1.88 0 0 1-1.858-1.628L1.135 8.404A1.125 1.125 0 0 1 2.25 7.125h3.99l4.916-5.616a1.125 1.125 0 0 1 1.693 0l4.912 5.616h3.989a1.125 1.125 0 0 1 1.115 1.274h.004ZM9.23 7.125h5.541L12 3.958 9.23 7.125Zm11.236 2.25H3.535l1.2 9h14.532l1.198-9Z'
    />{' '}
  </svg>
);

export default Basket;
