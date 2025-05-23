'use client';
import React, { useState, useEffect, useRef } from 'react';
import withIconDecorator from '../decorators/IconDecorator';
import * as Icons from '../icons';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Option {
  label: string;
  value: string;
}

interface ExtraFilter {
  label: string;
  key: string;
  options: Option[];
}

interface FiltroEventoProps {
  disableCheckboxes?: boolean;
  options?: Option[];
  selected?: string[];
  onChange?: (updated: string[]) => void;
  label?: string;
  labelOptions?: string;
  iconName?: keyof typeof Icons;
  maxSelectableOptions?: number;
  selectAll?: boolean;
  deselectAll?: boolean;
  showSecciones?: boolean;
  labelSecciones?: string;
  secciones?: Option[];
  seccionActiva?: string;
  onChangeSeccion?: (s: string) => void;
  extraFilters?: (ExtraFilter | null)[];
  filterActiva?: Record<string, string>;
  onExtraFilterChange?: (key: string, value: string) => void;
  fade?: boolean;
}

const FiltroEvento: React.FC<FiltroEventoProps> = ({
  options = [],
  selected = [],
  onChange = () => {},
  label = 'Filtros',
  labelOptions = 'Opciones',
  iconName,
  maxSelectableOptions = options.length,
  selectAll = false,
  deselectAll = false,
  showSecciones = false,
  labelSecciones = 'Sección',
  secciones = [],
  seccionActiva = '',
  onChangeSeccion = () => {},
  extraFilters = [],
  filterActiva = {},
  onExtraFilterChange = () => {},
  disableCheckboxes = false,
  fade = false,
}) => {
  const [show, setShow] = useState(false);
  const [filterVisibility, setFilterVisibility] = useState<Record<string, boolean>>({});
  const [visibleSeccion, setVisibleSeccion] = useState(seccionActiva);
  const [wasManuallyCleared, setWasManuallyCleared] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const filterVisibilityRef = useRef(filterVisibility);

  useEffect(() => {
    filterVisibilityRef.current = filterVisibility;
  }, [filterVisibility]);

  useEffect(() => {
    if (!fade) {
      setVisibleSeccion(seccionActiva);
    }
  }, [fade, seccionActiva]);

  const toggleDropdown = () => {
    setShow(!show);
  };

  const handleToggle = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else if (selected.length < maxSelectableOptions) {
      onChange([...selected, value]);
    }
  };

  const handleSelectAll = () => {
    const remaining = options.filter((opt) => !selected.includes(opt.value));
    const canAdd = maxSelectableOptions - selected.length;
    const toAdd = remaining.slice(0, canAdd);
    onChange([...selected, ...toAdd.map((o) => o.value)]);
  };

  const handleDeselectAll = () => {
    onChange([]);
  };

  useEffect(() => {
    if (fade) {
      setFilterVisibility({});
    } else {
      extraFilters.forEach((filter, index) => {
        if (filter && !filterVisibilityRef.current[filter.key]) {
          setTimeout(() => {
            setFilterVisibility((prev) => ({
              ...prev,
              [filter.key]: true,
            }));
          }, index * 100);
        }
      });
    }
  }, [extraFilters, fade]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if ((event.target as HTMLElement).closest('#filter-bar')) return;
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShow(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (
      !wasManuallyCleared &&
      selected.length === 0 &&
      options.length > 0 &&
      maxSelectableOptions > 0
    ) {
      const initialSelected = options.slice(0, maxSelectableOptions).map((opt) => opt.value);
      onChange(initialSelected);
    }

    if (selected.length > maxSelectableOptions) {
      onChange(selected.slice(0, maxSelectableOptions));
    }
    setWasManuallyCleared(true);
  }, [options, maxSelectableOptions, selected.length, wasManuallyCleared]);

  const IconComponent = withIconDecorator(
    iconName && Icons[iconName] ? Icons[iconName] : Icons.CaretDoubleDown,
  );

  return (
    <div className='flex items-center w-full justify-end relative'>
      <div
        id='filter-bar'
        className='flex items-center rounded-lg px-3 py-2 cursor-pointer w-full md:max-w-xs gap-3 bg-[#E6E1ECFF] text-primaryShade'
        onClick={toggleDropdown}
      >
        <IconComponent
          fillColor='var(--primaryColor)'
          strokeColor='var(--primaryColor)'
          strokeWidth={1}
          width={25}
          height={25}
        />
        <span className='font-bold text-lg'>{label}</span>
      </div>

      <div
        ref={dropdownRef}
        id='filter-bar'
        className={`absolute top-full right-0 mt-2 w-full md:max-w-xs bg-white rounded-lg shadow-custom-dark z-10 transform transition-all duration-300 ease-in-out
      ${
        show
          ? 'opacity-100 scale-100 visible pointer-events-auto'
          : 'opacity-0 scale-95 invisible pointer-events-none'
      }
    `}
      >
        {showSecciones && secciones.length > 0 && (
          <div
            className={`px-4 py-2 transform transition-all duration-300 ease-in-out
            ${show && !fade ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95'} ${
              fade ? 'pointer-events-none' : ''
            }`}
          >
            <label className='text-sm font-semibold text-gray-700'>{labelSecciones}</label>
            <Select value={visibleSeccion} onValueChange={(val) => onChangeSeccion?.(val)}>
              <SelectTrigger
                id='filter-bar'
                className='w-full text-md rounded-lg bg-[#f3eaf1] text-[#822f87] font-semibold shadow-sm'
              >
                <SelectValue placeholder='Selecciona una sección' />
              </SelectTrigger>
              <SelectContent
                id='filter-bar'
                className='bg-[#f4edf4] text-[#822f87] transition-all duration-300 ease-in-out'
              >
                {secciones.map((sec, index) => (
                  <SelectItem
                    key={sec.value}
                    value={sec.value}
                    className={`font-medium ${
                      index % 2 === 0
                        ? 'text-secondaryCol focus:bg-secondaryCol focus:text-text'
                        : 'text-primaryCol focus:bg-primaryCol focus:text-text'
                    }`}
                  >
                    {sec.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {extraFilters.map((filter) =>
          filter ? (
            <div
              key={filter.key}
              className={`px-4 py-2 transform transition-all duration-300 ease-in-out ${
                filterVisibility[filter.key]
                  ? 'opacity-100 scale-100 visible'
                  : 'opacity-0 scale-95'
              }`}
            >
              <label className='text-sm font-semibold text-gray-700'>{filter.label}</label>
              <Select
                value={filterActiva?.[filter.key] != '' ? filterActiva?.[filter.key] : '__all__'}
                onValueChange={(val) => {
                  onExtraFilterChange(filter.key, val);
                }}
              >
                <SelectTrigger className='w-full text-md rounded-lg bg-[#f3eaf1] text-[#822f87] font-semibold shadow-sm'>
                  <SelectValue placeholder='Selecciona una opción' />
                </SelectTrigger>
                <SelectContent
                  id='filter-bar'
                  className='bg-[#f4edf4] text-[#822f87] transition-all duration-300 ease-in-out'
                >
                  {filter.options.map((opt, index) => (
                    <SelectItem
                      key={opt.value}
                      value={opt.value}
                      className={`font-medium ${
                        index % 2 === 0
                          ? 'text-secondaryCol focus:bg-secondaryCol focus:text-text'
                          : 'text-primaryCol focus:bg-primaryCol focus:text-text'
                      }`}
                    >
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ) : null,
        )}

        {!disableCheckboxes && options.length > 0 && (
          <div className='px-4 py-2'>
            <label className='text-sm font-semibold text-gray-700'>{labelOptions}</label>

            <div className='max-h-40 overflow-y-auto border border-gray-200 rounded-md p-2 my-2'>
              {options.map((option, index) => (
                <label
                  key={option.value}
                  className={`flex items-center px-2 py-1 hover:bg-purple-100 cursor-pointer rounded-md ${
                    index % 2 === 0 ? 'text-primaryShade' : 'text-secondaryShade'
                  }`}
                >
                  <input
                    type='checkbox'
                    checked={selected.includes(option.value)}
                    onChange={() => handleToggle(option.value)}
                    className={`checkbox-circle mr-2 ${
                      index % 2 === 0 ? 'checkbox-odd' : 'checkbox-even'
                    }`}
                  />
                  <span className='text-sm'>{option.label}</span>
                </label>
              ))}
            </div>

            <div className='flex justify-between text-sm mt-2'>
              <button
                onClick={handleSelectAll}
                className='text-purple-600 hover:underline disabled:opacity-50'
                disabled={selected.length >= maxSelectableOptions}
                hidden={!selectAll}
              >
                Seleccionar todo
              </button>
              <button
                onClick={handleDeselectAll}
                className='text-purple-600 hover:underline'
                hidden={!deselectAll}
              >
                Deseleccionar todo
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FiltroEvento;
