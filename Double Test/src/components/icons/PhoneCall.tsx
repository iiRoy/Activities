'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const PhoneCall: React.FC<IconProps> = ({
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
      d='M13.163 4.21a1.125 1.125 0 0 1 1.378-.797 8.449 8.449 0 0 1 6.046 6.046 1.126 1.126 0 1 1-2.174.582 6.227 6.227 0 0 0-4.454-4.454 1.125 1.125 0 0 1-.796-1.378Zm8.198 13a5.65 5.65 0 0 1-5.611 4.915c-7.65 0-13.875-6.224-13.875-13.875a5.65 5.65 0 0 1 4.914-5.61 1.88 1.88 0 0 1 1.949 1.11l1.979 4.418a1.876 1.876 0 0 1-.148 1.782.989.989 0 0 1-.08.108l-1.787 2.13c.662 1.203 1.922 2.452 3.14 3.113l2.091-1.781a1.866 1.866 0 0 1 1.886-.242l.017.007 4.414 1.977a1.88 1.88 0 0 1 1.11 1.949Zm-2.28-.005-3.937-1.763-2.102 1.787a1.103 1.103 0 0 1-.104.08 1.875 1.875 0 0 1-1.846.128c-1.827-.88-3.646-2.688-4.53-4.5a1.875 1.875 0 0 1 .12-1.84c.025-.038.052-.074.081-.108l1.796-2.13L6.795 4.92a3.402 3.402 0 0 0-2.67 3.329A11.639 11.639 0 0 0 15.75 19.875a3.402 3.402 0 0 0 3.332-2.67Zm-6.178-8.067a3 3 0 0 1 1.96 1.96 1.125 1.125 0 0 0 2.145-.671 5.25 5.25 0 0 0-3.43-3.43 1.125 1.125 0 1 0-.675 2.146v-.005Z'
    />{' '}
  </svg>
);

export default PhoneCall;
