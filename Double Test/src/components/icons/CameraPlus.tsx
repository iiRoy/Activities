'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const CameraPlus: React.FC<IconProps> = ({
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
      d='M16.125 12.75A1.125 1.125 0 0 1 15 13.875h-1.875v1.875a1.125 1.125 0 1 1-2.25 0v-1.875H9a1.125 1.125 0 1 1 0-2.25h1.875V9.75a1.125 1.125 0 1 1 2.25 0v1.875H15a1.125 1.125 0 0 1 1.125 1.125Zm6-5.25V18a2.625 2.625 0 0 1-2.625 2.625h-15A2.625 2.625 0 0 1 1.875 18V7.5A2.625 2.625 0 0 1 4.5 4.875h2.398l.943-1.415a1.875 1.875 0 0 1 1.56-.835H14.6a1.875 1.875 0 0 1 1.56.835l.943 1.415H19.5A2.625 2.625 0 0 1 22.125 7.5Zm-2.25 0a.375.375 0 0 0-.375-.375h-3a1.125 1.125 0 0 1-.938-.5l-1.164-1.75H9.602l-1.165 1.75a1.125 1.125 0 0 1-.937.5h-3a.375.375 0 0 0-.375.375V18a.375.375 0 0 0 .375.375h15a.375.375 0 0 0 .375-.375V7.5Z'
    />{' '}
  </svg>
);

export default CameraPlus;
