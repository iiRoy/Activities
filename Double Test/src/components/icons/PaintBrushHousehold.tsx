'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const PaintBrushHousehold: React.FC<IconProps> = ({
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
      d='M21.888 2.112a3.375 3.375 0 0 0-4.773 0l-.037.038-4.927 5.407-.544-.543a2.626 2.626 0 0 0-3.712 0l-7.19 7.19a1.125 1.125 0 0 0 0 1.594l7.5 7.5a1.125 1.125 0 0 0 1.594 0l7.19-7.19a2.625 2.625 0 0 0 0-3.713l-.543-.544 5.407-4.928.038-.036a3.374 3.374 0 0 0-.003-4.775ZM9 20.906l-.844-.843 1.642-1.643a1.127 1.127 0 1 0-1.594-1.594L6.562 18.47l-1.03-1.032 1.642-1.642a1.127 1.127 0 1 0-1.594-1.594l-1.643 1.643L3.095 15l3.656-3.656 5.906 5.906L9 20.906ZM20.312 5.28l-6.256 5.701a1.125 1.125 0 0 0-.038 1.627l1.377 1.377a.375.375 0 0 1 0 .53l-1.145 1.142L8.344 9.75l1.144-1.144a.375.375 0 0 1 .53 0l1.376 1.377a1.125 1.125 0 0 0 1.628-.038l5.7-6.256a1.127 1.127 0 0 1 1.595 1.594l-.005-.004Z'
    />{' '}
  </svg>
);

export default PaintBrushHousehold;
