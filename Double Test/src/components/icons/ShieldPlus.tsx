'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ShieldPlus: React.FC<IconProps> = ({
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
      d='M7.875 12A1.125 1.125 0 0 1 9 10.875h1.875V9a1.125 1.125 0 1 1 2.25 0v1.875H15a1.125 1.125 0 1 1 0 2.25h-1.875V15a1.125 1.125 0 1 1-2.25 0v-1.875H9A1.125 1.125 0 0 1 7.875 12Zm13.5-6.75v5.25c0 5.09-2.468 8.177-4.538 9.87-2.222 1.819-4.447 2.438-4.54 2.466a1.135 1.135 0 0 1-.593 0c-.094-.027-2.319-.647-4.542-2.465-2.07-1.694-4.537-4.781-4.537-9.871V5.25A1.875 1.875 0 0 1 4.5 3.375h15a1.875 1.875 0 0 1 1.875 1.875Zm-2.25.375H4.875V10.5c0 3.348 1.227 6.065 3.648 8.077A11.83 11.83 0 0 0 12 20.567a11.842 11.842 0 0 0 3.477-1.99c2.42-2.012 3.648-4.73 3.648-8.077V5.625Z'
    />{' '}
  </svg>
);

export default ShieldPlus;
