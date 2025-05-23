'use client';
import React from 'react';

interface DropdownProps {
  label: string;
  description?: string;
  showDescription?: boolean;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  variant?:
    | 'accent'
    | 'primary'
    | 'secondary-shade'
    | 'text-color'
    | 'warning'
    | 'accent-disabled'
    | 'primary-disabled'
    | 'secondary-shade-disabled'
    | 'text-color-disabled';
  dim?: boolean;
  Icon: React.FC<{ width?: number | string; height?: number | string; color?: string }>;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  description,
  showDescription = true,
  options,
  value,
  onChange,
  variant = 'accent',
  dim = false,
  Icon,
}) => {
  const selectClass = `input input-${variant}${dim ? ' dim' : ''} relative`;

  return (
    <div className='container-input'>
      <div className='label-input'>{label}</div>
      {showDescription && description && <div className='description-input'>{description}</div>}
      <div className={selectClass}>
        <div className='icon-input'>
          <Icon width={25} height={25} />
        </div>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className='w-full pl-10 pr-10 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none'
          disabled={variant.includes('disabled')}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400'>▼</span>
      </div>
    </div>
  );
};

export default Dropdown;
