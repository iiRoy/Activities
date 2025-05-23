'use client';

import Pagination from '@/components/buttons_inputs/Pagination';
import InputField from '@/components/buttons_inputs/InputField';
import Button from '@/components/buttons_inputs/Button';
import PageTitle from '@/components/headers_menu_users/pageTitle';
import FiltroEvento from '@/components/headers_menu_users/FiltroEvento';
import { MagnifyingGlass, Trash, Highlighter } from '@/components/icons';
import { useState, useMemo } from 'react';

const SedesAdmin = () => {
  const [inputValue, setInputValue] = useState('');
  const [section, setSection] = useState('SEDES');
  const [filterActivaExtra, setFilterActivaExtra] = useState({});
  const [fadeSec, setFadeSec] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const rowsPerPage = 5;

  const sedes = [
    { label: 'Puebla', value: 'Puebla' },
    { label: 'Querétaro', value: 'Querétaro' },
    { label: 'Monterrey', value: 'Monterrey' },
    { label: 'Hidalgo', value: 'Hidalgo' },
    { label: 'Guadalajara', value: 'Guadalajara' },
  ];

  const extraHandleFilterChange = (key: string, value: string) => {
    setFilterActivaExtra((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const sedesData = [
    {
      id: '01',
      universidad: 'ITESM',
      lugar: 'Puebla',
      coordinador: 'Rosa Paredes',
      grupos: '07',
      estudiantes: '63',
    },
    {
      id: '02',
      universidad: 'ITESM',
      lugar: 'Querétaro',
      coordinador: 'Beatriz Mendoza',
      grupos: '06',
      estudiantes: '55',
    },
    {
      id: '03',
      universidad: 'ITESM',
      lugar: 'Monterrey',
      coordinador: 'Carolina Reyes',
      grupos: '11',
      estudiantes: '103',
    },
    {
      id: '04',
      universidad: 'ITESM',
      lugar: 'Hidalgo',
      coordinador: 'Diana Soto',
      grupos: '04',
      estudiantes: '39',
    },
    {
      id: '05',
      universidad: 'ITESM',
      lugar: 'Guadalajara',
      coordinador: 'Fabiola Paredes',
      grupos: '09',
      estudiantes: '87',
    },
    {
      id: '06',
      universidad: 'ITESM',
      lugar: 'Saltillo',
      coordinador: 'Luis Torres',
      grupos: '08',
      estudiantes: '72',
    },
    {
      id: '07',
      universidad: 'ITESM',
      lugar: 'Ciudad de México',
      coordinador: 'María López',
      grupos: '10',
      estudiantes: '95',
    },
    {
      id: '08',
      universidad: 'ITESM',
      lugar: 'Toluca',
      coordinador: 'Juan Pérez',
      grupos: '06',
      estudiantes: '58',
    },
    {
      id: '09',
      universidad: 'ITESM',
      lugar: 'León',
      coordinador: 'Patricia Ramírez',
      grupos: '07',
      estudiantes: '64',
    },
    {
      id: '10',
      universidad: 'ITESM',
      lugar: 'Chihuahua',
      coordinador: 'Oscar García',
      grupos: '05',
      estudiantes: '43',
    },
    {
      id: '11',
      universidad: 'ITESM',
      lugar: 'Culiacán',
      coordinador: 'Laura Jiménez',
      grupos: '09',
      estudiantes: '88',
    },
    {
      id: '12',
      universidad: 'ITESM',
      lugar: 'San Luis Potosí',
      coordinador: 'Antonio Salinas',
      grupos: '07',
      estudiantes: '70',
    },
    {
      id: '13',
      universidad: 'ITESM',
      lugar: 'Aguascalientes',
      coordinador: 'Isabel Rodríguez',
      grupos: '08',
      estudiantes: '74',
    },
    {
      id: '14',
      universidad: 'ITESM',
      lugar: 'Tijuana',
      coordinador: 'Miguel Sánchez',
      grupos: '06',
      estudiantes: '60',
    },
    {
      id: '15',
      universidad: 'ITESM',
      lugar: 'Zacatecas',
      coordinador: 'Fernanda Ortega',
      grupos: '04',
      estudiantes: '35',
    },
  ];

  // Filtrar los datos según el valor de búsqueda (solo por las columnas "Universidad" y "Campus")
  const filteredData = useMemo(() => {
    const searchTerm = inputValue.toLowerCase().trim();
    if (!searchTerm) {
      return sedesData;
    }

    return sedesData.filter(
      (item) =>
        item.id.toLowerCase().includes(searchTerm) ||
        item.universidad.toLowerCase().includes(searchTerm) ||
        item.lugar.toLowerCase().includes(searchTerm) ||
        item.coordinador.toLowerCase().includes(searchTerm),
    );
  }, [inputValue]);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    currentPage * rowsPerPage,
    (currentPage + 1) * rowsPerPage,
  );

  return (
    <div className='p-6 pl-14 flex gap-4 flex-col text-primaryShade pagina-sedes'>
      <PageTitle>Sedes</PageTitle>

      <div className='fondo-sedes flex flex-col p-6 gap-4 overflow-auto'>
        {/* Fila de búsqueda, filtro y botón */}
        <div className='flex flex-wrap items-center justify-between gap-4'>
          <div className='flex flex-1 gap-4'>
            <div className='basis-2/3'>
              <InputField
                label=''
                showDescription={false}
                placeholder='Search'
                showError={false}
                variant='primary'
                icon='MagnifyingGlass'
                value={inputValue}
                onChangeText={(val) => setInputValue(val)}
              />
            </div>

            <div className='basis-1/3'>
              <FiltroEvento
                disableCheckboxes
                label='Filtros'
                showSecciones
                labelSecciones='Secciones'
                secciones={[
                  { label: 'ITESM Puebla', value: 'Participantes' },
                  { label: 'ITESM Monterrey', value: 'Colaboradoras' },
                ]}
                seccionActiva={section}
                extraFilters={[]}
                filterActiva={filterActivaExtra}
                onExtraFilterChange={extraHandleFilterChange}
                fade={fadeSec}
              />
            </div>
          </div>
        </div>

        {/* Tabla */}
        <div className='overflow-x-auto'>
          <table className='min-w-full text-left text-sm'>
            <thead className='text-purple-800 font-bold'>
              <tr className='texto-primary-shade'>
                <th className='p-2 text-center'>ID</th>
                <th className='p-2 text-center'>Universidad</th>
                <th className='p-2 text-center'>Campus</th>
                <th className='p-2 text-center'>Coordinador</th>
                <th className='p-2 text-center'>No. de Grupos</th>
                <th className='p-2 text-center'>No. de Estudiantes</th>
                <th className='p-2 text-center'></th>
              </tr>
            </thead>
            <tbody className='text-gray-700'>
              {paginatedData.map((sede, index) => (
                <tr key={index} className='border-t border-gray-300'>
                  <td className='p-2 text-center'>{sede.id}</td>
                  <td className='p-2 text-center'>{sede.universidad}</td>
                  <td className='p-2 text-center'>{sede.lugar}</td>
                  <td className='p-2 text-center'>{sede.coordinador}</td>
                  <td className='p-2 text-center'>{sede.grupos}</td>
                  <td className='p-2 text-center'>{sede.estudiantes}</td>
                  <td className='p-2 flex gap-2 justify-center'>
                    <Button label='' variant='error' round showLeftIcon IconLeft={Trash} />
                    <Button
                      label=''
                      variant='warning'
                      round
                      showLeftIcon
                      IconLeft={Highlighter}
                      href={`sedes/editarSedes/editar${sede.lugar}`}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Paginación */}
        <div className='mt-auto pt-4 flex justify-center'>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            variant='secondary-shade'
            pageLinks={Array(totalPages).fill('#')}
          />
        </div>
      </div>
    </div>
  );
};

export default SedesAdmin;
