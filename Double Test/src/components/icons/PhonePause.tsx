'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const PhonePause: React.FC<IconProps> = ({
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
      d='m20.25 15.262-4.415-1.978-.017-.007a1.865 1.865 0 0 0-1.886.242L11.841 15.3c-1.22-.661-2.478-1.91-3.14-3.114l1.787-2.124a.988.988 0 0 0 .08-.108 1.874 1.874 0 0 0 .155-1.765l-.007-.017L8.738 3.75a1.88 1.88 0 0 0-1.949-1.111 5.65 5.65 0 0 0-4.914 5.61c0 7.652 6.224 13.876 13.875 13.876a5.65 5.65 0 0 0 5.61-4.914 1.88 1.88 0 0 0-1.11-1.948Zm-4.5 4.613A11.64 11.64 0 0 1 4.125 8.25a3.4 3.4 0 0 1 2.67-3.331l1.764 3.938-1.796 2.137a.837.837 0 0 0-.08.108 1.875 1.875 0 0 0-.12 1.843c.883 1.807 2.702 3.615 4.529 4.5a1.875 1.875 0 0 0 1.845-.136 1.07 1.07 0 0 0 .105-.08l2.102-1.787 3.938 1.763a3.403 3.403 0 0 1-3.332 2.67ZM17.625 9.75V4.5a1.125 1.125 0 1 1 2.25 0v5.25a1.125 1.125 0 1 1-2.25 0Zm-3.75 0V4.5a1.125 1.125 0 1 1 2.25 0v5.25a1.125 1.125 0 1 1-2.25 0Z'
    />{' '}
  </svg>
);

export default PhonePause;
