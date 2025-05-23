'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const PaypalLogo: React.FC<IconProps> = ({
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
      d='M20.932 8.539a5.608 5.608 0 0 0-1.829-1.526A5.625 5.625 0 0 0 13.5 1.875H7.875a1.875 1.875 0 0 0-1.819 1.42l-3.375 13.5a1.875 1.875 0 0 0 1.819 2.33h2.1l-.169.67a1.875 1.875 0 0 0 1.819 2.33h2.953a1.876 1.876 0 0 0 1.819-1.42l.771-3.08H16.5a5.625 5.625 0 0 0 4.433-9.086h-.001ZM8.168 4.125H13.5a3.353 3.353 0 0 1 2.66 1.298c.226.289.404.612.527.958-.061 0-.122-.006-.187-.006h-5.25a1.875 1.875 0 0 0-1.819 1.42l-2.27 9.08h-2.18l3.187-12.75Zm8.51 4.505a3.368 3.368 0 0 1-3.178 2.245h-2.52l.563-2.25H16.5c.058 0 .118 0 .177.005Zm3.093 4.188a3.369 3.369 0 0 1-3.271 2.557h-3a1.876 1.876 0 0 0-1.819 1.42l-.77 3.08h-2.18l1.687-6.75H13.5a5.615 5.615 0 0 0 5.26-3.633 3.387 3.387 0 0 1 1.014 3.326h-.003Z'
    />{' '}
  </svg>
);

export default PaypalLogo;
