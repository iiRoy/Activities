'use client';

import React from 'react';

interface CheckboxProps {
  label: string;
  color: 'white' | 'purple' | 'red' | 'green' | 'yellow';
  checked: boolean;
  bordered?: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  color,
  checked,
  bordered = false,
  onChange,
}) => {
  const colorClass = `${color}-checkbox`;
  const borderClass = bordered ? 'with-border' : '';

  return (
    <label className={`checkbox-container ${colorClass} ${borderClass}`}>
      <input
        type='checkbox'
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className='hidden-checkbox'
      />
      <span className='custom-checkbox' />
      <span className='label-text'>{label}</span>
    </label>
  );
};

export default Checkbox;
