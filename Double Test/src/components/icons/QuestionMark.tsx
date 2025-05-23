'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const QuestionMark: React.FC<IconProps> = ({
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
      d='M18.375 9c0 2.763-2.27 5.067-5.25 5.537v.088a1.125 1.125 0 1 1-2.25 0V13.5A1.125 1.125 0 0 1 12 12.375c2.274 0 4.125-1.514 4.125-3.375 0-1.86-1.85-3.375-4.125-3.375-2.274 0-4.125 1.514-4.125 3.375a1.125 1.125 0 0 1-2.25 0c0-3.101 2.86-5.625 6.375-5.625 3.516 0 6.375 2.524 6.375 5.625ZM12 17.625a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75Z'
    />{' '}
  </svg>
);

export default QuestionMark;
