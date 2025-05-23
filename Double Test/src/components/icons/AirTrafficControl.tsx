'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const AirTrafficControl: React.FC<IconProps> = ({
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
      d='M21.786 6.424a1.875 1.875 0 0 0-1.536-.799h-7.125v-2.25h1.125a1.125 1.125 0 0 0 0-2.25h-4.5a1.125 1.125 0 0 0 0 2.25h1.125v2.25H3.75A1.875 1.875 0 0 0 1.988 8.14l2.455 6.75a1.88 1.88 0 0 0 1.761 1.235h2.421v5.625a1.125 1.125 0 0 0 2.25 0v-5.625h2.25v5.625a1.125 1.125 0 1 0 2.25 0v-5.625h2.42a1.88 1.88 0 0 0 1.762-1.235l2.456-6.75a1.875 1.875 0 0 0-.227-1.716Zm-11.099 7.451-1.089-6h4.804l-1.09 6h-2.624Zm-6.402-6h3.027l1.092 6H6.469l-2.184-6Zm13.246 6h-1.933l1.09-6h3.025l-2.182 6Z'
    />{' '}
  </svg>
);

export default AirTrafficControl;
