'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const WindowsLogo: React.FC<IconProps> = ({
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
      d='M9.346 4.864a1.125 1.125 0 0 0-.923-.244L2.798 5.643a1.125 1.125 0 0 0-.923 1.107v3.375A1.125 1.125 0 0 0 3 11.25h5.625a1.125 1.125 0 0 0 1.125-1.125V5.727a1.125 1.125 0 0 0-.404-.863ZM7.5 9H4.125V7.688L7.5 7.074V9Zm12.72-6.113a1.125 1.125 0 0 0-.922-.244l-7.125 1.295a1.125 1.125 0 0 0-.923 1.108v5.079a1.125 1.125 0 0 0 1.125 1.125H19.5a1.125 1.125 0 0 0 1.125-1.125V3.75a1.123 1.123 0 0 0-.404-.863ZM18.376 9H13.5V5.984l4.875-.886V9Zm-9.75 3.75H3a1.125 1.125 0 0 0-1.125 1.125v3.375a1.125 1.125 0 0 0 .923 1.107l5.625 1.023a1.124 1.124 0 0 0 1.327-1.107v-4.398a1.125 1.125 0 0 0-1.125-1.125ZM7.5 16.925l-3.375-.613V15H7.5v1.925Zm12-4.175h-7.125a1.125 1.125 0 0 0-1.125 1.125v5.08a1.126 1.126 0 0 0 .923 1.108l7.125 1.295a1.127 1.127 0 0 0 1.327-1.108v-6.375A1.125 1.125 0 0 0 19.5 12.75Zm-1.125 6.152-4.875-.886V15h4.875v3.902Z'
    />{' '}
  </svg>
);

export default WindowsLogo;
