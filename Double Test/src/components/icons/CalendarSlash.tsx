'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const CalendarSlash: React.FC<IconProps> = ({
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
      d='M5.332 2.993a1.125 1.125 0 0 0-.832-.368A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.125 1.125 0 0 0 .832-1.882l-15-16.5Zm-.457 16.132V5.835l12.082 13.29H4.875ZM21.375 4.5v11a1.125 1.125 0 1 1-2.25 0V9.376h-5.467a1.125 1.125 0 0 1 0-2.25h5.467v-2.25h-1.5a1.125 1.125 0 1 1-2.25 0H9.568a1.125 1.125 0 0 1 0-2.25h5.807V2.25a1.125 1.125 0 1 1 2.25 0v.375H19.5A1.875 1.875 0 0 1 21.375 4.5Z'
    />{' '}
  </svg>
);

export default CalendarSlash;
