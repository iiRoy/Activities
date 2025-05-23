'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ApproximateEquals: React.FC<IconProps> = ({
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
      d='M21.116 14.131a1.124 1.124 0 0 1-.148 1.584c-1.703 1.413-3.244 1.91-4.641 1.91-1.853 0-3.456-.87-4.864-1.635-2.35-1.277-4.206-2.285-6.995.028a1.125 1.125 0 1 1-1.436-1.732c3.96-3.282 7.031-1.616 9.505-.274 2.35 1.276 4.206 2.285 6.995-.03a1.123 1.123 0 0 1 1.584.149ZM4.468 10.017c2.79-2.313 4.645-1.305 6.995-.029 1.406.765 3.011 1.636 4.864 1.636 1.397 0 2.938-.497 4.641-1.91a1.125 1.125 0 1 0-1.436-1.732c-2.79 2.313-4.645 1.305-6.995.028-2.47-1.34-5.544-3.01-9.505.275a1.125 1.125 0 1 0 1.436 1.732Z'
    />{' '}
  </svg>
);

export default ApproximateEquals;
