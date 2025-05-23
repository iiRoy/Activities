'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const IdentificationCard: React.FC<IconProps> = ({
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
      d='M13.875 10.125A1.125 1.125 0 0 1 15 9h2.625a1.125 1.125 0 0 1 0 2.25H15a1.125 1.125 0 0 1-1.125-1.125Zm3.75 2.625H15.75a1.125 1.125 0 1 0 0 2.25h1.875a1.125 1.125 0 1 0 0-2.25Zm4.5-7.5v13.5a1.875 1.875 0 0 1-1.875 1.875H3.75a1.875 1.875 0 0 1-1.875-1.875V5.25A1.875 1.875 0 0 1 3.75 3.375h16.5a1.875 1.875 0 0 1 1.875 1.875Zm-2.25.375H4.125v12.75h15.75V5.625ZM5.464 14.941c.27-.639.697-1.2 1.242-1.629a3.375 3.375 0 1 1 5.338 0c.545.43.973.99 1.243 1.629a1.125 1.125 0 0 1-2.076.868c-.291-.697-1.047-1.184-1.836-1.184-.79 0-1.544.488-1.837 1.184a1.125 1.125 0 1 1-2.074-.868ZM8.25 11.25a1.125 1.125 0 1 0 2.25 0 1.125 1.125 0 0 0-2.25 0Z'
    />{' '}
  </svg>
);

export default IdentificationCard;
