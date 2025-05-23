'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Backspace: React.FC<IconProps> = ({
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
      d='M20.25 3.375H6.425a1.883 1.883 0 0 0-1.608.91L.535 11.422a1.125 1.125 0 0 0 0 1.156l4.282 7.137a1.883 1.883 0 0 0 1.608.91H20.25a1.875 1.875 0 0 0 1.875-1.875V5.25a1.875 1.875 0 0 0-1.875-1.875Zm-.375 15H6.637L2.813 12l3.825-6.375h13.237v12.75Zm-10.17-4.92L11.155 12 9.7 10.546a1.127 1.127 0 1 1 1.594-1.594l1.455 1.454 1.454-1.455a1.127 1.127 0 1 1 1.594 1.594L14.344 12l1.455 1.454a1.127 1.127 0 0 1-1.594 1.594l-1.455-1.454-1.454 1.455a1.127 1.127 0 1 1-1.594-1.594h.002Z'
    />{' '}
  </svg>
);

export default Backspace;
