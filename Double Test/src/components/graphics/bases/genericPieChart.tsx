'use client';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import withIconDecorator from '../../decorators/IconDecorator';
import { interpolateRgb } from 'd3-interpolate';
import * as Icons from '../../icons';

export const Options = withIconDecorator(Icons.DotsThree);
export const Back = withIconDecorator(Icons.ArrowBendUpLeft);

interface ConcentricDonutChartProps {
  apiEndpoint: string;
  dataPath: string;
  title?: string;
  areaInner: string;
  areaOuter?: string;
  outerFilterValues?: string[];
  colorPalette?: string[];
  statusColors?: string[];
  imageSrc?: string;
}

function toGrayish(hex: string, intensity: number = 1): string {
  const parsed = hex.replace('#', '');
  const r = parseInt(parsed.substring(0, 2), 16);
  const g = parseInt(parsed.substring(2, 4), 16);
  const b = parseInt(parsed.substring(4, 6), 16);

  const gray = Math.round((r + g + b) / 3);
  const newR = Math.round(r * (1 - intensity) + gray * intensity);
  const newG = Math.round(g * (1 - intensity) + gray * intensity);
  const newB = Math.round(b * (1 - intensity) + gray * intensity);

  return `#${[newR, newG, newB].map((v) => v.toString(16).padStart(2, '0')).join('')}`;
}

