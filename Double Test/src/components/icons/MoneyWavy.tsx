'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const MoneyWavy: React.FC<IconProps> = ({
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
      d='M23.096 5.302a1.125 1.125 0 0 0-1.09-.057c-3.889 1.902-6.694 1.004-9.663.053-3.11-.996-6.636-2.125-11.337.174a1.125 1.125 0 0 0-.631 1.012v11.26a1.125 1.125 0 0 0 1.62 1.01c3.888-1.902 6.693-1.003 9.662-.052 1.765.563 3.664 1.173 5.835 1.173 1.655 0 3.469-.354 5.502-1.347a1.125 1.125 0 0 0 .631-1.012V6.256a1.125 1.125 0 0 0-.529-.954Zm-1.721 11.49c-3.563 1.515-6.226.663-9.032-.235-1.765-.562-3.664-1.174-5.835-1.174-1.323.003-2.636.23-3.883.67V7.208c3.563-1.515 6.226-.663 9.032.236 2.743.878 5.808 1.86 9.718.503v8.847ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 3.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM6 9.375v3.75a1.125 1.125 0 0 1-2.25 0v-3.75a1.125 1.125 0 0 1 2.25 0Zm12 5.25v-3.75a1.125 1.125 0 1 1 2.25 0v3.75a1.125 1.125 0 0 1-2.25 0Z'
    />{' '}
  </svg>
);

export default MoneyWavy;
