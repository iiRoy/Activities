'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const PaperPlaneTilt: React.FC<IconProps> = ({
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
      d='M21.576 2.424a1.875 1.875 0 0 0-1.835-.479l-.02.007L1.728 7.406a1.875 1.875 0 0 0-.287 3.492l7.84 3.82 3.816 7.843a1.857 1.857 0 0 0 1.687 1.067c.054 0 .108 0 .162-.007a1.858 1.858 0 0 0 1.647-1.35L22.048 4.28a1.875 1.875 0 0 0-.473-1.855ZM14.71 20.725l-3.222-6.622 4.313-4.308a1.125 1.125 0 0 0-.797-1.924 1.127 1.127 0 0 0-.797.33l-4.313 4.313-6.62-3.224 16.413-4.977-4.977 16.412Z'
    />{' '}
  </svg>
);

export default PaperPlaneTilt;
