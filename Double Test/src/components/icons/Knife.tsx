'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Knife: React.FC<IconProps> = ({
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
      d='M22.003 2.747a2.984 2.984 0 0 0-4.219 0L1.455 19.084a1.125 1.125 0 0 0 .542 1.893c1.141.264 2.309.398 3.48.398 3.16 0 6.32-.977 9.29-2.894 3.03-1.956 4.797-4.19 4.87-4.284a1.125 1.125 0 0 0-.094-1.49l-1.637-1.645 4.097-4.097a2.987 2.987 0 0 0 0-4.218Zm-8.515 13.88c-2.894 1.853-5.868 2.686-8.868 2.474l9.067-9.07 1.829 1.83 1.687 1.687a20.314 20.314 0 0 1-3.715 3.08Zm6.924-11.25-4.1 4.092-1.03-1.031 4.096-4.1A.731.731 0 0 1 20.41 5.37l.003.008Z'
    />{' '}
  </svg>
);

export default Knife;
