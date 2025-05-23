'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const BowlSteam: React.FC<IconProps> = ({
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
      d='M21 10.125H3a1.125 1.125 0 0 0-1.125 1.125 10.16 10.16 0 0 0 5.25 8.876v.124A1.875 1.875 0 0 0 9 22.125h6a1.875 1.875 0 0 0 1.875-1.875v-.124a10.16 10.16 0 0 0 5.25-8.876A1.125 1.125 0 0 0 21 10.125Zm-5.719 8.287a1.125 1.125 0 0 0-.656 1.021v.442h-5.25v-.442a1.125 1.125 0 0 0-.656-1.021 7.905 7.905 0 0 1-4.512-6.037h15.586a7.903 7.903 0 0 1-4.512 6.037ZM7.025 4.702c.181-.194.33-.416.441-.657a1.125 1.125 0 0 1 .722-2.128c.532.154 1.238.622 1.479 1.435.254.856-.063 1.805-.938 2.82a2.47 2.47 0 0 0-.441.656 1.125 1.125 0 0 1-.725 2.128c-.532-.154-1.239-.622-1.48-1.434-.254-.857.063-1.803.942-2.82Zm4.125 0c.181-.194.33-.416.441-.657a1.125 1.125 0 0 1 .722-2.128c.532.154 1.238.622 1.479 1.435.254.856-.063 1.805-.938 2.82a2.47 2.47 0 0 0-.441.656 1.125 1.125 0 0 1-.725 2.128c-.532-.154-1.239-.622-1.48-1.434-.254-.857.063-1.803.942-2.82Zm4.125 0c.181-.194.33-.416.441-.657a1.125 1.125 0 0 1 .722-2.128c.532.154 1.238.622 1.479 1.435.254.856-.063 1.805-.938 2.82a2.47 2.47 0 0 0-.441.656 1.125 1.125 0 0 1-.725 2.128c-.532-.154-1.239-.622-1.48-1.434-.254-.857.063-1.803.942-2.82Z'
    />{' '}
  </svg>
);

export default BowlSteam;
