'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const TwitterLogo: React.FC<IconProps> = ({
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
      d='M23.54 6.32a1.125 1.125 0 0 0-1.04-.695h-2.642a4.943 4.943 0 0 0-4.094-2.25 4.768 4.768 0 0 0-3.431 1.392 4.864 4.864 0 0 0-1.458 3.483v.073C7.422 7.238 4.652 4.49 4.622 4.458a1.125 1.125 0 0 0-1.92.692c-.59 6.578 2.312 10.105 3.944 11.542-1.359 1.386-3.271 2.122-3.29 2.13a1.125 1.125 0 0 0-.543 1.677c.187.271 1.26 1.626 4.687 1.626 6.773 0 12.44-5.18 13.087-11.872l2.708-2.707a1.125 1.125 0 0 0 .245-1.226Zm-4.835 2.635c-.194.193-.31.45-.327.724-.365 5.717-5.142 10.196-10.878 10.196a8.506 8.506 0 0 1-1.17-.074c.982-.624 2.081-1.513 2.857-2.677a1.124 1.124 0 0 0-.365-1.593c-.011-.007-1.156-.703-2.197-2.29-1.04-1.587-1.618-3.469-1.73-5.604C6.503 8.85 9 10.387 11.813 10.86a1.123 1.123 0 0 0 1.312-1.11v-1.5a2.623 2.623 0 0 1 .788-1.882 2.538 2.538 0 0 1 1.824-.743 2.703 2.703 0 0 1 2.42 1.576 1.125 1.125 0 0 0 1.032.674h.592l-1.076 1.08Z'
    />{' '}
  </svg>
);

export default TwitterLogo;
