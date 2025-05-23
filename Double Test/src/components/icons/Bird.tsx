'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Bird: React.FC<IconProps> = ({
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
      d='M16.5 6.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm6.375.75a1.125 1.125 0 0 1-.5.938l-1.75 1.164v1.648A10.137 10.137 0 0 1 10.5 21.375H2.25a1.875 1.875 0 0 1-1.462-3.047l.014-.017 7.823-9.388V7.208c0-3.338 2.678-6.067 5.97-6.083h.03a5.995 5.995 0 0 1 5.68 4.058l2.07 1.38a1.126 1.126 0 0 1 .5.937Zm-3.153 0-1.002-.668a1.125 1.125 0 0 1-.469-.657 3.75 3.75 0 0 0-3.626-2.8h-.018c-2.058.01-3.731 1.73-3.731 3.833V9.33c0 .264-.093.519-.262.72l-7.56 9.075h1.92l6.538-7.845a1.125 1.125 0 1 1 1.727 1.44l-5.337 6.405H10.5a7.883 7.883 0 0 0 7.875-7.875V9a1.125 1.125 0 0 1 .502-.938l.845-.562Z'
    />{' '}
  </svg>
);

export default Bird;
