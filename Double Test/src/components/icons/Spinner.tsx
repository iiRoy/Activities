'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Spinner: React.FC<IconProps> = ({
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
      d='M13.125 3v3a1.125 1.125 0 1 1-2.25 0V3a1.125 1.125 0 1 1 2.25 0Zm3.117 5.883a1.125 1.125 0 0 0 .796-.33L19.16 6.43a1.127 1.127 0 0 0-1.594-1.593l-2.119 2.124a1.125 1.125 0 0 0 .795 1.92ZM21 10.875h-3a1.125 1.125 0 1 0 0 2.25h3a1.125 1.125 0 1 0 0-2.25Zm-3.962 4.572a1.125 1.125 0 0 0-1.924.797 1.125 1.125 0 0 0 .33.797l2.122 2.122a1.127 1.127 0 0 0 1.594-1.594l-2.122-2.122ZM12 16.875A1.125 1.125 0 0 0 10.875 18v3a1.125 1.125 0 1 0 2.25 0v-3A1.125 1.125 0 0 0 12 16.875Zm-5.038-1.428L4.84 17.57a1.127 1.127 0 0 0 1.594 1.594l2.122-2.122a1.127 1.127 0 1 0-1.594-1.594ZM7.125 12A1.125 1.125 0 0 0 6 10.875H3a1.125 1.125 0 1 0 0 2.25h3A1.125 1.125 0 0 0 7.125 12Zm-.694-7.16a1.127 1.127 0 0 0-1.593 1.594l2.124 2.119a1.127 1.127 0 1 0 1.594-1.594L6.43 4.84Z'
    />{' '}
  </svg>
);

export default Spinner;
