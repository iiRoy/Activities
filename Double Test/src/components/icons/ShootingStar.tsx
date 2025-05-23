'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ShootingStar: React.FC<IconProps> = ({
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
      d='M22.796 6.455a1.631 1.631 0 0 0-1.43-1.125l-3.237-.255-1.243-2.95a1.642 1.642 0 0 0-3.022 0L12.62 5.07l-3.236.255a1.63 1.63 0 0 0-.93 2.87l2.453 2.072-.75 3.094a1.636 1.636 0 0 0 2.437 1.781l2.78-1.675 2.774 1.67a1.637 1.637 0 0 0 2.438-1.781l-.75-3.094L22.29 8.19a1.622 1.622 0 0 0 .506-1.736ZM17.86 9a1.124 1.124 0 0 0-.367 1.125l.562 2.335-2.1-1.265a1.13 1.13 0 0 0-1.161 0l-2.101 1.265.562-2.335A1.125 1.125 0 0 0 12.886 9l-1.823-1.549 2.421-.187a1.125 1.125 0 0 0 .948-.685l.943-2.248.948 2.245a1.125 1.125 0 0 0 .948.684l2.42.188L17.86 9ZM3.047 17.299a1.127 1.127 0 1 1-1.594-1.594l4.853-4.852a1.127 1.127 0 0 1 1.593 1.594L3.047 17.3Zm5.961-.804a1.124 1.124 0 0 1 0 1.594l-4.461 4.463a1.129 1.129 0 0 1-1.838-.366 1.127 1.127 0 0 1 .244-1.228l4.463-4.462a1.125 1.125 0 0 1 1.591-.003l.001.002Zm5.854.897a1.125 1.125 0 0 1 0 1.593L11.3 22.548a1.127 1.127 0 1 1-1.594-1.594l3.562-3.562a1.124 1.124 0 0 1 1.593-.003l.001.003Z'
    />{' '}
  </svg>
);

export default ShootingStar;
