'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const GlobeSimpleX: React.FC<IconProps> = ({
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
      d='M21.046 16.546 19.594 18l1.455 1.454a1.124 1.124 0 0 1 0 1.594 1.124 1.124 0 0 1-1.594 0L18 19.594l-1.454 1.455a1.127 1.127 0 0 1-1.594-1.594L16.406 18l-1.455-1.454a1.127 1.127 0 0 1 1.594-1.594L18 16.406l1.454-1.455a1.124 1.124 0 0 1 1.594 0 1.124 1.124 0 0 1 0 1.594h-.002ZM22.125 12A1.125 1.125 0 0 1 21 13.125H9.426c.41 4.646 3.246 6.972 3.28 6.997A1.124 1.124 0 0 1 12 22.125 10.125 10.125 0 1 1 22.125 12Zm-7.293-7.346a13.528 13.528 0 0 1 2.002 6.221h2.96a7.895 7.895 0 0 0-4.962-6.221ZM11.03 5.928a11.227 11.227 0 0 0-1.604 4.947h5.15c-.28-3.178-1.696-5.27-2.573-6.281-.36.417-.686.863-.973 1.334Zm-6.822 4.947h2.96a13.528 13.528 0 0 1 2-6.221 7.896 7.896 0 0 0-4.96 6.221Zm2.96 2.25h-2.96a7.895 7.895 0 0 0 4.96 6.221 13.529 13.529 0 0 1-2-6.221Z'
    />{' '}
  </svg>
);

export default GlobeSimpleX;
