'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Books: React.FC<IconProps> = ({
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
      d='M22.085 18.162 18.973 3.368a1.875 1.875 0 0 0-2.227-1.45l-4.389.942a1.858 1.858 0 0 0-1.031.624 1.875 1.875 0 0 0-1.576-.859h-4.5A1.875 1.875 0 0 0 3.375 4.5v15a1.875 1.875 0 0 0 1.875 1.875h4.5a1.875 1.875 0 0 0 1.875-1.875V8.46l2.402 11.422a1.874 1.874 0 0 0 2.227 1.45l4.389-.942a1.885 1.885 0 0 0 1.442-2.228Zm-8.192-9.851 3.656-.786.237 1.125-3.656.786-.237-1.125Zm.7 3.328 3.655-.786.86 4.086-3.657.786-.859-4.086Zm2.255-7.443.237 1.125-3.656.786-.237-1.125 3.656-.786ZM5.625 8.25h3.75v7.5h-3.75v-7.5Zm3.75-3.375V6h-3.75V4.875h3.75Zm-3.75 14.25V18h3.75v1.125h-3.75Zm10.527-.071-.237-1.125 3.656-.786.237 1.125-3.656.786Z'
    />{' '}
  </svg>
);

export default Books;
