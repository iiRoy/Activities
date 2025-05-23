'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Flower: React.FC<IconProps> = ({
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
      d='M20.216 12a4.125 4.125 0 0 0-4.108-7.116 4.125 4.125 0 0 0-8.216 0A4.125 4.125 0 0 0 3.784 12a4.125 4.125 0 0 0 4.108 7.115 4.125 4.125 0 0 0 8.216 0A4.125 4.125 0 0 0 20.216 12Zm-10.091 0a1.875 1.875 0 1 1 3.751 0 1.875 1.875 0 0 1-3.751 0Zm6.783-4.999a1.875 1.875 0 1 1 1.875 3.248c-.249.143-.986.457-2.822.602a4.132 4.132 0 0 0-.986-1.705c1.043-1.518 1.684-2.001 1.933-2.145ZM12 3.375a1.875 1.875 0 0 1 1.875 1.875c0 .287-.094 1.083-.89 2.745a4.105 4.105 0 0 0-1.968 0c-.798-1.662-.892-2.458-.892-2.745A1.875 1.875 0 0 1 12 3.375ZM4.53 7.688A1.875 1.875 0 0 1 7.093 7c.249.144.89.627 1.933 2.145-.461.48-.8 1.065-.986 1.705-1.836-.145-2.573-.459-2.822-.602a1.875 1.875 0 0 1-.686-2.561Zm2.562 9.31a1.876 1.876 0 1 1-1.875-3.247c.249-.143.986-.457 2.822-.602.187.64.525 1.224.986 1.705-1.043 1.518-1.684 2.001-1.933 2.145ZM12 20.626a1.875 1.875 0 0 1-1.875-1.875c0-.287.094-1.083.89-2.745.646.16 1.322.16 1.968 0 .798 1.662.892 2.458.892 2.745A1.875 1.875 0 0 1 12 20.625Zm7.47-4.313a1.875 1.875 0 0 1-2.562.687c-.249-.144-.89-.627-1.933-2.145.461-.48.8-1.065.986-1.705 1.836.145 2.573.459 2.822.602a1.875 1.875 0 0 1 .686 2.562Z'
    />{' '}
  </svg>
);

export default Flower;
