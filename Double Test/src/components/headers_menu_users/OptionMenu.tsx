'use client';
import React, { useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { createRoot } from 'react-dom/client';
import jsPDF from 'jspdf';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, Rectangle } from 'recharts';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';
import { useNotification } from '../buttons_inputs/Notification';
import { Switch } from '@/components/ui/switch';

interface OptionsMenuProps {
  onMaxItemsChange: (value: number | undefined) => void;
  onToggleVisibility: () => void;
  maxItemsSelected: number | undefined;
  visible: boolean;
  setVisible: (v: boolean) => void;
  chartRef: React.RefObject<HTMLDivElement>;
  totalItems: number;
  defaultColors: string[];
  restoreDefaultColors: () => void;
  filteredData: any[];
  xKey: string;
  seriesKeys: string[];
  title: string;
  colors: string[];
  setColors: (colors: string[]) => void;
}

const PALETTE = [
  { name: 'Rojo', hex: '#FF0000' },
  { name: 'Naranja', hex: '#FF9800' },
  { name: 'Amarillo', hex: '#FFFF00' },
  { name: 'Verde', hex: '#4CAF50' },
  { name: 'Cyan', hex: '#00BCD4' },
  { name: 'Azul', hex: '#2196F3' },
  { name: 'Violeta', hex: '#6E27B0FF' },
  { name: 'Rosa', hex: '#F87DCDFF' },
  { name: 'Café', hex: '#795548' },
  { name: 'Negro', hex: '#000000' },
  { name: 'Gris', hex: '#7B7B7BFF' },
  { name: 'Blanco', hex: '#FFFFFF' },
];

