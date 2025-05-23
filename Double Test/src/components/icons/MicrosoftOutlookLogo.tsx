'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const MicrosoftOutlookLogo: React.FC<IconProps> = ({
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
      d='M11.625 12a3.374 3.374 0 1 0-6.749 0 3.374 3.374 0 0 0 6.749 0Zm-4.5 0a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM21 9.375h-1.125V3a1.125 1.125 0 0 0-1.125-1.125h-9A1.125 1.125 0 0 0 8.625 3v2.25h-5.25A1.875 1.875 0 0 0 1.5 7.125v9.75a1.875 1.875 0 0 0 1.875 1.875h3v1.5a1.875 1.875 0 0 0 1.875 1.875h12a1.875 1.875 0 0 0 1.875-1.875V10.5A1.125 1.125 0 0 0 21 9.375Zm-4.917 6.375 3.792-2.95v5.9l-3.792-2.95ZM10.875 4.125h6.75V11.7L15 13.742V7.125a1.875 1.875 0 0 0-1.875-1.875h-2.25V4.125ZM3.75 7.5h9v9h-9v-9Zm4.875 11.25h4.5a1.875 1.875 0 0 0 1.714-1.117l2.88 2.242H8.625V18.75Z'
    />{' '}
  </svg>
);

export default MicrosoftOutlookLogo;
