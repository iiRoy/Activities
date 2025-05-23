'use client';
import { useEffect, useState, useCallback, useMemo } from 'react';
import UserCard from '@/components/headers_menu_users/UserCard';
import FiltroEvento from '@/components/headers_menu_users/FiltroEvento';
import * as Icons from '@/components/icons';
import withIconDecorator from '@/components/decorators/IconDecorator';

const iconMap: Record<string, keyof typeof Icons> = {
  Participantes: 'User',
  Colaboradoras: 'Users',
  Administración: 'IdentificationBadge',
  SEDES: 'Bank',
};

const CardSection = () => {
  const [mounted, setMounted] = useState(false);
  const [resumenEvento, setResumenEvento] = useState<any>({});
  const [fadeSec, setFadeSec] = useState(false);
  const [filters, setFilters] = useState({
    page: 'evento',
    sede: '__all__',
    colab: '__all__',
  });
  const [filterActivaExtra, setFilterActivaExtra] = useState<Record<string, string>>({
    sede: filters.sede,
    colab: filters.colab,
  });
  const [section, setSection] = useState('Participantes');
  const [sedes, setSedes] = useState<{ value: string; label: string }[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fetchDashboardData = async (filters: {
    page: string;
    sede?: string;
    colab?: string;
  }): Promise<any> => {
    const { page, sede, colab } = filters;
    const params = new URLSearchParams();
    if (sede) params.append('id', sede);
    if (colab) params.append('colab', colab);

    try {
      const res = await fetch(`/api/data?page=${page}&${params.toString()}`, {
        headers: {
          Authorization: `Bearer ${typeof window !== 'undefined' ? localStorage.getItem('api_token') : ''}`,
        },
      });
      return await res.json();
    } catch (error) {
      console.error('Error cargando resumenEvento:', error);
      return null;
    }
  };

  const toValidNumber = (val: any): number => {
    const num = Number(val);
    return isNaN(num) ? 0 : num;
  };

  const loadData = useCallback(async () => {
    const data = await fetchDashboardData(filters);
    if (data?.resumenEvento) setResumenEvento(data.resumenEvento);
  }, [filters]);

  const loadSedes = useCallback(async () => {
    const response = await fetchDashboardData({ page: 'venues' });
    if (response?.venues) {
      const opciones = response.venues.map((sede: any) => ({
        value: sede.id.toString?.() ?? `${sede.id}`,
        label: sede.name,
      }));

      setSedes([{ value: '__all__', label: 'Todas las sedes' }, ...opciones]);
    }
  }, []);

  const IconComponent = useMemo(() => {
    const iconKey = iconMap[section] || 'CaretDoubleDown';
    return withIconDecorator(Icons[iconKey]);
  }, [section]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    loadSedes();
  }, [loadSedes]);

  const renderCards = () => {
    switch (section) {
      case 'Participantes': {
        const p = resumenEvento.total_participantes || {};
        return (
          <>
            <UserCard type='activas' count={toValidNumber(p.Aprobadas)} />
            <UserCard type='pendientes' count={toValidNumber(p.Pendientes)} />
            <UserCard
              type='desactivadas'
              count={toValidNumber(p.Rechazadas) + toValidNumber(p.Canceladas)}
            />
            <UserCard
              type='totales'
              count={toValidNumber(
                Object.values(p).reduce((a, b) => toValidNumber(a) + toValidNumber(b), 0),
              )}
            />
          </>
        );
      }
      case 'Colaboradoras': {
        const c = resumenEvento.total_colaboradores || {};
        return (
          <>
            <UserCard type='aprobadas' count={toValidNumber(c.Aprobadas)} />
            <UserCard type='pendientes' count={toValidNumber(c.Pendientes)} />
            <UserCard
              type='desactivadas'
              count={toValidNumber(c.Rechazadas) + toValidNumber(c.Canceladas)}
            />
            <UserCard
              type='totales'
              count={toValidNumber(
                Object.values(c).reduce((a, b) => toValidNumber(a) + toValidNumber(b), 0),
              )}
            />
          </>
        );
      }
      case 'Administración':
        const cd = resumenEvento.total_coordinadoras || {};
        return (
          <>
            <UserCard type='mentoras' count={toValidNumber(resumenEvento.total_mentoras)} />
            <UserCard type='coord. General' count={toValidNumber(cd.coord_gen)} />
            <UserCard type='coord. Asociada' count={toValidNumber(cd.coord_aso)} />
            <UserCard type='coord. de Informes' count={toValidNumber(cd.coord_info)} />
          </>
        );
      case 'SEDES': {
        const s = resumenEvento.total_sedes || {};
        return (
          <>
            <UserCard
              type='activas'
              count={
                toValidNumber(s['Registrada sin participantes']) +
                toValidNumber(s['Registrada con participantes'])
              }
            />
            <UserCard type='pendientes' count={toValidNumber(s.Pendiente)} />
            <UserCard
              type='desactivadas'
              count={toValidNumber(s.Rechazada) + toValidNumber(s.Cancelada)}
            />
            <UserCard
              type='totales'
              count={toValidNumber(
                Object.values(s).reduce((a, b) => toValidNumber(a) + toValidNumber(b), 0),
              )}
            />
          </>
        );
      }
      default:
        return null;
    }
  };

  const normalizeFilterValue = (key: string, value: string): string => {
    if (value === '__all__') return '';
    return value;
  };

  const extraHandleFilterChange = (key: string, value: string) => {
    const normalizedValue = normalizeFilterValue(key, value);
    const animateSetter = setFadeSec;

    animateSetter(true);
    setTimeout(() => {
      setFilters((prev) => ({ ...prev, [key]: normalizedValue }));
      setFilterActivaExtra((prev) => ({ ...prev, [key]: normalizedValue }));
    }, 250);
    setTimeout(() => {
      animateSetter(false);
    }, 300);
  };

  const sectionFilterChange = (value: string) => {
    setFadeSec(true);
    setTimeout(() => {
      setFadeSec(false);
      setSection(value);
    }, 300);
  };

  if (!mounted) return null;

  return (
    <div className='flex gap-3 flex-col items-center justify-center'>
      <div className='flex justify-between w-full items-center'>
        <div className='flex flex-col md:flex-row items-center justify-center w-full relative gap-2 md:gap-9'>
          <div>
            <div
              className={`mb-[-6px] flex flex-row gap-3 items-center justify-between transition-opacity duration-300 ${fadeSec ? 'opacity-0' : 'opacity-100'}`}
            >
              <IconComponent
                fillColor='var(--text-color)'
                strokeColor='var(--background)'
                strokeWidth={0.7}
                width={'3vmax'}
                height={'3vmax'}
              />
              <h1 className='flex flex-row text-text text-[3vmax] items-baseline gap-2'>
                {section}
                {section === 'Colaboradoras' && filters.colab && (
                  <span className='text-[2vmax] font-light'>
                    {
                      {
                        in: '(Instructoras)',
                        fa: '(Facilitadoras)',
                        st: '(Staff)',
                      }[filters.colab]
                    }
                  </span>
                )}
              </h1>
            </div>
            <div
              className={`md:ml-[4.4vw] flex items-center justify-center md:justify-start md:items-start text-[1.5vmax] text-text transition-opacity duration-300 ${
                fadeSec ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {filters.sede !== '__all__' && section !== 'SEDES' && (
                <span>{filters.sede && sedes.find((s) => s.value === filters.sede)?.label}</span>
              )}
            </div>
          </div>
          <FiltroEvento
            disableCheckboxes
            label='Filtros'
            showSecciones
            labelSecciones='Secciones'
            secciones={[
              { label: 'Participantes', value: 'Participantes' },
              { label: 'Colaboradoras', value: 'Colaboradoras' },
              { label: 'Administración', value: 'Administración' },
              { label: 'SEDES', value: 'SEDES' },
            ]}
            seccionActiva={section}
            onChangeSeccion={sectionFilterChange}
            extraFilters={[
              section === 'Colaboradoras'
                ? {
                    label: 'Tipo de colaboradora',
                    key: 'colab',
                    options: [
                      { label: 'Todas', value: '__all__' },
                      { label: 'Instructora', value: 'in' },
                      { label: 'Facilitadora', value: 'fa' },
                      { label: 'Staff', value: 'st' },
                    ],
                  }
                : null,
              section !== 'SEDES'
                ? {
                    label: 'SEDE',
                    key: 'sede',
                    options: sedes,
                  }
                : null,
            ].filter(Boolean)}
            filterActiva={filterActivaExtra}
            onExtraFilterChange={extraHandleFilterChange}
            fade={fadeSec}
          />
        </div>
      </div>
      <div className='w-full lg:w-4/7 flex flex-col'>
        <div
          className={`flex flex-wrap gap-4 justify-between transition-opacity duration-300 ${
            fadeSec ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {renderCards()}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
