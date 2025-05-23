'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const UserGear: React.FC<IconProps> = ({
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
      d='M13.922 14.675a6.75 6.75 0 1 0-8.344 0 11.624 11.624 0 0 0-4.565 3.351 1.125 1.125 0 1 0 1.724 1.448c1.814-2.16 4.305-3.349 7.013-3.349 3.469 0 5.73 1.82 7.013 3.349a1.125 1.125 0 0 0 1.724-1.448 11.626 11.626 0 0 0-4.565-3.351Zm-8.672-5.3a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm17.862 3.75-.666.217.411.567a1.124 1.124 0 1 1-1.82 1.323l-.412-.569-.413.569a1.125 1.125 0 1 1-1.82-1.323l.412-.567-.666-.217a1.126 1.126 0 0 1 .694-2.14l.668.216V10.5a1.125 1.125 0 1 1 2.25 0v.701l.668-.216a1.126 1.126 0 0 1 .694 2.14Z'
    />{' '}
  </svg>
);

export default UserGear;
