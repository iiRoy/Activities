'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ChatCenteredSlash: React.FC<IconProps> = ({
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
      d='M5.332 2.993a1.125 1.125 0 0 0-1.902.411A1.875 1.875 0 0 0 1.875 5.25v12a1.875 1.875 0 0 0 1.875 1.875h5.448l1.174 2.055a1.876 1.876 0 0 0 3.255 0l1.175-2.055h2.156l1.711 1.882a1.125 1.125 0 0 0 1.665-1.514L5.332 2.993Zm8.818 13.882a1.125 1.125 0 0 0-.977.567L12 19.494l-1.173-2.052a1.125 1.125 0 0 0-.977-.567H4.125V5.625h.563l10.228 11.25h-.766ZM22.125 5.25v11.076a1.125 1.125 0 1 1-2.25 0V5.625H10.25a1.125 1.125 0 1 1 0-2.25h10a1.875 1.875 0 0 1 1.875 1.875Z'
    />{' '}
  </svg>
);

export default ChatCenteredSlash;
