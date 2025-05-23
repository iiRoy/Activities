'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const WifiX: React.FC<IconProps> = ({
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
      d='M13.5 19.125a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM20.344 7.5l1.455-1.454a1.127 1.127 0 1 0-1.594-1.594L18.75 5.906l-1.454-1.452a1.127 1.127 0 1 0-1.594 1.594L17.156 7.5l-1.452 1.454a1.127 1.127 0 1 0 1.594 1.594l1.452-1.454 1.454 1.455a1.124 1.124 0 0 0 1.594 0 1.125 1.125 0 0 0 0-1.594L20.344 7.5Zm-3.928 7.06a7.5 7.5 0 0 0-8.825 0 1.125 1.125 0 0 0 1.325 1.818 5.25 5.25 0 0 1 6.175 0 1.126 1.126 0 0 0 1.325-1.819Zm-3.291-9.31A1.125 1.125 0 0 0 12 4.125 16.525 16.525 0 0 0 1.537 7.867a1.125 1.125 0 0 0 1.427 1.739A14.272 14.272 0 0 1 12 6.375a1.125 1.125 0 0 0 1.125-1.125Zm0 4.5A1.125 1.125 0 0 0 12 8.625a11.874 11.874 0 0 0-7.448 2.591 1.125 1.125 0 0 0 1.396 1.764A9.646 9.646 0 0 1 12 10.875a1.125 1.125 0 0 0 1.125-1.125Z'
    />{' '}
  </svg>
);

export default WifiX;
