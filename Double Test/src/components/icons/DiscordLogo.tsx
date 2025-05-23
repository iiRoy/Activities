'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const DiscordLogo: React.FC<IconProps> = ({
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
      d='M10.125 12.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5.25-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm7.132 7.177-6.282 2.786a1.89 1.89 0 0 1-2.538-1.066l-.8-2.168c-.294.013-.588.022-.886.022-.298 0-.593-.01-.886-.023l-.803 2.169a1.89 1.89 0 0 1-2.538 1.066l-6.282-2.786a1.868 1.868 0 0 1-1.059-2.17L3.202 5.344a1.875 1.875 0 0 1 1.52-1.389l3.38-.556a1.9 1.9 0 0 1 2.137 1.392l.414 1.632a19.367 19.367 0 0 1 2.694 0l.414-1.632a1.899 1.899 0 0 1 2.136-1.392l3.38.556a1.875 1.875 0 0 1 1.521 1.389l2.769 10.91a1.868 1.868 0 0 1-1.06 2.173Zm-1.2-1.927-2.63-10.363-2.818-.463-.267 1.047c.272.054.542.112.808.18a1.125 1.125 0 1 1-.55 2.182A15.79 15.79 0 0 0 12 8.625a15.79 15.79 0 0 0-3.85.458A1.125 1.125 0 0 1 7.6 6.9c.266-.068.536-.126.808-.18l-.266-1.047-2.82.463L2.692 16.5l5.646 2.503.469-1.272c-.41-.071-.813-.155-1.208-.254a1.125 1.125 0 0 1 .55-2.183c1.26.31 2.553.463 3.851.456 1.297.006 2.59-.147 3.85-.457a1.126 1.126 0 0 1 .55 2.182c-.395.1-.798.183-1.208.254l.469 1.272 5.647-2.501Z'
    />{' '}
  </svg>
);

export default DiscordLogo;
