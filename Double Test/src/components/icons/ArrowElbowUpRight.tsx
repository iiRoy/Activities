'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ArrowElbowUpRight: React.FC<IconProps> = ({
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
      d='m21.046 8.296-4.5 4.5a1.127 1.127 0 1 1-1.594-1.594l2.58-2.577H7.874V21a1.125 1.125 0 0 1-2.25 0V7.5A1.125 1.125 0 0 1 6.75 6.375h10.781l-2.577-2.58a1.126 1.126 0 0 1 1.228-1.837c.137.057.261.14.366.244l4.5 4.5a1.126 1.126 0 0 1-.002 1.594Z'
    />{' '}
  </svg>
);

export default ArrowElbowUpRight;
