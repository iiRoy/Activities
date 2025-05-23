'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const CardsThree: React.FC<IconProps> = ({
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
      d='M19.5 9h-15a1.875 1.875 0 0 0-1.875 1.875v7.875A1.875 1.875 0 0 0 4.5 20.625h15a1.875 1.875 0 0 0 1.875-1.875v-7.875A1.875 1.875 0 0 0 19.5 9Zm-.375 9.375H4.875V11.25h14.25v7.125Zm-15-12A1.125 1.125 0 0 1 5.25 5.25h13.5a1.125 1.125 0 0 1 0 2.25H5.25a1.125 1.125 0 0 1-1.125-1.125Zm1.5-3.75A1.125 1.125 0 0 1 6.75 1.5h10.5a1.125 1.125 0 0 1 0 2.25H6.75a1.125 1.125 0 0 1-1.125-1.125Z'
    />{' '}
  </svg>
);

export default CardsThree;
