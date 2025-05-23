'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const HandHeart: React.FC<IconProps> = ({
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
        d='M21.821 12.926a2.688 2.688 0 0 0-1.125-.505c1.447-1.645 2.179-3.293 2.179-4.921 0-2.688-2.165-4.875-4.824-4.875a4.853 4.853 0 0 0-3.426 1.392 4.853 4.853 0 0 0-3.426-1.392c-2.66 0-4.824 2.187-4.824 4.875 0 .952.255 1.903.77 2.878-.41.17-.785.42-1.1.735l-2.014 2.012H1.875A1.875 1.875 0 0 0 0 15v3.75a1.875 1.875 0 0 0 1.875 1.875h9.375c.092 0 .184-.011.273-.034l6-1.5c.057-.014.113-.033.168-.056l3.639-1.55a2.683 2.683 0 0 0 .491-4.558ZM11.2 4.875a2.548 2.548 0 0 1 2.385 1.552 1.125 1.125 0 0 0 2.082 0 2.548 2.548 0 0 1 2.385-1.552c1.395 0 2.574 1.202 2.574 2.625 0 1.693-1.406 3.641-4.067 5.643l-.433.1v-.118a3 3 0 0 0-3-3H9.629c-.683-.96-1.004-1.803-1.004-2.625 0-1.423 1.18-2.625 2.574-2.625Zm-8.949 10.5h1.125v3H2.25v-3Zm18.157.057-3.516 1.5-5.78 1.443H5.625v-3.656l2.012-2.012a1.118 1.118 0 0 1 .795-.332h4.693a.75.75 0 1 1 0 1.5H10.5a1.125 1.125 0 1 0 0 2.25h3c.085 0 .17-.01.252-.028l6.281-1.445.044-.011a.433.433 0 0 1 .33.791Z'
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

export default HandHeart;
