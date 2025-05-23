'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const AirplaneInFlight: React.FC<IconProps> = ({
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
      d='M21.375 20.25a1.125 1.125 0 0 1-1.125 1.125H6.75a1.125 1.125 0 1 1 0-2.25h13.5a1.125 1.125 0 0 1 1.125 1.125Zm2.25-7.5V15a1.125 1.125 0 0 1-1.125 1.125H5.725a4.099 4.099 0 0 1-3.95-2.94L.455 8.789A1.875 1.875 0 0 1 2.25 6.375H3c.298 0 .584.118.795.33l1.924 1.92H7.15l-.68-2.032a1.875 1.875 0 0 1 1.78-2.468H9c.298 0 .584.118.795.33l4.174 4.17H19.5a4.13 4.13 0 0 1 4.125 4.125Zm-2.25 0a1.875 1.875 0 0 0-1.875-1.875h-6a1.12 1.12 0 0 1-.795-.33L8.89 6.73l.888 2.665a1.125 1.125 0 0 1-1.068 1.48H5.25a1.126 1.126 0 0 1-.796-.33L2.85 8.94l1.08 3.6a1.865 1.865 0 0 0 1.795 1.335h15.65V12.75Z'
    />{' '}
  </svg>
);

export default AirplaneInFlight;
