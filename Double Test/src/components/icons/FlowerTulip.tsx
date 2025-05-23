'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const FlowerTulip: React.FC<IconProps> = ({
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
      d='M19.5 4.125a8.583 8.583 0 0 0-3.166.602c-1.481-2.288-3.724-3.43-3.83-3.483a1.125 1.125 0 0 0-1.007 0c-.107.053-2.35 1.195-3.831 3.483A8.583 8.583 0 0 0 4.5 4.125 1.125 1.125 0 0 0 3.375 5.25V9a8.638 8.638 0 0 0 7.5 8.552v2.377l-2.872-1.435a1.125 1.125 0 0 0-1.006 2.012l4.5 2.25a1.125 1.125 0 0 0 1.006 0l4.5-2.25a1.126 1.126 0 1 0-1.006-2.012l-2.872 1.435v-2.377A8.639 8.639 0 0 0 20.625 9V5.25A1.125 1.125 0 0 0 19.5 4.125ZM12 3.557c.597.39 1.606 1.154 2.363 2.269A8.684 8.684 0 0 0 12 8.495a8.696 8.696 0 0 0-2.363-2.67c.757-1.114 1.766-1.878 2.363-2.268ZM5.625 9V6.474a6.385 6.385 0 0 1 5.25 6.276v2.526A6.386 6.386 0 0 1 5.625 9Zm12.75 0a6.386 6.386 0 0 1-5.25 6.276V12.75a6.386 6.386 0 0 1 5.25-6.276V9Z'
    />{' '}
  </svg>
);

export default FlowerTulip;
