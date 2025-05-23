'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const PaintBrush: React.FC<IconProps> = ({
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
      d='M22.125 3A1.125 1.125 0 0 0 21 1.875c-4.198 0-8.438 4.55-10.866 7.688a6 6 0 0 0-7.5 5.812c0 1.125-.29 2.13-.865 2.977a4.031 4.031 0 0 1-.888.965 1.114 1.114 0 0 0-.049 1.837c.197.145.434.222.678.221h7.125a6 6 0 0 0 5.803-7.5C17.578 11.442 22.125 7.2 22.125 3Zm-2.473 1.35c-.375 1.21-1.233 2.576-2.524 4.022-.281.318-.577.628-.876.927a9.78 9.78 0 0 0-1.547-1.548c.299-.299.608-.592.926-.876 1.446-1.292 2.81-2.147 4.02-2.526ZM8.632 19.124H3.938a7.516 7.516 0 0 0 .95-3.75 3.75 3.75 0 1 1 3.75 3.75h-.006Zm3.579-8.561c.292-.369.614-.759.959-1.158a7.52 7.52 0 0 1 1.428 1.429c-.4.345-.79.666-1.158.959a6.035 6.035 0 0 0-1.23-1.23Z'
    />{' '}
  </svg>
);

export default PaintBrush;
