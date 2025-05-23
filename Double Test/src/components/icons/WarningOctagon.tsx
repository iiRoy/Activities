'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const WarningOctagon: React.FC<IconProps> = ({
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
      d='M10.875 12.375V7.5a1.125 1.125 0 1 1 2.25 0v4.875a1.125 1.125 0 1 1-2.25 0Zm11.25-3.792v6.834a1.862 1.862 0 0 1-.55 1.326l-4.832 4.833a1.86 1.86 0 0 1-1.326.549H8.583a1.861 1.861 0 0 1-1.326-.55l-4.833-4.832a1.862 1.862 0 0 1-.549-1.326V8.583a1.862 1.862 0 0 1 .55-1.326l4.832-4.833a1.86 1.86 0 0 1 1.326-.549h6.834a1.861 1.861 0 0 1 1.326.55l4.833 4.832a1.862 1.862 0 0 1 .549 1.326Zm-2.25.155-4.613-4.613H8.738L4.125 8.738v6.524l4.613 4.613h6.524l4.613-4.613V8.738ZM12 14.625a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z'
    />{' '}
  </svg>
);

export default WarningOctagon;
