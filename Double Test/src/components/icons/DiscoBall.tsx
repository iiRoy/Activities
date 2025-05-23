'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const DiscoBall: React.FC<IconProps> = ({
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
        d='M11.625 5.698V1.5a1.125 1.125 0 1 0-2.25 0v4.198a8.625 8.625 0 1 0 2.25 0Zm5.149 7.427H14.58c-.154-1.944-.69-3.469-1.295-4.608a6.396 6.396 0 0 1 3.489 4.608ZM10.5 20.156c-.656-.808-1.594-2.352-1.823-4.781h3.646c-.23 2.428-1.167 3.972-1.823 4.781Zm-1.823-7.031c.23-2.428 1.167-3.972 1.823-4.781.656.808 1.594 2.352 1.823 4.781H8.677Zm-.962-4.608c-.605 1.14-1.141 2.664-1.295 4.608H4.226a6.397 6.397 0 0 1 3.489-4.608Zm-3.489 6.858H6.42c.154 1.944.69 3.469 1.295 4.608a6.397 6.397 0 0 1-3.489-4.608Zm9.06 4.608c.604-1.14 1.14-2.664 1.294-4.608h2.194a6.396 6.396 0 0 1-3.489 4.608ZM24 8.25a1.125 1.125 0 0 1-1.125 1.125H22.5v.375a1.125 1.125 0 1 1-2.25 0v-.375h-.375a1.125 1.125 0 0 1 0-2.25h.375V6.75a1.125 1.125 0 1 1 2.25 0v.375h.375A1.125 1.125 0 0 1 24 8.25ZM13.875 3.375A1.125 1.125 0 0 1 15 2.25h.75V1.5a1.125 1.125 0 1 1 2.25 0v.75h.75a1.125 1.125 0 0 1 0 2.25H18v.75a1.125 1.125 0 1 1-2.25 0V4.5H15a1.125 1.125 0 0 1-1.125-1.125Z'
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

export default DiscoBall;
