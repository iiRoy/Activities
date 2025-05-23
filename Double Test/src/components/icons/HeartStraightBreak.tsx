'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const HeartStraightBreak: React.FC<IconProps> = ({
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
      d='M21.172 5.078a5.813 5.813 0 0 0-8.212-.008l-.96.924-.96-.924a5.812 5.812 0 0 0-8.218 8.222l8.376 8.497a1.125 1.125 0 0 0 1.604 0l8.37-8.492a5.812 5.812 0 0 0 0-8.22Zm-1.593 6.634L12.003 19.4 4.42 11.712a3.562 3.562 0 1 1 5.04-5.038l.015.015.907.873-.656.634a1.125 1.125 0 0 0-.016 1.606L11.906 12l-.705.704a1.127 1.127 0 1 0 1.594 1.594l1.5-1.5a1.125 1.125 0 0 0 0-1.594l-2.19-2.189 2.426-2.332.015-.015a3.561 3.561 0 1 1 5.033 5.044Z'
    />{' '}
  </svg>
);

export default HeartStraightBreak;
