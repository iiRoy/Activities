'use client';

import Pagination from '@/components/buttons_inputs/Pagination';
import InputField from '@/components/buttons_inputs/InputField';
import Button from '@/components/buttons_inputs/Button';
import PageTitle from '@/components/headers_menu_users/pageTitle';
import FiltroEvento from '@/components/headers_menu_users/FiltroEvento';
import { Trash, Highlighter } from '@/components/icons';
import { useState, useMemo } from 'react';

const GestionCoordinadoras = () => {
  const [inputValue, setInputValue] = useState('');
  const [section, setSection] = useState('__All__'); // Inicializar con "Todas"
  const [currentPage, setCurrentPage] = useState(0);

  const rowsPerPage = 5;

  const coordinadorasData = [
    {
      id: '01',
      nombre: 'Ana García',
      sede: 'Puebla',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '02',
      nombre: 'Beatriz López',
      sede: 'Querétaro',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '03',
      nombre: 'Clara Martínez',
      sede: 'Monterrey',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '04',
      nombre: 'Diana Pérez',
      sede: 'Hidalgo',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '05',
      nombre: 'Elena Rodríguez',
      sede: 'Guadalajara',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '06',
      nombre: 'Fabiola Sánchez',
      sede: 'Saltillo',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '07',
      nombre: 'Gabriela Torres',
      sede: 'Ciudad de México',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '08',
      nombre: 'Hilda Vargas',
      sede: 'Toluca',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '09',
      nombre: 'Isabel Ramírez',
      sede: 'León',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '10',
      nombre: 'Julia Gómez',
      sede: 'Chihuahua',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '11',
      nombre: 'Karla Díaz',
      sede: 'Culiacán',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '12',
      nombre: 'Laura Fernández',
      sede: 'San Luis Potosí',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '13',
      nombre: 'María Morales',
      sede: 'Aguascalientes',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '14',
      nombre: 'Nadia Ortiz',
      sede: 'Tijuana',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '15',
      nombre: 'Olivia Castro',
      sede: 'Zacatecas',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
  ];

  // Obtener sedes únicas
  const uniqueSedes = Array.from(
    new Set(coordinadorasData.map((coordinadora) => coordinadora.sede)),
  ).sort();
  const sedeOptions = [
    { label: 'Todas', value: '__All__' },
    ...uniqueSedes.map((sede) => ({ label: sede, value: sede })),
  ];

  // Filtrar los datos según el valor de búsqueda y sede
  const filteredData = useMemo(() => {
    const searchTerm = inputValue.toLowerCase().trim();
    return coordinadorasData.filter((coordinadora) => {
      // Filtro por nombre
      const matchesSearch = !searchTerm || coordinadora.nombre.toLowerCase().includes(searchTerm);

      // Filtro por sede
      const matchesSede = section === '__All__' ? true : coordinadora.sede === section;

      return matchesSearch && matchesSede;
    });
  }, [inputValue, section]);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    currentPage * rowsPerPage,
    (currentPage + 1) * rowsPerPage,
  );

  const sectionFilterChange = (value: string) => {
    setSection(value);
    setInputValue(''); // Resetear búsqueda al cambiar de sección
    setCurrentPage(0); // Resetear página al cambiar de filtro
  };

  return (
    <div className='p-6 pl-14 flex gap-4 flex-col text-primaryShade pagina-sedes'>
      <PageTitle>Coordinadoras de Sede</PageTitle>

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
                labelSecciones='Sedes'
                secciones={sedeOptions}
                seccionActiva={section}
                onChangeSeccion={sectionFilterChange}
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
                <th className='p-2 text-center'>Nombre</th>
                <th className='p-2 text-center'>Sede</th>
                <th className='p-2 text-center'>Correo</th>
                <th className='p-2 text-center'>Teléfono</th>
                <th className='p-2 text-center'>Acciones</th>
              </tr>
            </thead>
            <tbody className='text-gray-700'>
              {paginatedData.map((coordinadora, index) => (
                <tr key={index} className='border-t border-gray-300'>
                  <td className='p-2 text-center'>{coordinadora.id}</td>
                  <td className='p-2 text-center'>{coordinadora.nombre}</td>
                  <td className='p-2 text-center'>{coordinadora.sede}</td>
                  <td className='p-2 text-center'>{coordinadora.correo}</td>
                  <td className='p-2 text-center'>{coordinadora.telefono}</td>
                  <td className='p-2 flex gap-2 justify-center'>
                    <Button label='' variant='error' round showLeftIcon IconLeft={Trash} />
                    <Button label='' variant='warning' round showLeftIcon IconLeft={Highlighter} />
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
            variant='primary'
            pageLinks={Array(totalPages).fill('#')}
          />
        </div>
      </div>
    </div>
  );
};

export default GestionCoordinadoras;
