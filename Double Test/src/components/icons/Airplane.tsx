'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Airplane: React.FC<IconProps> = ({
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
      d='m22.253 11.744-6.878-3.44V4.5a3.375 3.375 0 0 0-6.75 0v3.804l-6.878 3.44a1.124 1.124 0 0 0-.622 1.006v3a1.125 1.125 0 0 0 1.345 1.103l6.155-1.23v1.158l-1.17 1.173a1.124 1.124 0 0 0-.33.796v3a1.125 1.125 0 0 0 1.543 1.044L12 21.461l3.332 1.333a1.125 1.125 0 0 0 1.543-1.044v-3a1.126 1.126 0 0 0-.33-.796l-1.17-1.173v-1.158l6.155 1.23a1.124 1.124 0 0 0 1.345-1.103v-3a1.124 1.124 0 0 0-.622-1.006Zm-1.628 2.633-6.155-1.23a1.124 1.124 0 0 0-1.345 1.103v3a1.126 1.126 0 0 0 .33.796l1.17 1.173v.873l-2.207-.884a1.125 1.125 0 0 0-.836 0l-2.207.88v-.87l1.17-1.17a1.124 1.124 0 0 0 .33-.798v-3a1.127 1.127 0 0 0-1.345-1.103l-6.155 1.23v-.931l6.878-3.44A1.124 1.124 0 0 0 10.875 9V4.5a1.125 1.125 0 1 1 2.25 0V9a1.125 1.125 0 0 0 .622 1.006l6.878 3.44v.931Z'
    />{' '}
  </svg>
);

export default Airplane;
