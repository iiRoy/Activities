'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Flag: React.FC<IconProps> = ({
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
      d='M3.763 4.395a1.125 1.125 0 0 0-.388.855V21a1.125 1.125 0 1 0 2.25 0v-3.964c2.141-1.605 3.947-.855 6.626.469 1.522.75 3.257 1.613 5.138 1.613 1.38 0 2.838-.464 4.348-1.77a1.125 1.125 0 0 0 .388-.848V5.25a1.125 1.125 0 0 0-1.862-.85c-2.316 2.007-4.175 1.248-7.014-.158-2.637-1.31-5.92-2.935-9.486.153Zm16.112 11.567c-2.141 1.606-3.947.854-6.626-.469-2.171-1.078-4.78-2.368-7.624-1.068V5.783c2.141-1.605 3.947-.855 6.626.47 1.522.75 3.257 1.612 5.138 1.612a5.906 5.906 0 0 0 2.486-.545v8.642Z'
    />{' '}
  </svg>
);

export default Flag;
