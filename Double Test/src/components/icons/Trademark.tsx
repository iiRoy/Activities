'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Trademark: React.FC<IconProps> = ({
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
      d='M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875Zm0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875Zm6-9.75v3.75a1.125 1.125 0 1 1-2.25 0v-1.304l-.768.656a1.125 1.125 0 0 1-1.464 0l-.768-.656v1.304a1.125 1.125 0 1 1-2.25 0V11.25H9.375v2.625a1.125 1.125 0 0 1-2.25 0V11.25H6.75a1.125 1.125 0 1 1 0-2.25h4.875c.269 0 .528.096.732.27l1.893 1.624 1.893-1.623a1.125 1.125 0 0 1 1.857.854Z'
    />{' '}
  </svg>
);

export default Trademark;
