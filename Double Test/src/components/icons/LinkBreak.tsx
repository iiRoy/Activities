'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const LinkBreak: React.FC<IconProps> = ({
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
      d='M18.356 5.644a2.625 2.625 0 0 0-3.704-.009l-1.088 1.141a1.124 1.124 0 1 1-1.628-1.552l1.095-1.152.019-.02a4.875 4.875 0 0 1 6.894 6.895l-.018.019-1.153 1.098a1.125 1.125 0 0 1-1.552-1.628l1.14-1.088a2.625 2.625 0 0 0-.005-3.704Zm-7.92 11.58-1.088 1.14a2.625 2.625 0 1 1-3.713-3.712l1.141-1.088a1.125 1.125 0 0 0-1.552-1.628l-1.152 1.095-.02.019a4.875 4.875 0 1 0 6.895 6.894l.019-.018 1.098-1.153a1.122 1.122 0 0 0-.017-1.611 1.124 1.124 0 0 0-1.61.059v.003Zm9.814-3.349H18a1.125 1.125 0 1 0 0 2.25h2.25a1.125 1.125 0 1 0 0-2.25Zm-16.5-3.75H6a1.125 1.125 0 1 0 0-2.25H3.75a1.125 1.125 0 1 0 0 2.25ZM15 16.875A1.125 1.125 0 0 0 13.875 18v2.25a1.125 1.125 0 1 0 2.25 0V18A1.125 1.125 0 0 0 15 16.875Zm-6-9.75A1.125 1.125 0 0 0 10.125 6V3.75a1.125 1.125 0 1 0-2.25 0V6A1.125 1.125 0 0 0 9 7.125Z'
    />{' '}
  </svg>
);

export default LinkBreak;
