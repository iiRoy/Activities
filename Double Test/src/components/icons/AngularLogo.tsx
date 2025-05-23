'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const AngularLogo: React.FC<IconProps> = ({
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
      d='m21.432 5.711-9-3.75a1.125 1.125 0 0 0-.866 0l-9 3.75A1.125 1.125 0 0 0 1.883 6.9l1.5 11.25a1.125 1.125 0 0 0 .612.857l7.5 3.75a1.125 1.125 0 0 0 1.007 0l7.5-3.75a1.125 1.125 0 0 0 .61-.857l1.5-11.25a1.125 1.125 0 0 0-.68-1.188Zm-2.963 11.55L12 20.49l-6.464-3.23-1.307-9.804L12 4.219l7.77 3.238-1.301 9.803Zm-7.452-9.558-3.75 6.75a1.126 1.126 0 0 0 1.968 1.094l.718-1.297h4.094l.72 1.296a1.126 1.126 0 1 0 1.968-1.093l-3.75-6.75a1.125 1.125 0 0 0-1.968 0ZM11.204 12 12 10.566 12.796 12h-1.592Z'
    />{' '}
  </svg>
);

export default AngularLogo;
