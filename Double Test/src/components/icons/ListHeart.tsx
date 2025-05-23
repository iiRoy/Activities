'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ListHeart: React.FC<IconProps> = ({
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
      d='M11.625 18a1.125 1.125 0 0 1-1.125 1.125H3.75a1.125 1.125 0 1 1 0-2.25h6.75A1.125 1.125 0 0 1 11.625 18ZM3.75 7.125h16.5a1.125 1.125 0 0 0 0-2.25H3.75a1.125 1.125 0 0 0 0 2.25Zm0 6H9a1.125 1.125 0 1 0 0-2.25H3.75a1.125 1.125 0 1 0 0 2.25Zm19.875.375c0 1.594-.893 3.146-2.655 4.614a14.195 14.195 0 0 1-2.467 1.642 1.125 1.125 0 0 1-1.006 0 14.195 14.195 0 0 1-2.467-1.642c-1.762-1.468-2.655-3.02-2.655-4.614A3.375 3.375 0 0 1 18 10.987a3.374 3.374 0 0 1 5.625 2.513Zm-2.25 0a1.125 1.125 0 1 0-2.25 0 1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 1 0-2.25 0c0 1.615 2.142 3.228 3.375 3.965 1.232-.736 3.375-2.35 3.375-3.965Z'
    />{' '}
  </svg>
);

export default ListHeart;
