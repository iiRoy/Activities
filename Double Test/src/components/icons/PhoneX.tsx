'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const PhoneX: React.FC<IconProps> = ({
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
      d='M13.455 8.954 14.906 7.5l-1.451-1.455a1.127 1.127 0 0 1 1.594-1.594L16.5 5.906l1.455-1.455a1.127 1.127 0 1 1 1.594 1.594L18.094 7.5l1.455 1.454a1.127 1.127 0 1 1-1.594 1.594L16.5 9.094l-1.454 1.454a1.127 1.127 0 0 1-1.594-1.594h.003Zm7.906 8.257a5.65 5.65 0 0 1-5.611 4.914c-7.65 0-13.875-6.224-13.875-13.875a5.65 5.65 0 0 1 4.914-5.611A1.88 1.88 0 0 1 8.738 3.75l1.979 4.418a1.876 1.876 0 0 1-.148 1.782 1.257 1.257 0 0 1-.08.108l-1.787 2.13c.662 1.203 1.922 2.452 3.14 3.113l2.091-1.781c.034-.028.069-.055.105-.08a1.869 1.869 0 0 1 1.781-.163l.017.007 4.414 1.978a1.88 1.88 0 0 1 1.11 1.949Zm-2.28-.006-3.937-1.763-2.102 1.787a1.07 1.07 0 0 1-.104.08 1.875 1.875 0 0 1-1.846.128c-1.827-.88-3.646-2.688-4.53-4.5a1.875 1.875 0 0 1 .12-1.84 1.13 1.13 0 0 1 .081-.11L8.56 8.859 6.795 4.921a3.402 3.402 0 0 0-2.67 3.329A11.64 11.64 0 0 0 15.75 19.875a3.403 3.403 0 0 0 3.332-2.67Z'
    />{' '}
  </svg>
);

export default PhoneX;