const OptionsMenu: React.FC<OptionsMenuProps> = ({
  onMaxItemsChange,
  onToggleVisibility,
  maxItemsSelected,
  visible,
  setVisible,
  totalItems,
  defaultColors,
  filteredData,
  xKey,
  seriesKeys,
  title,
  colors,
  setColors,
}) => {
  const [inputError, setInputError] = useState(false);
  const [format, setFormat] = useState<'png' | 'jpg' | 'pdf'>('png');
  const [selectOpen, setSelectOpen] = useState(false);
  const [includeTable, setIncludeTable] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);
  const { notify } = useNotification();

  // --- Color picker contextual ---
  const [colorPickerOpenIndex, setColorPickerOpenIndex] = useState<number | null>(null);
  const [colorPickerInput, setColorPickerInput] = useState('');
  const [customColors, setCustomColors] = useState<string[]>([]);

  // Cerrar menú color picker si se da click fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && menuRef.current.contains(e.target as Node)) return;
      setColorPickerOpenIndex(null);
      setVisible(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setVisible]);

  const handleMaxChange = (value: string) => {
    const number = parseInt(value);
    if (!value || number < 1) {
      setInputError(false);
      onMaxItemsChange(undefined);
    } else {
      setInputError(false);
      onMaxItemsChange(number);
    }
  };

  // Cambia el color de una sección
  const handleChangeColor = (i: number, color: string) => {
    const newColors = [...colors];
    newColors[i] = color;
    setColors(newColors);
    setColorPickerOpenIndex(null);
    setColorPickerInput('');
    notify({
      variant: 'two',
      title: 'Colores Cambiados',
      message: 'El color fue actualizado correctamente',
      color: 'purple',
      iconName: 'CheckFat',
    });
  };

  // Restaura el color default solo de la sección seleccionada
  const handleRestoreDefault = (i: number) => {
    const newColors = [...colors];
    newColors[i] = defaultColors[i];
    setColors(newColors);
    setColorPickerOpenIndex(null);
    setColorPickerInput('');
    notify({
      variant: 'two',
      title: 'Color Restaurado',
      message: 'Color restaurado al valor por defecto',
      color: 'green',
      iconName: 'CheckCircle',
    });
  };

  // Restaura TODOS los colores a default
  const handleRestoreAllDefaults = () => {
    setColors([...defaultColors]);
    notify({
      variant: 'two',
      title: 'Colores Restaurados',
      message: 'Colores restaurados al valor por defecto',
      color: 'green',
      iconName: 'CheckCircle',
    });
  };

  // ---------------------------------
  // FUNCIÓN DE DESCARGA INTEGRADA AQUÍ
  // ---------------------------------
  const handleDownload = async () => {
    const WIDTH = 1200;
    const HEIGHT_BASE = 800;
    const ROW_HEIGHT = 50;
    const TABLE_EXTRA = includeTable ? (filteredData.length + 1) * ROW_HEIGHT + 60 : 0;
    const HEIGHT = HEIGHT_BASE + TABLE_EXTRA;

    const sandbox = document.createElement('div');
    sandbox.style.position = 'fixed';
    sandbox.style.top = '-10000px';
    sandbox.style.left = '-10000px';
    sandbox.style.width = `${WIDTH}px`;
    sandbox.style.height = `${HEIGHT}px`;
    sandbox.style.zIndex = '-1';
    document.body.appendChild(sandbox);

    const tempRoot = document.createElement('div');
    const legendHtml = seriesKeys
      .map((key, i) => {
        const label = key.charAt(0).toUpperCase() + key.slice(1);
        return `
        <div style="
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
          min-width: 120px;
          justify-content: center;
        ">
          <div style="
            width: 22px;
            height: 22px;
            border-radius: 50%;
            background: ${customColors[i] || colors[i % colors.length]};
            border: 1.5px solid #aaa;
            display: flex;
            align-items: center;
            justify-content: center;
          "></div>
          <span style="
            font-size: 17px;
            font-weight: 600;
            color: ${customColors[i] || colors[i % colors.length]};
            line-height: 22px;
            display: block;
            text-align: left;
          ">${label}</span>
        </div>
      `;
      })
      .join('');

    let tableHtml = '';
    if (includeTable) {
      const tableHeaderHtml = `
    <tr>
      <th style="border-bottom:2px solid #ddd; width: 100%; justify-content: between; align-items: center; padding: 0 60px 16px 16px; text-align:center; font-size:17px; color:#272025; background:#f5f0f7;">
        ${xKey.charAt(0).toUpperCase() + xKey.slice(1)}
      </th>
      ${seriesKeys
        .map(
          (key, i) => `
        <th style="
          border-bottom:2px solid #ddd;
          padding: 0 60px 16px 16px;
          width: 18%;
          justify-content: center;
          text-align:center;
          align-items: center;
          font-size:17px;
          color:${customColors[i] || colors[i % colors.length]};
          background:#f5f0f7;
        ">
          ${key.charAt(0).toUpperCase() + key.slice(1)}
        </th>
      `,
        )
        .join('')}
    </tr>
  `;
      const tableRowsHtml = filteredData
        .map(
          (item) => `
    <tr>
      <td style="border-bottom:1px solid #f0e6f5; width: 100%; justify-content: between; align-items: center; padding: 0 60px 16px 16px; font-size:16px; text-align:center;">
        ${item[xKey]}
      </td>
      ${seriesKeys
        .map(
          (key, i) => `
        <td style="
          border-bottom:1px solid #f0e6f5;
          width: 18%;
          font-size:16px;
          justify-content: center;
          align-items: center; 
          text-align:center;
          padding: 0 60px 16px 16px;
          color: ${customColors[i] || colors[i % colors.length]};
          font-weight: 500;
          background: #fdfafd;
        ">
          ${item[key]}
        </td>
      `,
        )
        .join('')}
    </tr>
  `,
        )
        .join('');

      tableHtml = `
    <div id="table-export" style="
      width: 1000px; 
      height: fit;
      margin: 28px auto 0 auto; 
      border-radius: 18px; 
      overflow: hidden; 
      box-shadow: 0 2px 12px #dbb7e821;">
      <table style="
        width: 100%; 
        border-collapse: collapse; 
        font-family: inherit; 
        background: #fff8fd;">
        ${tableHeaderHtml}
        ${tableRowsHtml}
      </table>
    </div>
  `;
    }

    tempRoot.innerHTML = `
  <div style="width: 100%; height: 100%; padding: 32px; display: flex; flex-direction: column; justify-content: flex-start;">
    <h1 style="color: #97639c; font-size: 38px; text-align: center; font-weight: bold; margin-bottom: 22px; margin-top: 6px;">
      ${title}
    </h1>
    <div id="legend-export" style="
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 40px;
      margin-bottom: 25px;
      margin-top: 2px;
      width: 100%;
    ">
      ${legendHtml}
    </div>
    <div id="chart-export" style="width: 1000px; height: 600px; align-self: center;"></div>
    ${tableHtml}
  </div>
`;
    tempRoot.style.width = '100%';
    tempRoot.style.height = '100%';
    sandbox.appendChild(tempRoot);

    const chartExportDiv = tempRoot.querySelector('#chart-export');
    const root = createRoot(chartExportDiv!);
    root.render(
      <BarChart width={1000} height={600} data={filteredData} barSize={24}>
        <CartesianGrid strokeDasharray='3 3' vertical={false} stroke='#ccc' />
        <XAxis dataKey={xKey} axisLine={false} tickLine={false} height={60} />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip />
        {seriesKeys.map((key, index) => (
          <Bar
            key={key}
            dataKey={key}
            fill={customColors[index] || colors[index % colors.length]}
            radius={[10, 10, 0, 0]}
            isAnimationActive={false}
            activeBar={<Rectangle />}
          />
        ))}
      </BarChart>,
    );

    setTimeout(async () => {
      const canvas = await html2canvas(sandbox, {
        backgroundColor: format === 'png' ? null : '#ffffff',
        useCORS: true,
        width: WIDTH,
        height: HEIGHT,
        scale: 2,
      });
      const dataURL = canvas.toDataURL(`image/${format}`);

      if (format === 'pdf') {
        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'px',
          format: [WIDTH, HEIGHT],
        });
        pdf.addImage(dataURL, 'PNG', 0, 0, WIDTH, HEIGHT);
        pdf.save('grafica.pdf');
      } else {
        const link = document.createElement('a');
        link.download = `grafica.${format}`;
        link.href = dataURL;
        link.click();
      }
      root.unmount();
      document.body.removeChild(sandbox);
    }, 600);
  };
  // ---------------------------------

  if (!visible) return null;

  return (
    <div
      ref={menuRef}
      id='options-menu'
      className='absolute right-0 mt-2 bg-white shadow-md rounded-lg z-50 p-4 w-72 animate-fadeIn'
    >
      <h3 className='font-semibold text-lg mb-3'>Opciones de gráfica</h3>

      <div className='mb-4'>
        <label className='block mb-1 text-sm'>Máximo seleccionables:</label>
        <input
          type='number'
          min={0}
          max={totalItems}
          value={maxItemsSelected && maxItemsSelected > 0 ? maxItemsSelected : ''}
          onChange={(e) => handleMaxChange(e.target.value)}
          className='w-full border p-1 rounded'
          placeholder='Sin Límites'
        />
      </div>

      <div className='mb-4'>
        <label className='block mb-1 text-sm'>Colores de la gráfica:</label>
        <div className='mb-2'>
          <button
            className='w-full bg-gray-200 text-gray-800 py-1 rounded hover:bg-gray-300 text-xs'
            onClick={handleRestoreAllDefaults}
          >
            Restaurar todos los colores por defecto
          </button>
        </div>
        <div className='mt-2 flex flex-wrap gap-2 transition-all duration-300'>
          {seriesKeys.map((_, i) => (
            <div key={i} className='relative flex flex-col items-center'>
              <div
                className='w-5 h-5 rounded-full border transition-colors duration-300 cursor-pointer'
                style={{ backgroundColor: colors[i] }}
                title={colors[i]}
                onClick={() => setColorPickerOpenIndex(i)}
              />
              {colorPickerOpenIndex === i && (
                <div className='absolute top-7 left-0 z-50 bg-white p-3 shadow rounded flex flex-col gap-2 min-w-[210px]'>
                  <span className='text-xs mb-1 font-semibold'>Colores predeterminados:</span>
                  <div className='flex flex-wrap gap-1 mb-1'>
                    {PALETTE.map((p) => (
                      <button
                        key={p.hex}
                        className='w-6 h-6 rounded-full border'
                        style={{ backgroundColor: p.hex }}
                        onClick={() => handleChangeColor(i, p.hex)}
                        title={p.name}
                      />
                    ))}
                  </div>
                  <span className='text-xs mb-1 font-semibold'>Colores del sistema:</span>
                  <div className='flex flex-wrap gap-1 mb-1'>
                    {defaultColors.map((defColor, idx) => (
                      <button
                        key={idx}
                        className='w-6 h-6 rounded-full border'
                        style={{ backgroundColor: defColor }}
                        onClick={() => handleChangeColor(i, defColor)}
                        title={defColor}
                      />
                    ))}
                  </div>
                  <div className='flex items-center gap-2 mb-1'>
                    <input
                      type='text'
                      value={colorPickerInput}
                      onChange={(e) => setColorPickerInput(e.target.value)}
                      placeholder='#FF5733'
                      className='w-full border p-1 rounded text-xs'
                    />
                    <button
                      className='text-xs py-1 px-2 rounded bg-blue-400 hover:bg-blue-600 text-white'
                      onClick={() => {
                        if (/^#([0-9A-F]{3}){1,2}$/i.test(colorPickerInput)) {
                          handleChangeColor(i, colorPickerInput);
                        }
                      }}
                    >
                      Usar HEX
                    </button>
                  </div>
                  <button
                    className='text-xs mt-1 py-1 px-2 rounded bg-gray-100 hover:bg-gray-200'
                    onClick={() => handleRestoreDefault(i)}
                  >
                    Restaurar color de la sección
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className='mb-4'>
        <label className='block mb-1 text-sm'>Formato de descarga:</label>
        <Select
          open={selectOpen}
          onOpenChange={setSelectOpen}
          value={format}
          onValueChange={(v) => setFormat(v as 'png' | 'jpg' | 'pdf')}
        >
          <SelectTrigger>
            <SelectValue placeholder='Formato' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='png'>PNG</SelectItem>
            <SelectItem value='jpg'>JPG</SelectItem>
            <SelectItem value='pdf'>PDF</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className='mb-4 flex items-center gap-2'>
        <Switch
          checked={includeTable}
          onCheckedChange={setIncludeTable}
          id='switch-table-summary'
        />
        <label htmlFor='switch-table-summary' className='text-sm cursor-pointer select-none'>
          Incluir tabla resumen de datos
        </label>
      </div>

      <button
        onClick={handleDownload}
        className='w-full bg-blue-500 text-white py-1 rounded hover:bg-blue-600 mb-3'
      >
        Descargar
      </button>

      <button
        onClick={() => {
          setVisible(false);
          onToggleVisibility();
        }}
        className='w-full bg-yellow-100 text-yellow-800 py-1 rounded hover:bg-yellow-200'
      >
        Minimizar sección
      </button>
    </div>
  );
};

export default OptionsMenu;
