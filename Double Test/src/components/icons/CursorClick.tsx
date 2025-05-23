'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const CursorClick: React.FC<IconProps> = ({
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
      d='m21.014 16.797-4.39-4.39 3.556-1.266a1.875 1.875 0 0 0-.094-3.522L5.078 2.72a1.875 1.875 0 0 0-2.36 2.358L7.62 20.085a1.875 1.875 0 0 0 3.522.094l1.267-3.555 4.39 4.39a1.875 1.875 0 0 0 2.651 0l1.565-1.565a1.875 1.875 0 0 0 0-2.652Zm-2.89 2.36-4.545-4.545a1.875 1.875 0 0 0-3.046.575l-.028.072-1.093 3.07L5.09 5.088l13.238 4.323-3.066 1.093a1.875 1.875 0 0 0-.649 3.073l4.545 4.545-1.034 1.034ZM7.875 1.5v-.375a1.125 1.125 0 0 1 2.25 0V1.5a1.125 1.125 0 1 1-2.25 0Zm-6.75 8.625a1.125 1.125 0 1 1 0-2.25H1.5a1.125 1.125 0 0 1 0 2.25h-.375ZM11.308 2.27l.375-1.125a1.125 1.125 0 0 1 2.135.71l-.375 1.125a1.125 1.125 0 0 1-2.135-.71Zm-7.615 9.75a1.125 1.125 0 0 1-.712 1.422l-1.125.375a1.126 1.126 0 0 1-1.383-1.574 1.127 1.127 0 0 1 .672-.56l1.125-.375a1.125 1.125 0 0 1 1.423.712Z'
    />{' '}
  </svg>
);

export default CursorClick;
