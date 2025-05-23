'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const PhoneOutgoing: React.FC<IconProps> = ({
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
      d='M13.455 10.545a1.125 1.125 0 0 1 0-1.594l2.576-2.576H15a1.125 1.125 0 1 1 0-2.25h3.75a1.125 1.125 0 0 1 1.125 1.125V9a1.125 1.125 0 1 1-2.25 0V7.969l-2.58 2.579a1.125 1.125 0 0 1-1.593 0l.003-.003Zm7.906 6.666a5.65 5.65 0 0 1-5.611 4.914c-7.65 0-13.875-6.224-13.875-13.875a5.65 5.65 0 0 1 4.914-5.61 1.88 1.88 0 0 1 1.949 1.11l1.979 4.418a1.876 1.876 0 0 1-.148 1.782 1.077 1.077 0 0 1-.08.108l-1.787 2.13c.662 1.203 1.922 2.452 3.14 3.113l2.091-1.781a1.866 1.866 0 0 1 1.886-.242l.017.007 4.414 1.977a1.88 1.88 0 0 1 1.11 1.949Zm-2.28-.006-3.937-1.763-2.102 1.787a1.103 1.103 0 0 1-.104.08 1.875 1.875 0 0 1-1.846.128c-1.827-.88-3.646-2.688-4.53-4.5a1.875 1.875 0 0 1 .12-1.84c.025-.038.052-.074.081-.108l1.796-2.13-1.764-3.937a3.402 3.402 0 0 0-2.67 3.328A11.639 11.639 0 0 0 15.75 19.875a3.402 3.402 0 0 0 3.332-2.67Z'
    />{' '}
  </svg>
);

export default PhoneOutgoing;
