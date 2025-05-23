'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const StarFour: React.FC<IconProps> = ({
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
      d='M21.643 10.242 15.861 8.14l-2.103-5.782a1.87 1.87 0 0 0-3.516 0L8.14 8.139l-5.782 2.103a1.87 1.87 0 0 0 0 3.516l5.782 2.103 2.103 5.782a1.87 1.87 0 0 0 3.516 0l2.103-5.782 5.782-2.103a1.871 1.871 0 0 0 0-3.516ZM14.6 13.926a1.124 1.124 0 0 0-.673.673L12 19.895l-1.926-5.296a1.125 1.125 0 0 0-.673-.673L4.105 12l5.296-1.926a1.124 1.124 0 0 0 .673-.673L12 4.105l1.926 5.296a1.125 1.125 0 0 0 .673.673L19.895 12l-5.296 1.926Z'
    />{' '}
  </svg>
);

export default StarFour;
