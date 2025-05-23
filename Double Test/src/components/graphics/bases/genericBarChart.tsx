'use client';
import React, { useEffect, useState, useRef } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Rectangle,
} from 'recharts';

import withIconDecorator from '../../decorators/IconDecorator';
import Filtro from '../../headers_menu_users/FiltroEvento';
import * as Icons from '../../icons';
export const Options = withIconDecorator(Icons.DotsThree);

import CustomTick from '../structure/customTick';
import CustomLegend from '../structure/customLegend';
import OptionsMenu from '../../headers_menu_users/OptionMenu';

interface GenericBarChartProps {
  apiEndpoint: string;
  title?: string;
  dataPath?: string;
  xKey?: string;
  labelFormatterPrefix?: string;
  filters?: Record<string, string | undefined>;
  selectAll?: boolean;
  deselectAll?: boolean;
  maxItemsSelected: number | undefined;
}

type GenericChartData = {
  [key: string]: string | number;
};

const GenericBarChart: React.FC<GenericBarChartProps> = ({
  apiEndpoint,
  title = 'Gráfica',
  dataPath,
  xKey = 'name',
  labelFormatterPrefix = '',
  filters = {},
  selectAll = false,
  deselectAll = false,
  maxItemsSelected = undefined,
}) => {
  const [data, setData] = useState<GenericChartData[]>([]);
  const [filteredData, setFilteredData] = useState<GenericChartData[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [fade, setFade] = useState(false);
  const isFirstRender = useRef(true);
  const [error, setError] = useState<string | null>(null);
  const [maxItems, setMaxItems] = useState<number | undefined>(maxItemsSelected || undefined);
  const [showMenu, setShowMenu] = useState(false);
  const defaultColorPallete = ['#97639c', '#C57FAB', '#6E2D75', '#683756'];
  const [colors, setColors] = useState([...defaultColorPallete]);
  const [isVisible, setIsVisible] = useState(true);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isFirstRender.current === true) {
      setFade(true);
      const fetchData = async () => {
        const params = new URLSearchParams(filters as Record<string, string>);
        const fullUrl = `${apiEndpoint}${params.toString() ? `?${params.toString()}` : ''}`;

        try {
          const res = await fetch(fullUrl, {
            headers: {
              Authorization: `Bearer ${typeof window !== 'undefined' ? localStorage.getItem('api_token') : ''}`,
            },
          });

          const json = await res.json();
          console.log('📦 Respuesta JSON completa:', json);

          const rawData: GenericChartData[] = dataPath ? json[dataPath] : json;

          if (!rawData)
            return setError(`No se encontró la propiedad "${dataPath}" en la respuesta.`);
          if (!Array.isArray(rawData))
            return setError(`La propiedad "${dataPath}" no contiene un arreglo válido.`);
          if (rawData.length === 0) return setError(`La lista está vacía.`);

          const ItemsData = rawData.map((item) => {
            const newItem: GenericChartData = {};
            for (const key in item) {
              const val = item[key];
              newItem[key] = typeof val === 'string' && !isNaN(Number(val)) ? Number(val) : val;
            }
            return newItem;
          });

          const parsedData = ItemsData.slice(0, maxItems ?? ItemsData.length);

          setData(ItemsData);
          setFilteredData(parsedData);
          setSelectedKeys(parsedData.map((d) => d[xKey] as string));
          setError(null);
        } catch (err) {
          console.error('❌ Error cargando datos:', err);
          setError('Error al cargar los datos del servidor.');
        }
      };

      fetchData();
      setTimeout(() => {
        isFirstRender.current = false;
      }, 700);
      if (isFirstRender) {
        setTimeout(() => {
          setFade(false);
        }, 300);
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if ((event.target as HTMLElement).closest('#filter-bar')) return;
      const dropdown = document.getElementById('filter-dropdown');
      if (dropdown && !dropdown.contains(event.target as Node)) {
        dropdown.classList.add('hidden');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [apiEndpoint, dataPath, xKey, JSON.stringify(filters), maxItems]);

  const handleFilterChange = (updated: string[]) => {
    setFade(true);
    setTimeout(() => {
      setSelectedKeys(updated);
      setFilteredData(data.filter((d) => updated.includes(d[xKey] as string)));
      setFade(false);
    }, 250);
  };

  const options = data.map((d) => ({
    value: d[xKey] as string,
    label: d[xKey] as string,
  }));

  const seriesKeys =
    data.length > 0
      ? Object.keys(data[0]).filter((key) => key !== xKey && typeof data[0][key] === 'number')
      : [];

  return (
    <>
      {isVisible && (
        <div
          ref={chartRef}
          className='bg-white rounded-xl w-full h-full p-4 flex flex-col justify-between'
        >
          <div className='relative flex justify-between items-center'>
            <h1 className='font-bold text-2xl'>{title}</h1>
            <button
              onClick={() => setShowMenu(!showMenu)}
              id='options-button'
              className='cursor-pointer'
            >
              <Options
                fillColor='var(--secondaryColor)'
                strokeColor='var(--secondaryColor)'
                strokeWidth={2.5}
                width={'3vmax'}
                height={'3vmax'}
              />
            </button>
            {/* Menú fuera del flujo flex, pero dentro de contenedor relative */}
            <div className='absolute top-full right-0 z-50'>
              <OptionsMenu
                onMaxItemsChange={setMaxItems}
                onToggleVisibility={() => setIsVisible(false)}
                setColors={setColors}
                maxItemsSelected={maxItems}
                visible={showMenu}
                setVisible={setShowMenu}
                chartRef={chartRef}
                totalItems={data.length}
                defaultColors={defaultColorPallete}
                restoreDefaultColors={() => setColors(defaultColorPallete)}
                // nuevas props necesarias para exportación:
                filteredData={filteredData}
                xKey={xKey}
                seriesKeys={seriesKeys}
                title={title}
                colors={colors}
              />
            </div>
          </div>

          <div className='flex flex-col-reverse md:flex-row-reverse gap-4 md:gap-2 justify-between items-center mt-4 mb-7 ml-7 mr-7'>
            <div
              className={`custom-legend-container flex md:w-[60%] w-full transition duration-300 ease-in-out ${
                (fade && isFirstRender.current) || selectedKeys.length < 1
                  ? 'opacity-0'
                  : 'opacity-100'
              }`}
            >
              <CustomLegend legendKeys={seriesKeys} colors={colors} />
            </div>
            <div className='flex justify-between md:w-[40%] w-[70%] items-center'>
              <div className='filter-bar flex items-center w-full justify-end'>
                <Filtro
                  options={options}
                  selected={selectedKeys}
                  onChange={handleFilterChange}
                  iconName={undefined}
                  label='Filtros'
                  labelOptions={xKey.toUpperCase()}
                  selectAll={selectAll}
                  deselectAll={deselectAll}
                  maxSelectableOptions={maxItems}
                />
              </div>
            </div>
          </div>

          <div
            className={`w-full h-full transform transition-all duration-300 ease-in-out ${
              fade ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {filteredData.length === 0 ? (
              <div className='flex justify-center items-center h-full'>
                <p className='text-textDim text-lg'>No hay datos para mostrar</p>
              </div>
            ) : (
              <ResponsiveContainer>
                <BarChart data={filteredData} barSize={20}>
                  <CartesianGrid strokeDasharray='3 3' vertical={false} stroke='#BBA5BDFF' />
                  <XAxis
                    dataKey={xKey}
                    axisLine={false}
                    tick={<CustomTick numElements={filteredData.length} />}
                    tickLine={false}
                    interval={0}
                    height={60}
                  />
                  <YAxis axisLine={false} tick={{ fill: '#8E76A3FF' }} tickLine={false} />
                  <Tooltip
                    labelFormatter={(label) => (
                      <span
                        style={{ fontWeight: 'bold' }}
                      >{`${labelFormatterPrefix}${label}`}</span>
                    )}
                    formatter={(value, name) => {
                      const upperName =
                        typeof name === 'string'
                          ? name.charAt(0).toUpperCase() + name.slice(1).replaceAll('_', ' ')
                          : name;
                      return [`${value}`, upperName];
                    }}
                    contentStyle={{
                      backgroundColor: '#fff',
                      borderRadius: '5px',
                      border: '1px solid #ccc',
                    }}
                  />
                  {seriesKeys.map((key, index) => (
                    <Bar
                      key={key}
                      dataKey={key}
                      fill={colors[index % colors.length]}
                      style={{ transition: 'fill 0.3s ease-in-out' }}
                      radius={[10, 10, 0, 0]}
                      activeBar={<Rectangle />}
                      isAnimationActive={isFirstRender.current}
                    />
                  ))}
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
      )}
      {!isVisible && (
        <div
          onClick={() => setIsVisible(true)}
          className='h-6 w-full bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400 transition-all flex items-center justify-center'
          title='Mostrar gráfica'
        >
          <span className='text-xs font-medium text-gray-700'>Expandir</span>
        </div>
      )}
    </>
  );
};

export default GenericBarChart;
