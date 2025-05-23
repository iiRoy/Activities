'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Repeat: React.FC<IconProps> = ({
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
      d='M1.875 12A7.132 7.132 0 0 1 9 4.875h9.281l-.33-.33a1.127 1.127 0 0 1 1.594-1.593l2.25 2.25a1.125 1.125 0 0 1 0 1.594l-2.25 2.25a1.127 1.127 0 0 1-1.594-1.594l.33-.327H9A4.88 4.88 0 0 0 4.125 12a1.125 1.125 0 0 1-2.25 0ZM21 10.875A1.125 1.125 0 0 0 19.875 12 4.881 4.881 0 0 1 15 16.875H5.719l.33-.33a1.128 1.128 0 0 0-1.594-1.593l-2.25 2.25a1.127 1.127 0 0 0 0 1.594l2.25 2.25a1.127 1.127 0 0 0 1.594-1.594l-.33-.327H15A7.132 7.132 0 0 0 22.125 12 1.125 1.125 0 0 0 21 10.875Z'
    />{' '}
  </svg>
);

export default Repeat;
