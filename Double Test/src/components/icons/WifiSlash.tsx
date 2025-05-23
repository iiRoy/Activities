'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const WifiSlash: React.FC<IconProps> = ({
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
      d='M20.332 19.493a1.126 1.126 0 1 1-1.665 1.514l-4.813-5.295a5.255 5.255 0 0 0-4.941.666 1.125 1.125 0 1 1-1.326-1.819 7.44 7.44 0 0 1 3.93-1.417l-1.813-1.995a9.767 9.767 0 0 0-3.756 1.833 1.125 1.125 0 0 1-1.396-1.764 12.044 12.044 0 0 1 3.474-1.915L6.403 7.52a14.17 14.17 0 0 0-3.439 2.088 1.126 1.126 0 0 1-1.427-1.741 16.455 16.455 0 0 1 3.28-2.099l-1.15-1.261a1.125 1.125 0 1 1 1.665-1.514l15 16.5ZM12 17.625a1.5 1.5 0 1 0 0 2.999 1.5 1.5 0 0 0 0-2.999Zm6.052-4.645a1.125 1.125 0 0 0 1.396-1.764 11.931 11.931 0 0 0-3.51-1.93 1.125 1.125 0 0 0-.738 2.125 9.714 9.714 0 0 1 2.852 1.569Zm4.411-5.113a16.53 16.53 0 0 0-11.575-3.705 1.127 1.127 0 1 0 .15 2.25 14.272 14.272 0 0 1 9.998 3.199 1.126 1.126 0 0 0 1.427-1.74v-.004Z'
    />{' '}
  </svg>
);

export default WifiSlash;
