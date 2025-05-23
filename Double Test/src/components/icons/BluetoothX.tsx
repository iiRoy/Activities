'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const BluetoothX: React.FC<IconProps> = ({
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
      d='m17.175 15.6-4.8-3.6 1.088-.817a1.125 1.125 0 1 0-1.35-1.8l-.488.367v-4.5l.488.367a1.125 1.125 0 0 0 1.35-1.8L11.175 2.1a1.125 1.125 0 0 0-1.8.9v6.75l-4.2-3.15a1.125 1.125 0 1 0-1.35 1.8l4.8 3.6-4.8 3.6a1.125 1.125 0 1 0 1.35 1.8l4.2-3.15V21a1.125 1.125 0 0 0 1.8.9l6-4.5a1.125 1.125 0 0 0 0-1.8Zm-5.55 3.15v-4.5l3 2.25-3 2.25Zm10.92-9.796a1.127 1.127 0 1 1-1.593 1.594L19.5 9.094l-1.454 1.455a1.124 1.124 0 0 1-1.594 0 1.124 1.124 0 0 1 0-1.594L17.906 7.5l-1.451-1.454a1.127 1.127 0 0 1 1.594-1.594L19.5 5.906l1.454-1.455a1.127 1.127 0 1 1 1.594 1.594L21.094 7.5l1.452 1.454Z'
    />{' '}
  </svg>
);

export default BluetoothX;
