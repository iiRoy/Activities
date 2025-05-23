'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const LightbulbFilament: React.FC<IconProps> = ({
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
      d='M16.875 21.75a1.125 1.125 0 0 1-1.125 1.125h-7.5a1.125 1.125 0 1 1 0-2.25h7.5a1.125 1.125 0 0 1 1.125 1.125Zm3.75-12a8.668 8.668 0 0 1-3.469 6.912.733.733 0 0 0-.281.588A1.875 1.875 0 0 1 15 19.125H9a1.876 1.876 0 0 1-1.875-1.875v-.022a.728.728 0 0 0-.305-.58 8.566 8.566 0 0 1-3.445-6.845c-.025-4.676 3.75-8.566 8.418-8.678a8.624 8.624 0 0 1 8.832 8.625Zm-2.25 0a6.376 6.376 0 0 0-6.53-6.375c-3.449.083-6.239 2.959-6.22 6.412a6.33 6.33 0 0 0 2.548 5.062 3.013 3.013 0 0 1 1.18 2.026h1.522v-2.906l-2.67-2.673a1.127 1.127 0 1 1 1.593-1.594L12 11.906l2.204-2.204a1.127 1.127 0 1 1 1.594 1.594l-2.673 2.673v2.906h1.523a2.992 2.992 0 0 1 1.164-2.015 6.323 6.323 0 0 0 2.563-5.11Z'
    />{' '}
  </svg>
);

export default LightbulbFilament;
