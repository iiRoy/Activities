'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Article: React.FC<IconProps> = ({
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
      d='M20.25 3.375H3.75A1.875 1.875 0 0 0 1.875 5.25v13.5a1.875 1.875 0 0 0 1.875 1.875h16.5a1.875 1.875 0 0 0 1.875-1.875V5.25a1.875 1.875 0 0 0-1.875-1.875Zm-.375 15H4.125V5.625h15.75v12.75Zm-13.5-9.75A1.125 1.125 0 0 1 7.5 7.5h9a1.125 1.125 0 0 1 0 2.25h-9a1.125 1.125 0 0 1-1.125-1.125Zm0 3.375A1.125 1.125 0 0 1 7.5 10.875h9a1.125 1.125 0 1 1 0 2.25h-9A1.125 1.125 0 0 1 6.375 12Zm0 3.375A1.125 1.125 0 0 1 7.5 14.25h9a1.125 1.125 0 1 1 0 2.25h-9a1.125 1.125 0 0 1-1.125-1.125Z'
    />{' '}
  </svg>
);

export default Article;
