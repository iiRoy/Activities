'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Fish: React.FC<IconProps> = ({
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
        d='M16.125 7.125a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm4.52 6.523a9.562 9.562 0 0 1-2.578 2.986 10.27 10.27 0 0 1-1.27.828c-1.715.944-3.832 1.49-6.302 1.627l-1.964 4.255a1.125 1.125 0 0 1-1.02.656h-.077a1.125 1.125 0 0 1-.999-.791l-1.327-4.313-4.313-1.33a1.125 1.125 0 0 1-.139-2.097l4.256-1.961c.138-2.469.685-4.586 1.629-6.3.243-.444.52-.87.825-1.274l.048-.062a9.554 9.554 0 0 1 2.937-2.516c2.395-1.33 5.093-1.534 6.937-1.47 1.665.056 3.421.374 3.822.61.163.097.3.234.396.397.236.4.555 2.156.612 3.821.06 1.842-.143 4.536-1.472 6.934Zm-6.44 2.5a5.335 5.335 0 0 1-1.043-.81 5.232 5.232 0 0 1-1.49-3.01 5.232 5.232 0 0 1-3.819-2.534c-.437 1.28-.678 2.77-.721 4.471a1.125 1.125 0 0 1-.657.995l-2.208 1.019 2.071.64a1.125 1.125 0 0 1 .745.744l.636 2.07 1.021-2.211a1.125 1.125 0 0 1 .995-.656c1.697-.038 3.188-.278 4.47-.718Zm5.389-11.742c-1.524-.294-5.795-.844-8.907 1.398-.486.35-.927.76-1.312 1.219a3 3 0 0 0 3.281 3.088 1.127 1.127 0 0 1 1.227 1.227 3 3 0 0 0 3.094 3.281c.46-.384.87-.825 1.219-1.312 2.246-3.106 1.696-7.38 1.398-8.9Z'
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

export default Fish;
