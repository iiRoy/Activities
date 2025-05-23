'use client';
import React from 'react';

interface CustomLegendProps {
  legendKeys: string[];
  colors: string[];
}

const CustomLegend: React.FC<CustomLegendProps> = ({ legendKeys, colors }) => (
  <div className='flex text-sm items-center gap-3 flex-wrap justify-center w-full'>
    {legendKeys.map((key, index) => {
      const color = colors[index % colors.length];
      return (
        <div key={key} className='flex items-center gap-1'>
          <span className='w-3 h-3 rounded-full' style={{ backgroundColor: color }} />
          <span className='font-medium' style={{ color }}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </span>
        </div>
      );
    })}
  </div>
);

export default CustomLegend;
