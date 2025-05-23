'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const CurrencyKrw: React.FC<IconProps> = ({
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
      d='M22.5 11.625h-1.516l1.808-4.451a1.125 1.125 0 0 0-2.085-.844l-2.156 5.298h-3.356L13.039 6.33a1.125 1.125 0 0 0-2.085 0l-2.149 5.295h-3.36L3.289 6.327a1.125 1.125 0 0 0-2.085.844l1.812 4.454H1.5a1.125 1.125 0 1 0 0 2.25h2.43l2.156 5.299a1.125 1.125 0 0 0 2.085 0l2.157-5.299h3.36l2.156 5.299a1.125 1.125 0 0 0 2.085 0l2.156-5.299H22.5a1.125 1.125 0 1 0 0-2.25ZM7.125 15.761l-.766-1.886h1.532l-.766 1.886Zm4.11-4.136L12 9.74l.766 1.885h-1.532Zm5.64 4.136-.766-1.886h1.532l-.766 1.886Z'
    />{' '}
  </svg>
);

export default CurrencyKrw;
