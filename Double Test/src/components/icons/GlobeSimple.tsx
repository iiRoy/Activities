'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const GlobeSimple: React.FC<IconProps> = ({
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
      d='M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875Zm7.793 9h-2.96a13.528 13.528 0 0 0-2-6.221 7.895 7.895 0 0 1 4.96 6.221ZM12 19.406c-.877-1.013-2.293-3.106-2.573-6.281h5.15a11.226 11.226 0 0 1-1.604 4.947c-.288.47-.613.917-.973 1.334Zm-2.573-8.531a11.22 11.22 0 0 1 1.604-4.947c.286-.47.61-.917.969-1.334.877 1.013 2.293 3.106 2.573 6.281H9.427Zm-.26-6.221a13.528 13.528 0 0 0-2 6.221h-2.96a7.896 7.896 0 0 1 4.96-6.221Zm-4.96 8.471h2.96a13.529 13.529 0 0 0 2 6.221 7.895 7.895 0 0 1-4.96-6.221Zm10.625 6.221a13.528 13.528 0 0 0 2.002-6.221h2.96a7.895 7.895 0 0 1-4.962 6.221Z'
    />{' '}
  </svg>
);

export default GlobeSimple;
