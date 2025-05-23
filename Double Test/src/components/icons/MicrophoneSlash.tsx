'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const MicrophoneSlash: React.FC<IconProps> = ({
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
      d='M5.332 3.743a1.125 1.125 0 1 0-1.664 1.514L7.124 9.06V12a4.875 4.875 0 0 0 6.76 4.5l1.056 1.162a6.313 6.313 0 0 1-2.941.713A6.382 6.382 0 0 1 5.625 12a1.125 1.125 0 0 0-2.25 0 8.638 8.638 0 0 0 7.5 8.552V22.5a1.125 1.125 0 1 0 2.25 0v-1.947a8.474 8.474 0 0 0 3.367-1.189l2.175 2.393a1.125 1.125 0 0 0 1.665-1.514l-15-16.5ZM12 14.625A2.625 2.625 0 0 1 9.375 12v-.469l2.803 3.084c-.059.01-.118.01-.178.01Zm5.906-.227c.31-.761.47-1.576.469-2.398a1.125 1.125 0 1 1 2.25 0 8.575 8.575 0 0 1-.632 3.245 1.125 1.125 0 0 1-2.084-.844l-.003-.003ZM8.034 3.164A4.875 4.875 0 0 1 16.875 6v5.3a1.125 1.125 0 1 1-2.25 0V6a2.625 2.625 0 0 0-4.762-1.526A1.126 1.126 0 0 1 8.034 3.16v.003Z'
    />{' '}
  </svg>
);

export default MicrophoneSlash;
