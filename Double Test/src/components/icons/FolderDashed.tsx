'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const FolderDashed: React.FC<IconProps> = ({
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
      d='M9.375 19.5a1.125 1.125 0 0 1-1.125 1.125H3.692a1.82 1.82 0 0 1-1.817-1.817V18a1.125 1.125 0 0 1 2.25 0v.375H8.25A1.125 1.125 0 0 1 9.375 19.5ZM15 18.375h-3a1.125 1.125 0 1 0 0 2.25h3a1.125 1.125 0 1 0 0-2.25Zm6-5.25a1.125 1.125 0 0 0-1.125 1.125v4.125H18.75a1.125 1.125 0 1 0 0 2.25h1.583a1.793 1.793 0 0 0 1.792-1.792V14.25A1.125 1.125 0 0 0 21 13.125Zm-.75-6.75h-4.5a1.125 1.125 0 0 0 0 2.25h4.125V10.5a1.125 1.125 0 1 0 2.25 0V8.25a1.875 1.875 0 0 0-1.875-1.875Zm-17.25 9a1.125 1.125 0 0 0 1.125-1.125v-3a1.125 1.125 0 0 0-2.25 0v3A1.125 1.125 0 0 0 3 15.375ZM1.875 7.5V4.875A1.875 1.875 0 0 1 3.75 3h4.913a1.875 1.875 0 0 1 1.401.63l2.78 3.12A1.125 1.125 0 0 1 12 8.625H3A1.125 1.125 0 0 1 1.875 7.5Zm2.25-1.125h5.37l-1-1.125h-4.37v1.125Z'
    />{' '}
  </svg>
);

export default FolderDashed;
