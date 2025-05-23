'use client';
import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const AirplaneTilt: React.FC<IconProps> = ({
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
      d='m17.813 10.81 2.55-2.4.025-.025a3.375 3.375 0 0 0-4.773-4.773l-.024.025-2.401 2.55-7.556-2.745a1.125 1.125 0 0 0-1.179.261l-2.25 2.25a1.125 1.125 0 0 0 .17 1.735l5.61 3.738-.954.949H5.25a1.12 1.12 0 0 0-.795.33l-2.25 2.25a1.125 1.125 0 0 0 .375 1.839l3.303 1.321L7.2 21.41l.008.02a1.125 1.125 0 0 0 1.853.347l2.232-2.232a1.126 1.126 0 0 0 .331-.795v-1.781l.95-.95 3.738 5.605a1.125 1.125 0 0 0 1.731.171l2.25-2.25a1.125 1.125 0 0 0 .262-1.18l-2.744-7.555Zm-.386 8.424-3.74-5.61a1.126 1.126 0 0 0-1.733-.169l-2.25 2.25c-.21.211-.329.497-.329.795v1.781l-.714.715-.867-2.166a1.125 1.125 0 0 0-.627-.627l-2.165-.866.717-.712H7.5c.298 0 .584-.118.795-.329l2.25-2.25a1.125 1.125 0 0 0-.17-1.733l-5.609-3.74.773-.773 7.578 2.756a1.125 1.125 0 0 0 1.203-.286l2.896-3.077a1.127 1.127 0 0 1 1.594 1.594l-3.077 2.896a1.126 1.126 0 0 0-.287 1.203l2.757 7.577-.776.77Z'
    />{' '}
  </svg>
);

export default AirplaneTilt;
