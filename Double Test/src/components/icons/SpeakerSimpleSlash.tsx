'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const SpeakerSimpleSlash: React.FC<IconProps> = ({
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
      d='M23.25 8.25v7.5a1.125 1.125 0 1 1-2.25 0v-7.5a1.125 1.125 0 1 1 2.25 0Zm-2.168 11.243a1.126 1.126 0 1 1-1.665 1.514l-3.292-3.622V21a1.125 1.125 0 0 1-1.816.888l-6.445-5.013H3.75A1.875 1.875 0 0 1 1.875 15V9A1.875 1.875 0 0 1 3.75 7.125h3.048l-2.38-2.618a1.125 1.125 0 0 1 1.664-1.514l15 16.5Zm-7.207-4.587L8.843 9.375H4.125v5.25H8.25c.25 0 .493.084.69.237l4.935 3.837v-3.793Zm-1.327-8.578 1.327-1.031v3.6a1.125 1.125 0 1 0 2.25 0V3a1.124 1.124 0 0 0-1.816-.888l-3.141 2.444a1.125 1.125 0 1 0 1.38 1.776v-.004Zm6.202 7.823a1.125 1.125 0 0 0 1.125-1.125V9.75a1.125 1.125 0 1 0-2.25 0v3.276a1.125 1.125 0 0 0 1.125 1.125Z'
    />{' '}
  </svg>
);

export default SpeakerSimpleSlash;