const ConcentricDonutChart: React.FC<ConcentricDonutChartProps> = ({
  apiEndpoint,
  dataPath,
  title = 'Gráfico Concéntrico',
  areaInner,
  areaOuter = 'status',
  outerFilterValues = [],
  colorPalette,
  statusColors,
  imageSrc = '/assets/logo.png',
}) => {
  const [innerData, setInnerData] = useState<any[]>([]);
  const [outerData, setOuterData] = useState<any[]>([]);
  const [fade, setFade] = useState(false);
  const [fadeSec, setFadeSec] = useState(false);
  const [selectedRol, setSelectedRol] = useState<string | undefined>(undefined);
  const [rolColor, setRolColor] = useState<string | undefined>(undefined);
  const isFirstRender = useRef(true);
  const [animatedInnerFills, setAnimatedInnerFills] = useState<string[]>([]);
  const [animatedOuterFills, setAnimatedOuterFills] = useState<string[]>([]);
  const [interactionsDisabled, setInteractionsDisabled] = useState(true);

  useEffect(() => {
    const steps = 20;
    const stepDuration = 15;

    let step = 0;

    const innerInterpolators = innerData.map((entry, index) => {
      const from = animatedInnerFills[index] || entry.fill; // último color mostrado
      const to =
        !selectedRol || entry.name === selectedRol
          ? entry.fill // transición hacia color original
          : toGrayish(entry.fill); // o hacia gris
      return interpolateRgb(from, to);
    });

    const outerInterpolators = outerData.map((entry, index) => {
      const from = animatedOuterFills[index] || entry.fill;
      const to = !selectedRol || entry.rol === selectedRol ? entry.fill : toGrayish(entry.fill);
      return interpolateRgb(from, to);
    });

    const interval = setInterval(() => {
      step += 1;
      const progress = Math.min(step / steps, 1);

      setAnimatedInnerFills(innerInterpolators.map((fn) => fn(progress)));
      setAnimatedOuterFills(outerInterpolators.map((fn) => fn(progress)));

      if (progress >= 1) clearInterval(interval);
    }, stepDuration);

    return () => clearInterval(interval);
  }, [selectedRol, innerData, outerData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiEndpoint, {
          headers: {
            Authorization: `Bearer ${typeof window !== 'undefined' ? localStorage.getItem('api_token') : ''}`,
          },
        });

        const json = await res.json();
        const source = dataPath ? json[dataPath] : json;

        if (!Array.isArray(source)) {
          console.warn(`⚠️ El formato de ${dataPath} no es un array.`);
          return;
        }

        const defaultPalette = ['#683756', '#97639c', '#B77690', '#A0D2DB', '#FFB86F'];
        const defaultSecondPalette = ['#488262FF', '#BBA44BFF', '#BB4B4BFF', '#aaa'];
        const parsedPalette = colorPalette ?? defaultPalette;
        const parsedSecondPalette = statusColors ?? defaultSecondPalette;

        const innerMap = new Map<string, number>();

        const outerCounts: Record<string, Record<string, number>> = {};

        source.forEach((item) => {
          const inner = item[areaInner] ?? 'Desconocido';
          const outer = item[areaOuter] ?? 'Desconocido';
          const value = Number(item.total) || 0;

          innerMap.set(inner, (innerMap.get(inner) || 0) + value);

          if (!outerCounts[inner]) outerCounts[inner] = {};
          outerCounts[inner][outer] = (outerCounts[inner][outer] || 0) + value;
        });

        // Generar innerData y outerData sincronizados
        const innerArray = Array.from(innerMap.entries()).map(([name, total], index) => ({
          name,
          total,
          fill: parsedPalette[index % parsedPalette.length],
        }));

        const outerArray: any[] = [];
        innerArray.forEach((segment) => {
          const outer = outerCounts[segment.name];

          Object.entries(outer).forEach(([status, value], index) => {
            if (outerFilterValues.length === 0 || outerFilterValues.includes(status)) {
              outerArray.push({
                name: status,
                rol: segment.name,
                total: value,
                fill: parsedSecondPalette[index % parsedSecondPalette.length],
              });
            }
          });
        });

        setInnerData(innerArray);
        setOuterData(outerArray);
        setFade(true);
        setFadeSec(true);
        setTimeout(() => {
          setFade(false);
          setFadeSec(false);
        }, 200);
        setTimeout(() => {
          isFirstRender.current = false;
          setInteractionsDisabled(false);
        }, 2300);
      } catch (err) {
        console.error('❌ Error al cargar datos:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='bg-white rounded-xl w-full h-full p-4 flex flex-col'>
      {/* Título */}
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-2xl'>{title}</h1>
        <Options
          fillColor='var(--secondaryColor)'
          strokeColor='var(--secondaryColor)'
          strokeWidth={2.5}
          width={'3vmax'}
          height={'3vmax'}
        />
      </div>

      {/* Gráfico */}
      <div className='relative w-full h-[300px]'>
        {innerData.length === 0 ? (
          <div className='flex justify-center items-center h-full w-full'>
            <p className='text-textDim text-lg'>No hay datos para mostrar</p>
          </div>
        ) : (
          <div className='pointer-events-none relative w-full h-full'>
            <ResponsiveContainer>
              <PieChart>
                {/* Círculo interno - áreas principales */}
                <Pie
                  data={innerData}
                  dataKey='total'
                  nameKey='name'
                  paddingAngle={1}
                  cx='50%'
                  cy='50%'
                  innerRadius='43%'
                  outerRadius='70%'
                  isAnimationActive
                >
                  {innerData.map((entry, index) => (
                    <Cell
                      key={`inner-${index}`}
                      fill={
                        isFirstRender.current
                          ? entry.fill
                          : (animatedInnerFills[index] ?? entry.fill)
                      }
                    />
                  ))}
                </Pie>

                {/* Círculo externo - desglose alineado */}
                <Pie
                  data={outerData}
                  dataKey='total'
                  nameKey='name'
                  paddingAngle={1}
                  cx='50%'
                  cy='50%'
                  innerRadius='75%'
                  outerRadius='95%'
                  isAnimationActive
                >
                  {outerData.map((entry, index) => (
                    <Cell
                      key={`outer-${index}`}
                      fill={
                        isFirstRender.current
                          ? entry.fill
                          : (animatedOuterFills[index] ?? entry.fill)
                      }
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            {/* Imagen central */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full p-2 transition-opacity duration-300 ${
                fadeSec ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <Image src={imageSrc} alt='Logo centro' width={60} height={60} />
            </div>
          </div>
        )}
      </div>

      {/* Leyendas Interactivas */}
      {innerData.length > 0 ? (
        <div
          className={`flex ${interactionsDisabled ? 'pointer-events-none' : ''} flex-col items-center gap-3 mt-4 transition-opacity duration-300 ${
            fade ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className={`flex flex-row items-center justify-end w-full relative`}>
            {/* Título dinámico */}
            <div className='flex flex-col w-full items-center justify-center'>
              <h2
                className='text-lg font-bold text-center'
                style={{ color: selectedRol !== undefined ? rolColor : undefined }}
              >
                {selectedRol === undefined ? 'Leyendas' : selectedRol}
              </h2>
              {selectedRol == undefined ? (
                <span className={'text-xs text-textDim'}>
                  Selecciona una leyenda para ver sus propiedades.
                </span>
              ) : (
                <span className={'text-xs text-textDim'}>Propiedades de la leyenda.</span>
              )}
            </div>
            {selectedRol !== undefined && (
              <button
                onClick={() => {
                  setFade(true);
                  setTimeout(() => {
                    setSelectedRol(undefined);
                    setRolColor(undefined);
                    setFade(false);
                  }, 200);
                }}
                className='hover:opacity-80 hover:scale-125 transition-all absolute'
              >
                <Back
                  fillColor='var(--secondaryColor)'
                  strokeColor='var(--secondaryColor)'
                  strokeWidth={1}
                  width={20}
                  height={20}
                />
              </button>
            )}
          </div>

          {/* Leyenda principal o detalle */}
          <div className='flex gap-2 justify-center items-center text-center h-full'>
            {selectedRol === undefined
              ? innerData.map((item) => {
                  const hasDetails = outerData.some((d) => d.rol === item.name);
                  return (
                    <div
                      key={item.name}
                      className='flex flex-col hover:scale-110 transition-all items-center w-24 text-center cursor-pointer group'
                      style={{ color: item.fill || '#ccc' }}
                      onClick={() => {
                        if (hasDetails) {
                          setFade(true);
                          setTimeout(() => {
                            setSelectedRol(item.name);
                            setRolColor(item.fill);
                            setFade(false);
                          }, 200);
                        }
                      }}
                      title={hasDetails ? 'Ver detalles' : 'Sin detalles'}
                    >
                      <div className='items-center justify-center gap-1 mb-1'>
                        <div
                          className='w-5 h-5 rounded-full'
                          style={{ backgroundColor: item.fill || '#ccc' }}
                        />
                      </div>
                      <h1 className='font-semibold text-sm'>{item.total}</h1>
                      <h2 className='text-xs text-gray-600 break-words'>{item.name}</h2>
                    </div>
                  );
                })
              : outerData
                  .filter((d) => d.rol === selectedRol)
                  .map((item, idx) => (
                    <div
                      key={idx}
                      className='flex flex-col items-center w-24 text-center'
                      style={{ color: item.fill || '#ccc' }}
                    >
                      <div
                        className='w-5 h-5 rounded-full mb-1'
                        style={{ backgroundColor: item.fill || '#ccc' }}
                      />
                      <h1 className='font-semibold text-sm'>{item.total}</h1>
                      <h2 className='text-xs text-gray-600 break-words'>{item.name}</h2>
                    </div>
                  ))}
          </div>
        </div>
      ) : undefined}
    </div>
  );
};

export default ConcentricDonutChart;
