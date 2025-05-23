'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const BatteryChargingVertical: React.FC<IconProps> = ({
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
      d='M14.457 12.533a1.125 1.125 0 0 1 .049 1.095l-1.5 3a1.126 1.126 0 1 1-2.012-1.006l.685-1.372H10.5a1.125 1.125 0 0 1-1.006-1.628l1.5-3a1.125 1.125 0 1 1 2.012 1.006L12.32 12h1.18a1.125 1.125 0 0 1 .957.533ZM9.75 2.25h4.5a1.125 1.125 0 0 0 0-2.25h-4.5a1.125 1.125 0 1 0 0 2.25Zm9.375 3.375v15.75A2.625 2.625 0 0 1 16.5 24h-9a2.625 2.625 0 0 1-2.625-2.625V5.625A2.625 2.625 0 0 1 7.5 3h9a2.625 2.625 0 0 1 2.625 2.625Zm-2.25 0a.375.375 0 0 0-.375-.375h-9a.375.375 0 0 0-.375.375v15.75a.375.375 0 0 0 .375.375h9a.375.375 0 0 0 .375-.375V5.625Z'
    />{' '}
  </svg>
);

export default BatteryChargingVertical;
