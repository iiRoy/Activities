'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const HeartBreak: React.FC<IconProps> = ({
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
      d='M16.688 3.375a6.15 6.15 0 0 0-4.376 1.812L12 5.5l-.312-.312A6.187 6.187 0 0 0 1.125 9.562c0 6.782 9.92 12.201 10.342 12.429a1.125 1.125 0 0 0 1.066 0c.422-.228 10.342-5.647 10.342-12.428a6.195 6.195 0 0 0-6.188-6.188Zm-.515 13.346A30.812 30.812 0 0 1 12 19.703a30.811 30.811 0 0 1-4.173-2.982c-2.031-1.743-4.452-4.4-4.452-7.159a3.937 3.937 0 0 1 6.722-2.784l.31.312-.706.705a1.125 1.125 0 0 0 0 1.594l2.035 2.034-1.285 1.284a1.125 1.125 0 0 0 .797 1.924 1.126 1.126 0 0 0 .797-.33l2.08-2.08a1.125 1.125 0 0 0 0-1.594L12.093 8.59l1.81-1.812a3.938 3.938 0 0 1 6.721 2.785c0 2.758-2.42 5.415-4.452 7.158Z'
    />{' '}
  </svg>
);

export default HeartBreak;
