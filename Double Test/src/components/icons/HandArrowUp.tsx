'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const HandArrowUp: React.FC<IconProps> = ({
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
    <g clip-path='url(#a)'>
      {' '}
      <path
        stroke={strokeColor}
        fill={fillColor}
        strokeWidth={strokeWidth}
        vectorEffect='non-scaling-stroke'
        d='M21.821 12.926a2.66 2.66 0 0 0-2.309-.457l-3.387.774v-.118a3 3 0 0 0-3-3H8.432a3.35 3.35 0 0 0-2.386.988L4.03 13.125H1.875A1.875 1.875 0 0 0 0 15v3.75a1.875 1.875 0 0 0 1.875 1.875h9.375c.092 0 .184-.011.273-.034l6-1.5c.057-.014.113-.033.168-.056l3.639-1.55a2.682 2.682 0 0 0 .491-4.558ZM2.25 15.375h1.125v3H2.25v-3Zm18.157.057-3.516 1.5-5.78 1.443H5.625v-3.656l2.012-2.012a1.118 1.118 0 0 1 .795-.332h4.693a.75.75 0 1 1 0 1.5H10.5a1.125 1.125 0 1 0 0 2.25h3c.085 0 .17-.01.252-.028l6.281-1.445.044-.011a.43.43 0 0 1 .545.416.43.43 0 0 1-.215.375Zm-6.203-9.387a1.125 1.125 0 0 1 0-1.594l3-3a1.125 1.125 0 0 1 1.594 0l3 3A1.126 1.126 0 0 1 20.57 6.29a1.126 1.126 0 0 1-.366-.244L19.125 4.97v4.78a1.125 1.125 0 1 1-2.25 0V4.969l-1.08 1.076a1.124 1.124 0 0 1-1.59 0Z'
      />{' '}
    </g>{' '}
    <defs>
      {' '}
      <clipPath id='a'>
        {' '}
        <path
          stroke={strokeColor}
          fill={fillColor}
          strokeWidth={strokeWidth}
          vectorEffect='non-scaling-stroke'
          d='M0 0h24v24H0z'
        />{' '}
      </clipPath>{' '}
    </defs>{' '}
  </svg>
);

export default HandArrowUp;
