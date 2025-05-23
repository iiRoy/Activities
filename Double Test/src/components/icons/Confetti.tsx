'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const Confetti: React.FC<IconProps> = ({
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
      d='M10.717 4.669a1.855 1.855 0 0 0-3.056.675L2.74 18.882a1.858 1.858 0 0 0 1.738 2.493c.218 0 .435-.04.64-.114l13.54-4.922a1.854 1.854 0 0 0 .678-3.056l-8.618-8.614Zm-.95 12.507-2.943-2.944.952-2.616 4.608 4.608-2.616.952Zm-3.789-.61 1.456 1.458-2.292.834.836-2.292Zm8.74-1.191L8.626 9.281l.938-2.585 7.74 7.742-2.584.937ZM12 3.75V1.5a1.125 1.125 0 1 1 2.25 0v2.25a1.125 1.125 0 1 1-2.25 0Zm10.92 7.83a1.127 1.127 0 0 1-1.594 1.593l-1.5-1.5a1.127 1.127 0 1 1 1.594-1.594l1.5 1.5Zm-.065-3.763-2.25.75a1.125 1.125 0 1 1-.711-2.135l2.25-.75a1.125 1.125 0 0 1 .711 2.135ZM14.681 6.18c.303-1.73 1.574-2.806 3.319-2.806.605 0 .815-.233.938-.461.109-.21.173-.44.187-.677v.013a1.125 1.125 0 1 1 2.25 0c0 1.357-.9 3.375-3.375 3.375-.463 0-.957.112-1.102.943a1.125 1.125 0 1 1-2.217-.387Z'
    />{' '}
  </svg>
);

export default Confetti;
