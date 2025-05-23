'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const MaskHappy: React.FC<IconProps> = ({
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
      d='M20.558 2.953a1.875 1.875 0 0 0-1.736-.2c-1.29.502-3.9 1.344-6.822 1.344s-5.531-.844-6.822-1.345A1.875 1.875 0 0 0 2.625 4.5v5.228c0 3.435.928 6.68 2.614 9.136 1.774 2.587 4.175 4.011 6.761 4.011 2.586 0 4.987-1.424 6.761-4.009 1.686-2.46 2.614-5.7 2.614-9.136V4.5a1.876 1.876 0 0 0-.817-1.547ZM19.125 9.73c0 2.985-.788 5.778-2.22 7.863-1.343 1.955-3.083 3.032-4.905 3.032s-3.563-1.077-4.906-3.032c-1.43-2.085-2.219-4.878-2.219-7.863V5.043C6.43 5.6 9.063 6.35 12 6.35c2.937 0 5.57-.75 7.125-1.307V9.73ZM15.5 15.625a1.125 1.125 0 0 1-.168 1.582 5.336 5.336 0 0 1-6.664 0 1.125 1.125 0 0 1 1.414-1.75 3.086 3.086 0 0 0 3.836 0 1.125 1.125 0 0 1 1.582.168Zm-2.573-3.329a1.125 1.125 0 0 1 .339-1.554 3.907 3.907 0 0 1 3.677-.287 1.125 1.125 0 1 1-.886 2.068 1.83 1.83 0 0 0-.682-.148 1.793 1.793 0 0 0-.893.26 1.126 1.126 0 0 1-1.555-.339Zm-4.302.079a1.822 1.822 0 0 0-.682.149 1.123 1.123 0 0 1-1.477-.59 1.125 1.125 0 0 1 .59-1.478 3.901 3.901 0 0 1 3.678.281 1.125 1.125 0 1 1-1.218 1.893 1.801 1.801 0 0 0-.891-.255Z'
    />{' '}
  </svg>
);

export default MaskHappy;
