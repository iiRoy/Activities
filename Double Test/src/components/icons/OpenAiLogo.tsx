'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const OpenAiLogo: React.FC<IconProps> = ({
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
      d='M21.457 10.65a5.624 5.624 0 0 0-5.895-7.517 5.625 5.625 0 0 0-9.459 1.351 5.625 5.625 0 0 0-3.562 8.865 5.632 5.632 0 0 0 5.901 7.523 5.625 5.625 0 0 0 9.455-1.356 5.625 5.625 0 0 0 3.562-8.865h-.002Zm-4.412-5.184a3.375 3.375 0 0 1 2.492 3.525l-3.6-2.079a1.125 1.125 0 0 0-1.124 0L11.25 8.97v-1.3l3.234-1.866a3.35 3.35 0 0 1 2.56-.337Zm-4.295 6.1v.867l-.75.433-.75-.433v-.866l.75-.433.75.433ZM7.875 6.75a3.375 3.375 0 0 1 5.287-2.782l-3.6 2.078A1.125 1.125 0 0 0 9 7.02v4.114l-1.125-.65V6.75Zm-3.72 1.587a3.357 3.357 0 0 1 1.47-1.36v4.157a1.125 1.125 0 0 0 .563.975l3.562 2.056-1.125.648-3.234-1.866a3.375 3.375 0 0 1-1.235-4.61Zm2.8 10.197a3.375 3.375 0 0 1-2.492-3.525l3.6 2.079a1.124 1.124 0 0 0 1.124 0l3.563-2.057v1.3l-3.234 1.866a3.35 3.35 0 0 1-2.56.337Zm9.17-1.284a3.376 3.376 0 0 1-5.287 2.782l3.6-2.078A1.125 1.125 0 0 0 15 16.98v-4.114l1.125.65v3.734Zm3.72-1.587a3.357 3.357 0 0 1-1.47 1.36v-4.157a1.126 1.126 0 0 0-.563-.975L14.25 9.835l1.125-.648 3.234 1.868a3.375 3.375 0 0 1 1.235 4.608Z'
    />{' '}
  </svg>
);

export default OpenAiLogo;
