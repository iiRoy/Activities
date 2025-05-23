'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const CaretDoubleRight: React.FC<IconProps> = ({
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
      d='m13.546 12.796-7.5 7.5a1.125 1.125 0 0 1-1.924-.797 1.127 1.127 0 0 1 .33-.797L11.156 12 4.454 5.296a1.127 1.127 0 1 1 1.594-1.594l7.5 7.5a1.125 1.125 0 0 1-.002 1.594Zm7.5-1.594-7.5-7.5a1.126 1.126 0 0 0-1.924.797 1.128 1.128 0 0 0 .33.797L18.656 12l-6.705 6.704a1.126 1.126 0 1 0 1.594 1.594l7.5-7.5a1.127 1.127 0 0 0 0-1.594v-.002Z'
    />{' '}
  </svg>
);

export default CaretDoubleRight;
