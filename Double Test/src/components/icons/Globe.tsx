'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Globe: React.FC<IconProps> = ({
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
      d='M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875Zm0 17.531a10.632 10.632 0 0 1-1.912-3.281h3.827c-.247.678-.561 1.33-.937 1.947-.29.47-.616.917-.978 1.334Zm-2.483-5.531a12.696 12.696 0 0 1 0-3.75h4.968a12.698 12.698 0 0 1 0 3.75H9.517ZM4.125 12c0-.632.076-1.261.228-1.875h2.89a15.06 15.06 0 0 0 0 3.75h-2.89A7.827 7.827 0 0 1 4.125 12ZM12 4.594a10.63 10.63 0 0 1 1.912 3.281h-3.825c.247-.678.561-1.33.937-1.947.289-.47.615-.917.976-1.334Zm4.756 5.531h2.89a7.829 7.829 0 0 1 0 3.75h-2.888a15.054 15.054 0 0 0 0-3.75h-.002Zm1.947-2.25h-2.418a13.202 13.202 0 0 0-1.453-3.221 7.923 7.923 0 0 1 3.873 3.221h-.002ZM9.168 4.654a13.202 13.202 0 0 0-1.453 3.221h-2.42a7.923 7.923 0 0 1 3.873-3.221ZM5.295 16.125h2.42a13.203 13.203 0 0 0 1.453 3.221 7.923 7.923 0 0 1-3.873-3.221Zm9.537 3.221a13.203 13.203 0 0 0 1.453-3.221h2.42a7.923 7.923 0 0 1-3.873 3.221Z'
    />{' '}
  </svg>
);

export default Globe;
