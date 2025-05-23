'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const LinkSimple: React.FC<IconProps> = ({
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
      d='m8.203 14.205 6-6a1.128 1.128 0 0 1 1.594 1.594l-6 6a1.127 1.127 0 1 1-1.594-1.594ZM20.484 3.517a5.633 5.633 0 0 0-7.956 0L9.704 6.338a1.127 1.127 0 0 0 1.594 1.594l2.819-2.818a3.376 3.376 0 1 1 4.775 4.774l-2.823 2.817a1.127 1.127 0 0 0 1.594 1.594l2.82-2.818a5.634 5.634 0 0 0-.003-7.96l.004-.004ZM12.705 16.07l-2.82 2.82a3.375 3.375 0 1 1-4.773-4.775l2.818-2.819a1.128 1.128 0 0 0-1.593-1.594L3.52 12.523a5.627 5.627 0 0 0 7.958 7.957l2.818-2.82a1.127 1.127 0 1 0-1.594-1.593l.003.002Z'
    />{' '}
  </svg>
);

export default LinkSimple;
