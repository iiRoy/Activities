'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const RedditLogo: React.FC<IconProps> = ({
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
      d='M23.625 9.75a3.375 3.375 0 0 0-5.381-2.712 13.646 13.646 0 0 0-4.926-1.355l.356-2.138 1.47.244a2.25 2.25 0 1 0 .37-2.219l-2.576-.43a1.125 1.125 0 0 0-1.298.923l-.598 3.591c-1.903.123-3.73.6-5.286 1.384a3.375 3.375 0 0 0-4.455 5.032 5.894 5.894 0 0 0-.176 1.43c0 2.184 1.186 4.207 3.34 5.698C6.493 20.602 9.17 21.375 12 21.375c2.831 0 5.507-.773 7.535-2.177 2.154-1.491 3.34-3.514 3.34-5.698 0-.482-.06-.962-.176-1.43a3.39 3.39 0 0 0 .926-2.32Zm-2.804.97a1.125 1.125 0 0 0-.469 1.406c.177.436.27.903.273 1.374 0 1.423-.844 2.79-2.37 3.849-1.657 1.145-3.877 1.776-6.255 1.776-2.377 0-4.594-.63-6.254-1.776-1.527-1.06-2.371-2.426-2.371-3.849.001-.47.092-.936.266-1.373a1.125 1.125 0 0 0-.462-1.406A1.126 1.126 0 1 1 4.66 9.094a1.125 1.125 0 0 0 1.495.298l.02-.012c1.6-.972 3.669-1.505 5.825-1.505s4.219.533 5.82 1.5l.022.012a1.125 1.125 0 0 0 1.498-.293 1.114 1.114 0 0 1 .91-.469 1.125 1.125 0 0 1 .57 2.094ZM8.25 13.874a1.874 1.874 0 1 1 0-3.749 1.874 1.874 0 0 1 0 3.749ZM17.625 12a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm-1.924 3.799a1.123 1.123 0 0 1-.75 1.406 10.488 10.488 0 0 1-5.906 0 1.127 1.127 0 0 1 .656-2.156c1.5.434 3.093.434 4.594 0a1.123 1.123 0 0 1 1.406.75Z'
    />{' '}
  </svg>
);

export default RedditLogo;
