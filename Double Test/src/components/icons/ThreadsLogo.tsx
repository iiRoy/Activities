'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const ThreadsLogo: React.FC<IconProps> = ({
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
      d='M17.704 11.293a6.378 6.378 0 0 0-.938-.584c-.348-2.032-1.538-3.507-3.33-4.05-2.004-.607-4.315.13-5.373 1.717a1.126 1.126 0 0 0 1.874 1.248c.513-.768 1.792-1.132 2.851-.812a2.317 2.317 0 0 1 1.395 1.148 8.132 8.132 0 0 0-.83-.042c-3.175 0-5.478 1.821-5.478 4.332 0 2.147 1.644 3.705 3.91 3.705a4.876 4.876 0 0 0 3.49-1.5c.563-.584 1.208-1.543 1.474-3.007.582.602.876 1.376.876 2.306 0 1.663-1.788 4.125-5.625 4.125-4.29 0-6.375-2.577-6.375-7.875 0-5.299 2.085-7.875 6.375-7.875 2.914 0 4.781 1.164 5.7 3.562a1.125 1.125 0 0 0 2.1-.808c-1.26-3.28-3.956-5.008-7.8-5.008C6.438 1.875 3.375 5.47 3.375 12c0 6.53 3.063 10.125 8.625 10.125 2.94 0 4.789-1.13 5.823-2.077 1.284-1.178 2.052-2.785 2.052-4.298 0-1.841-.75-3.383-2.171-4.457Zm-4.05 3.6a2.614 2.614 0 0 1-1.869.812c-.766 0-1.66-.38-1.66-1.455 0-1.43 1.672-2.082 3.226-2.082.426 0 .851.047 1.266.142-.052 1.09-.382 1.978-.963 2.582Z'
    />{' '}
  </svg>
);

export default ThreadsLogo;
